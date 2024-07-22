'use client'

import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/srore/store';
import { setBalance, setError, setWallet } from '@/srore/walletSlice';
import { usePathname, useRouter } from 'next/navigation';


const Header = () => {
  const { wallet, balance, error } = useSelector((state: RootState) => state.wallet);
  const dispatch = useDispatch<AppDispatch>()
  
  const router = useRouter();
  const pathname = usePathname()

  const connection = new Connection('https://api.devnet.solana.com');

  const createWallet = () => {
    const newWallet = Keypair.generate();
    dispatch(setWallet(newWallet));
    getBalanceWallet(newWallet.publicKey)
  };

  const getBalanceWallet = async (publicKey: PublicKey) => {
    try {
      const walletBalance = await connection.getBalance(publicKey)
      dispatch(setBalance(walletBalance / 1e9))
      dispatch(setError(''))
    } catch (error) {
      dispatch(setBalance(null))
      dispatch(setError('Ошибка получения баланса'))
    }
  }

  const handleLinkClick = (event: React.MouseEvent, targetPath: string) => {
    if (pathname === targetPath) {
      event.preventDefault();
    } else {
      router.push(targetPath);
    }
  }

  return (
    <div className="relative p-4 md:p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
    <div className="mb-4">
      <nav className="text-sm font-medium text-gray-700">
        <ol className="flex space-x-4">
          <li>
            <a 
              href="#" 
              className={`text-blue-500 hover:text-blue-600 ${pathname === '/' ? 'pointer-events-none text-gray-500' : ''}`}
              onClick={(e) => handleLinkClick(e, '/')}
            >
              Главная
            </a>
          </li>
          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li>
            <a 
              href="#" 
              className={`text-blue-500 hover:text-blue-600 ${pathname === '/transaction' ? 'pointer-events-none text-gray-500' : ''}`}
              onClick={(e) => handleLinkClick(e, '/transaction')}
            >
              Транзакция
            </a>
          </li>
        </ol>
      </nav>
    </div>

    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-700">Solana</h1>
    <div className="flex justify-center mb-4">
      {pathname === '/' ? (
        <button
        onClick={createWallet}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Создать новый кошелек
      </button>
      ): <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700">
        Транзакция
        </p> }
    </div>
    {wallet && (
      <div className="text-center">
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-700">
          Ваш баланс: {balance !== null ? `${balance} SOL` : 'Получение...'}
        </p>
        {error && (
          <p className="mt-2 text-red-600 text-sm md:text-base lg:text-lg">
            {error}
          </p>
        )}
      </div>
    )}
  </div>
  );
};

export default Header;
