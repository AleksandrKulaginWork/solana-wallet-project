'use client'

import { useState } from 'react';
import { Connection, Keypair, PublicKey } from '@solana/web3.js';

const Header = () => {
  const [wallet, setWallet] = useState<Keypair | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const connection = new Connection('https://api.devnet.solana.com');

  const createWallet = () => {
    const newWallet = Keypair.generate();
    setWallet(newWallet);
    getBalanceWallet(newWallet.publicKey)
  };

  const getBalanceWallet = async (publicKey: PublicKey) => {
    try {
      const walletBalance = await connection.getBalance(publicKey)
      setBalance(walletBalance / 1e9)
      setError(null)
    } catch (error) {
      setBalance(null)
      setError('Ошибка получения баланса')
    }
  }

  return (
    <div>
      <h1>Solana</h1>
      <button onClick={createWallet}>Создать новый кошелек</button>
      {wallet && (
        <div>
          <p>Баланс: {balance !== null ? `${balance} SOL` : 'Получение...'} </p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          {/* <p>Адрес кошелька: {wallet.publicKey.toString()}</p>
          <p>Приватный ключ: {wallet.secretKey.toString()}</p> */}
        </div>
      )}
    </div>
  );
};

export default Header;
