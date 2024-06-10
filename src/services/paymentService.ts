import Payment from '../models/payment';
import { CreatePaymentDTO } from '../utils/dto';

export const createPayment = async (data: CreatePaymentDTO) => {
  return await Payment.create(data as any);
};

export const getPayments = async () => {
  return await Payment.findAll();
};

// Other CRUD operations...
