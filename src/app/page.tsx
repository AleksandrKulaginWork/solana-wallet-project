'use client'

import { RootState } from "@/srore/store";
import { useSelector } from "react-redux";
import bs58 from 'bs58'


 const HomePage = () => {
  const wallet = useSelector((state: RootState) => state.wallet.wallet)
  const secretKeyBase58 = wallet?.secretKey ? bs58.encode(wallet.secretKey) : '';

  return (
    <div className="p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 max-w-4xl mx-auto">
    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-700">Информация о кошельке</h1>
    <div className="space-y-4">
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <p className="text-lg font-medium text-gray-700 mb-2">Адрес кошелька:</p>
        <p className="text-sm text-gray-600 break-all">{wallet?.publicKey.toString()}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <p className="text-lg font-medium text-gray-700 mb-2">Приватный ключ:</p>
        <p className="text-sm text-gray-600 break-all">{secretKeyBase58}</p>
      </div>
    </div>
  </div>
  );
}

export default HomePage