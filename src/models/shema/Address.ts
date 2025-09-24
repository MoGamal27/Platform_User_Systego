import { Schema, model, Document } from 'mongoose';


const addressSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  city: {
     type: String,
    required: true
  },
  zone: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  buildingNumber: {
    type: String,
    required: true
  },
  floorNumber: {
    type: String
  },
  apartmentNumber: {
    type: String
  },
  uniqueIdentifier: {
    type: String
  }
}, {
  timestamps: true
});


export const Address = model('Address', addressSchema);