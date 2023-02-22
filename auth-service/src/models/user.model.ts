import { Document, Model, model, Schema } from 'mongoose';

export interface User {
  [x: string]: string;
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface UserModel extends Model<UserDoc> {}

export interface UserDoc extends User, Document {}

const userSchema = new Schema<UserDoc>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
  },
  { timestamps: true }
);

export const UserModel = model<UserDoc, UserModel>('User', userSchema);
