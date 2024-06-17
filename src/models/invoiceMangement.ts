import { Sequelize, DataTypes, Model } from 'sequelize'
import sequelize from '../postgresDB/pgConfig';


// interface PaymentMangementAttributes {
//     id: string,
//     PaymentDate: string,
//     ForExAmount: string,
//     IndianAmount: number,
//     InvoiceId: string,
//     isFullPayment: string,
//     BankPayment: string,
//     Details: string,
// }

class invoiceMangement extends Model {
    public id !: string
    public PaymentDate !: string
    public ForExAmount !: string
    public IndianAmount !: number
    public InvoiceId !: string
    public isFullPayment !: string
    public BankPayment !: string
    public Details !: string
}


invoiceMangement.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    PaymentDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ForExAmount: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    InvoiceId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    IndianAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isFullPayment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BankPayment: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Details: {
        type: DataTypes.STRING,
        allowNull: true,

    }
},
    {
        sequelize,
        tableName: 'InvoiceMangement',
        timestamps : false
    }
)


export {
    invoiceMangement
}