import { Schema, model } from 'mongoose';

const AdmSchema = new Schema({
  name: String,
  email: String,
  password: String,
  chavePix: String,
});

export default model('Adm', AdmSchema);
