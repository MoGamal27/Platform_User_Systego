import mongoose, { Types } from 'mongoose';
import { UserModel } from './platformUser';
const EmailVerificationSchema = new mongoose.Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true }, // مهم جداً
    verificationCode: { type: String, required: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);  

export const EmailVerificationModel = mongoose.model('EmailVerification', EmailVerificationSchema)