import Customer from "../models/customer";
import { CreateCustomerDTO } from "../utils/dto";

export const createCustomer = async (data: CreateCustomerDTO) => {
  return await Customer.create(data as any);
};

export const getCustomers = async () => {
  return await Customer.findAll();
};
