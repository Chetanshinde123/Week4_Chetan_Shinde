// module.exports = (sequelize : any, DataTypes : any) => {
//     const SOW = sequelize.define('SOW', {
//       id: { type: DataTypes.STRING, primaryKey: true },
//       invoiceEmailAddresses: DataTypes.ARRAY(DataTypes.STRING),
//       customerId: DataTypes.STRING,
//       customerPONumber: DataTypes.STRING,
//       title: DataTypes.STRING,
//       customerSONumber: DataTypes.STRING,
//       validityPeriod: DataTypes.JSON,
//       totalValue: DataTypes.FLOAT,
//       currency: DataTypes.STRING
//     }, {});
//     SOW.associate = function(models : any) {
//       SOW.belongsTo(models.Customer, { foreignKey: 'customerId' });
//     };
//     return SOW;
//   };

// models/sow.ts
import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";

class Sow extends Model {
  public id!: string;
  public invoiceEmailAddresses!: string;
  public customerId!: string;
  public customerPONumber!: string;
  public title!: string;
  public customerSONumber!: string;
  public validFrom!: Date;
  public validUpto!: Date;
  public totalValue!: number;
  public currency!: string;
}

Sow.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    invoiceEmailAddresses: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Customer",
        key: "id"
      }
    },
    customerPONumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerSONumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    validFrom: {
      type: DataTypes.DATE,
      allowNull: false
    },
    validUpto: {
      type: DataTypes.DATE,
      allowNull: false
    },
    totalValue: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "Sow"
  }
);

export default Sow;

// import { DataTypes, Model } from "sequelize";
// import sequelize from "../postgresDB/pgConfig";

// class Sow extends Model {
//   public id!: string;
//   public invoiceEmailAddresses!: string;
//   public customerId!: string;
//   public customerPONumber!: string;
//   public title!: string;
//   public customerSONumber!: number;
//   public validityPeriod!: Date;
//   public totalValue!: number;
//   public currency!: string;
// }

// Sow.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//     invoiceEmailAddresses: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     customerId: {
//       type: DataTypes.UUID,
//       allowNull: false,
//       references: {
//         model: "Customer", // Make sure the table name matches
//         key: "id",
//       },
//     },
//     customerPONumber: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     customerSONumber: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     validityPeriod: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     totalValue: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     currency: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,

//     tableName: "Sow", // Ensure table name is consistent

//   }
// );

// export default Sow;
