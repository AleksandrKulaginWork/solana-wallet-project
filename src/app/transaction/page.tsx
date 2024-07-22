'use client'

import { PublicKey, Connection, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/srore/store';
import { setAmount, setRecipient, setTransactionStatus } from '@/srore/walletSlice';

const TransactionPage = () => {
  const { wallet, amount, recipient, transactionStatus } = useSelector((state: RootState) => state.wallet)
  const dispatch = useDispatch<AppDispatch>()

  const connection = new Connection('https://api.devnet.solana.com');

  const handleSend = async () => {
    if (!wallet) {
      dispatch(setTransactionStatus('Кошелек не найден'));
      return;
    }

    try {
      const recipientPublicKey = new PublicKey(recipient);
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: recipientPublicKey,
          lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
        })
      );

      const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = wallet.publicKey;

      transaction.sign(wallet);

      const signature = await connection.sendRawTransaction(transaction.serialize());

      const confirmationStrategy = {
        signature,
        blockhash,
        lastValidBlockHeight
      };

      await connection.confirmTransaction(confirmationStrategy, 'finalized');

      dispatch(setTransactionStatus(`Транзакция успешна. Подпись: ${signature}`));
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(setTransactionStatus(`Ошибка транзакции: ${error.message}`));
      } else {
        dispatch(setTransactionStatus('Произошла неизвестная ошибка'));
      }
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-700">Создать Транзакцию</h1>
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="amount">Количество SOL:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => dispatch(setAmount(e.target.value))}
            className="p-2 border border-gray-300 rounded"
            placeholder="Введите количество SOL"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="recipient">Адрес кошелька получателя:</label>
          <input
            type="text"
            id="recipient"
            value={recipient}
            onChange={(e) => dispatch(setRecipient(e.target.value))}
            className="p-2 border border-gray-300 rounded"
            placeholder="Введите адрес кошелька"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Отправить
          </button>
        </div>
        {transactionStatus && (
          <p className={`mt-2 text-center ${transactionStatus.includes('успешна') ? 'text-green-600' : 'text-red-600'}`}>
            {transactionStatus}
          </p>
        )}
      </div>
    </div>
  );
};

export default TransactionPage;

