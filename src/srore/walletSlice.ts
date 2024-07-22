import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Keypair } from '@solana/web3.js';

interface WalletState {
    wallet: Keypair | null;
    balance: number | null;
    error: string | null;
}

const initialState: WalletState = {
    wallet: null,
    balance: null,
    error: null,
}

const walletSlice = createSlice({
    name: 'wallet',
    initialState,

    reducers: {
        setWallet(state, action: PayloadAction<Keypair>) {
            state.wallet = action.payload;
        },
        setBalance(state, action: PayloadAction<number | null>) {
            state.balance = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
    }
})

export const { setWallet, setBalance, setError } = walletSlice.actions
export default walletSlice.reducer