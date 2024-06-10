module.exports = (sequelize : any, DataTypes : any) => {
    const SOWPaymentPlanLineItem = sequelize.define('SOWPaymentPlanLineItem', {
      id: { type: DataTypes.STRING, primaryKey: true },
      sowPaymentPlanId: DataTypes.STRING,
      sowId: DataTypes.STRING,
      orderId: DataTypes.STRING,
      particular: DataTypes.STRING,
      rate: DataTypes.FLOAT,
      unit: DataTypes.INTEGER,
      total: DataTypes.FLOAT
    }, {});
    SOWPaymentPlanLineItem.associate = function(models : any) {
      SOWPaymentPlanLineItem.belongsTo(models.SOWPaymentPlan, { foreignKey: 'sowPaymentPlanId' });
    };
    return SOWPaymentPlanLineItem;
  };
  