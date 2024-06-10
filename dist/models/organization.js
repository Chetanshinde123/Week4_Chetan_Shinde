"use strict";
// import { DataTypes, Model } from "sequelize";
// import sequelize from "../postgresDB/pgConfig";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// class Organization extends Model {
//   public id!: string;
//   public gstNo!: string;
//   public panNo!: string;
//   public legalOrganizationName!: string;
//   public invoiceID!: string;
//   public shortName!: string;
//   public contactName!: string;
//   public displayName!: string;
//   public email!: string;
//   public address!: string;
//   public phone!: number;
// }
// Organization.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//     gstNo: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     panNo: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     legalOrganizationName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     invoiceID: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     shortName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     contactName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     displayName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     address: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     phone: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     }
//   },
//   {
//     sequelize,
//     modelName: "Organization"
//   }
// );
// export default Organization;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
class Organization extends sequelize_1.Model {
}
Organization.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true
    },
    gstNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    panNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    legalOrganizationName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    contactName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: "Organization"
});
exports.default = Organization;
