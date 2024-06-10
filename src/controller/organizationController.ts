import { Request, Response } from "express";
import * as organizationService from "../services/organizationService";

export const createOrganization = async (req: Request, res: Response) => {
  try {
    const organization = await organizationService.createOrganization(req.body);
    console.log(req.body)
    res.status(201).json(organization);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrganizations = async (req: Request, res: Response) => {
  try {
    const organizations = await organizationService.getOrganizations();
    res.status(200).json(organizations);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

