import mongoose, { model } from 'mongoose';

// create Schema- create model - всі властивості, які можуть бути у користувача

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    avatarUrl: String,
  },
  { timestamps: true },
);

export default mongoose.model('User', UserSchema)