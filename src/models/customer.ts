import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";


class Customer extends Model {
  public id!: string;
  public organizationId!: string;
  public msaValidFrom!: Date;
  public msaValidUpto!: Date;
  public legalName!: string;
  public ndaSignedOn!: Date;
  public shortname!: string;
  public ndaValidFrom!: Date;
  public ndaValidUpto!: Date;
  public addressId!: string;
  public displayName!: string;
  public isNdaSigned!: boolean;
  public isMsaSigned!: boolean;
  public msaSignedOn!: Date;
}

Customer.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    organizationId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Organization",
        key: "id"
      }
    },
    msaValidFrom: {
      type: DataTypes.DATE,
      allowNull: false
    },
    msaValidUpto: {
      type: DataTypes.DATE,
      allowNull: false
    },
    legalName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ndaSignedOn: {
      type: DataTypes.DATE,
      allowNull: false
    },
    shortname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ndaValidFrom: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ndaValidUpto: {
      type: DataTypes.DATE,
      allowNull: false
    },
    addressId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isNdaSigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isMsaSigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    msaSignedOn: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps : false,
    tableName : "Customer"
  }
);


export default Customer;
