import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Keypair } from '@solana/web3.js';

interface WalletState {
    wallet: Keypair | null;
    balance: number | null;
    error: string;
    amount: string;
    recipient: string;
    transactionStatus: string
}

const initialState: WalletState = {
    wallet: null,
    balance: null,
    error: '',
    amount: '',
    recipient: '',
    transactionStatus: '',
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
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        setAmount(state, action: PayloadAction<string>) {
            state.amount = action.payload;
        },
        setRecipient(state, action: PayloadAction<string>) {
            state.recipient = action.payload;
        },
        setTransactionStatus(state, action: PayloadAction<string>) {
            state.transactionStatus = action.payload;
        },
    }
})

export const { setWallet, setBalance, setError, setAmount, setRecipient, setTransactionStatus } = walletSlice.actions
export default walletSlice.reducer



//   const [transactionStatus, setTransactionStatus] = useState<string | null>(null);