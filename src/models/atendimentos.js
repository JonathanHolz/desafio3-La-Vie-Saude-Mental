const db = require("../database/connection");
const { DataTypes } = require("sequelize");
const Psicologos = require("./psicologos");
const Pacientes = require("./pacientes");

const Atendimentos = db.define(
  "atendimentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_atendimento: {
      type: DataTypes.DATE,
    },
    observacao: {
      type: DataTypes.STRING,
    },
    psicologos_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: 'id'
      }
    },
    pacientes_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: 'id'
      }
    }
  },
{
  tableName: "atendimentos",
    timestamps: false
}
);

module.exports = Atendimentos;
