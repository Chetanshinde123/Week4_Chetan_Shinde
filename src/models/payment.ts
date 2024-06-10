import { DataTypes, Model } from 'sequelize';
import sequelize from "../postgresDB/pgConfig";

class Payment extends Model {
  public id!: string;
  public invoiceId!: string;
  public paymentDate!: Date;
  public paymentAmount!: number;
  // Other fields...
}

Payment.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  invoiceId: {
    type: DataTypes.STRING,
    allowNull: false,
    
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paymentAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // Other fields...
}, {
  sequelize,
  modelName: 'Payment',
});

export default Payment;
