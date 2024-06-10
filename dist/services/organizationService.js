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
exports.getOrganizations = exports.createOrganization = void 0;
const organization_1 = __importDefault(require("../models/organization"));
// Other CRUD operations...
const createOrganization = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrganization = yield organization_1.default.create(data);
        console.log("Data added");
        return newOrganization;
    }
    catch (error) {
        console.log("Data not added");
        throw new Error(error.message);
    }
});
exports.createOrganization = createOrganization;
const getOrganizations = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizations = yield organization_1.default.findAll();
        return organizations;
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.getOrganizations = getOrganizations;
// Add other service methods as needed
