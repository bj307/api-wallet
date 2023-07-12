import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  cpf: String,
  email: String,
  password: String,
  saldo: Number,
});

export default model('User', UserSchema);
