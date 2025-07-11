import { create } from 'zustand';
import { io } from 'socket.io-client';

interface Transaction {
  id: string;
  amount: string;
  type: string;
  status: string;
  date: string;
  riskScore: string;
}

interface TransactionStore {
  transactions: Transaction[];
  recentAlerts: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  addAlert: (transaction: Transaction) => void;
}

const socket = io('wss://your-backend-url.com', {
  transports: ['websocket'],
});

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  recentAlerts: [],
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [transaction, ...state.transactions].slice(0, 100),
    })),
  addAlert: (transaction) =>
    set((state) => ({
      recentAlerts: [transaction, ...state.recentAlerts].slice(0, 10),
    })),
}));

// Initialize WebSocket listeners
socket.on('connect', () => {
  console.log('Connected to real-time transaction server');
});

socket.on('newTransaction', (transaction: Transaction) => {
  useTransactionStore.getState().addTransaction(transaction);
  
  // If transaction is flagged, add to alerts
  if (transaction.status === 'Flagged') {
    useTransactionStore.getState().addAlert(transaction);
  }
});

socket.on('disconnect', () => {
  console.log('Disconnected from real-time transaction server');
});