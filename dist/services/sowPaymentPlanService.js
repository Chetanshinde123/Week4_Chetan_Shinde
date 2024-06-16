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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSOWPaymentPlans = exports.createSOWPaymentPlans = void 0;
const models_1 = require("../models");
const createSOWPaymentPlans = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrganization = yield models_1.SOWPaymentPlan.create(data);
        console.log("Data added");
        return newOrganization;
    }
    catch (error) {
        console.log("Data not added");
        throw new Error(error.message);
    }
});
exports.createSOWPaymentPlans = createSOWPaymentPlans;
const getSOWPaymentPlans = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.SOWPaymentPlan.findAll();
});
exports.getSOWPaymentPlans = getSOWPaymentPlans;
