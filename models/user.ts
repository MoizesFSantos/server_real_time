'use strict';
import { Model } from 'sequelize';

interface UserAttributes{
  id:string;
  name:string;
  email: string;
  password:string;
};

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes>  implements UserAttributes{
    id!: string;
    name!: string;
    email!: string;
    password!:string;

    static associate(models: any) {
      User.hasMany(models.Chat)
    }
  }
  User.init({
    id: { 
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    email:{ 
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
    },
    password:{ 
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};