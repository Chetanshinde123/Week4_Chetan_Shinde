"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSows = exports.createSow = void 0;
const sow_1 = __importDefault(require("../models/sow"));
const createSow = (sowData) => __awaiter(void 0, void 0, void 0, function* () {
    const { invoiceEmailAddresses, customerId, customerPONumber, title, customerSONumber, validityPeriod, totalValue, currency } = sowData;
    // Process the invoiceEmailAddresses to ensure it is saved as a string
    const processedInvoiceEmailAddresses = Array.isArray(invoiceEmailAddresses)
        ? invoiceEmailAddresses.join(',')
        : invoiceEmailAddresses;
    // Create the new SOW
    const newSow = yield sow_1.default.create({
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
});
exports.createSow = createSow;
const getSows = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield sow_1.default.findAll();
});
exports.getSows = getSows;
