import { Model, Document } from 'mongoose';
import { Profile } from 'passport-google-oauth20';

/**
 * Represents a user
 */
export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  isWorkVerified: boolean;
  isRecruiterVerified: boolean;
  skills: String[];
}

export interface ICleanUser extends IUser {
  id: string;
}

export interface IUserDocument extends IUser, Document {
  matchPassword: (password: string) => Promise<Boolean>;
  cleanUser: () => Promise<ICleanUser>;
}

export interface IUserModel extends Model<IUserDocument> {
  authUser: (password: string, email: string) => Promise<IUserDocument>;
  createWithGoogle: (profile: Profile) => Promise<IUserDocument>;
}
