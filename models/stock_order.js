'use strict';
module.exports = (sequelize, DataTypes) => {
  const stock_order = sequelize.define('stock_order', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.STRING(50),
      field: "id"
    },
    Branch: {
      allowNull: false,
      type: DataTypes.STRING(50),
      field: "branch"
    },
    Product: {
      allowNull: false,
      type: DataTypes.STRING(50),
      field: "product"
    },
    Quantity: {
      allowNull: true,
      type: DataTypes.INTEGER,
      field: "quantity"
    },
    RecordedAt: {
      type: DataTypes.DATE,
      field: "recorded_at",
      default: new Date()
    },
    OrderDate: {
      allowNull: false,
      type: DataTypes.DATE,
      field: "order_date",
      default: new Date()
    },
    ApprovalDate: {
      allowNull: false,
      type: DataTypes.DATE,
      field: "approval_date"
    },
    ApprovalStatus: {
      allowNull: false,
      type: DataTypes.STRING(2),
      field: "approval_status"
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'OrderDate',
    updatedAt: 'OrderDate'
  });
  stock_order.associate = function () {
    // associations can be defined here
  };
  return stock_order;
};