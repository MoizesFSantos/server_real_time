import { ForeignKey } from './../node_modules/sequelize/types/model.d';
import { HasMany } from './../node_modules/sequelize/types/associations/has-many.d';
'use strict';
import { Model } from 'sequelize';

interface ChatAttributes{
  id:number;
  sender:string;
  receiver: string;
  message:string;
  send_at:Date;
};


module.exports = (sequelize:any, DataTypes:any) => {
  class Chat extends Model {
    id!: number;
    sender!: string;
    receiver!: string;
    message!:string;
    send_at!:Date;
  
    static associate(models:any) {
      Chat.belongsTo(models.User);
    }
  }
  Chat.init({
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    sender: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    receiver:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    message:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    sendet_at:{
      type: DataTypes.DATE,
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};