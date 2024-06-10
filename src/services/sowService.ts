import Sow from "../models/sow";
import { CreateSowDTO } from "../utils/dto";

export const createSow = async (sowData: CreateSowDTO) => {
  const {
    invoiceEmailAddresses,
    customerId,
    customerPONumber,
    title,
    customerSONumber,
    validityPeriod,
    totalValue,
    currency
  } = sowData;

  // Process the invoiceEmailAddresses to ensure it is saved as a string
  const processedInvoiceEmailAddresses = Array.isArray(invoiceEmailAddresses)
    ? invoiceEmailAddresses.join(",")
    : invoiceEmailAddresses;

  // Create the new SOW
  const newSow = await Sow.create({
    invoiceEmailAddresses: processedInvoiceEmailAddresses,
    customerId,
    customerPONumber,
    title,
    customerSONumber,
    validFrom: new Date(validityPeriod.validFrom), // Convert to Date object
    validUpto: new Date(validityPeriod.validUpto), // Convert to Date object
    totalValue,
    currency
  });

  return newSow;
};

export const getSows = async () => {
  return await Sow.findAll();
};
