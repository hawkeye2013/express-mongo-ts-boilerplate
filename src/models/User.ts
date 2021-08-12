import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
  },
  { collection: 'users' },
);

const userModel = model('User', userSchema);

export default userModel;
