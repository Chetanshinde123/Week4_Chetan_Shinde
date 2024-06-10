"use strict";
// sowPaymentPlanScheduler.ts
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
const sowPaymentPlanService_1 = require("../services/sowPaymentPlanService");
const node_cron_1 = __importDefault(require("node-cron"));
// Schedule the data generation function to run daily at midnight (00:00)
node_cron_1.default.schedule('0 0 * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, sowPaymentPlanService_1.createSOWPaymentPlans)();
        console.log('SOW payment plans generated successfully');
    }
    catch (error) {
        console.error('Error generating SOW payment plans:', error);
    }
}));
