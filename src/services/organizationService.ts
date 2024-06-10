import Organization from "../models/organization";
import { CreateOrganizationDTO } from "../utils/dto";

export const createOrganization = async (data: CreateOrganizationDTO) => {
  try {
    const newOrganization = await Organization.create(data as any);
    console.log("Data added");
    return newOrganization;
  } catch (error: any) {
    console.log("Data not added");
    throw new Error(error.message);
  }
};

export const getOrganizations = async () => {
  try {
    const organizations = await Organization.findAll();
    return organizations;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
