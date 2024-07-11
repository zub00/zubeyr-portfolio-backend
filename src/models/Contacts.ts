// src/models/Profile.ts

import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

interface ProfileAttributes {
  id: number;
  fullName: string;
  email: string;
}

class Contact extends Model<ProfileAttributes> implements ProfileAttributes {
  public id!: number;
  public fullName!: string;
  public email!: string;

  // Optional timestamps handling
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Contact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Contact', // Model name
    tableName: 'contacts', // Table name in database
    timestamps: true, // Manage createdAt and updatedAt fields
  }
);

export default Contact;
