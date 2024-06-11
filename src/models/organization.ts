import { DataTypes, Model } from "sequelize";
import sequelize from "../postgresDB/pgConfig";

class Organization extends Model {
  public id!: string;
  public gstNo!: string;
  public panNo!: string;
  public legalOrganizationName!: string;
  public shortName!: string;
  public contactName!: string;
  public displayName!: string;
  public email!: string;
  public address!: string;
  public phone!: number;
}

Organization.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    gstNo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    panNo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    legalOrganizationName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shortName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,

    tableName: "Organization"
  }
);

export default Organization;
