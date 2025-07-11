import { io } from 'socket.io-client';
import { SOCKET_URL } from '../config/constants';
import { useTransactionStore } from '../store/transactionStore';
import { calculateRiskScore, getRiskLevel } from '../utils/riskAnalysis';

const socket = io(SOCKET_URL, {
  transports: ['websocket'],
  autoConnect: false
});

export const initializeSocket = () => {
  socket.connect();

  socket.on('connect', () => {
    console.log('Connected to transaction server');
  });

  socket.on('newTransaction', (transaction) => {
    const riskScore = calculateRiskScore(transaction);
    const riskLevel = getRiskLevel(riskScore);
    
    const enrichedTransaction = {
      ...transaction,
      riskScore: riskLevel,
      status: riskLevel === 'High' ? 'Flagged' : 'Completed'
    };

    useTransactionStore.getState().addTransaction(enrichedTransaction);
    
    if (riskLevel === 'High') {
      useTransactionStore.getState().addAlert(enrichedTransaction);
    }
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from transaction server');
  });

  return socket;
};