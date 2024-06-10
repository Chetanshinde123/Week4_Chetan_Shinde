import { Request, Response } from "express";
import * as customerService from "../services/customerService";

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await customerService.getCustomers();
    res.status(200).json(customers);
  } catch (error: any ) {
    res.status(500).json({ message: error.message });
  }
};

// Other CRUD operations...
