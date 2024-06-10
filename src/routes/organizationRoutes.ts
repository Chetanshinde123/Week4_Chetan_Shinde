import { Router } from "express";
import { Request, Response } from "express";
import * as organizationController from "../controller/organizationController";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    await organizationController.createOrganization(req, res);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    await organizationController.getOrganizations(req, res);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
