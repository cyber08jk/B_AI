import { RISK_THRESHOLDS } from '../config/constants';

export const calculateRiskScore = (transaction: any) => {
  let score = 0;
  
  // Amount-based risk
  const amount = parseFloat(transaction.amount.replace(/[^0-9.-]+/g, ""));
  if (amount > 100000) score += 0.4;
  else if (amount > 50000) score += 0.2;
  
  // Time-based risk
  const hour = new Date().getHours();
  if (hour < 6 || hour > 23) score += 0.3;
  
  // Transaction type risk
  if (transaction.type === 'INTERNATIONAL') score += 0.3;
  
  return score;
};

export const getRiskLevel = (score: number) => {
  if (score >= RISK_THRESHOLDS.HIGH) return 'High';
  if (score >= RISK_THRESHOLDS.MEDIUM) return 'Medium';
  return 'Low';
};