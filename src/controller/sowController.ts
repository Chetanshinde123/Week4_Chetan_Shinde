import { Request, Response } from 'express';
import * as sowService from '../services/sowService';

export const createSow = async (req: Request, res: Response) => {
  try {
    const sow = await sowService.createSow(req.body);
    res.status(201).json(sow);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getSows = async (req: Request, res: Response) => {
  try {
    const sows = await sowService.getSows();
    res.status(200).json(sows);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Other CRUD operations...
