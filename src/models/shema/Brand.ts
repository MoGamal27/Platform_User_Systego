import { Schema, model, Document } from 'mongoose';

const BrandSchema = new Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"],
    maxlength: 100 
  },
  logo: { 
    type: String, 
    required: [true, "Logo is required"], 
    maxlength: 255 
  },
  category_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'Category',
    required: [true, "Category ID is required"]
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Brand = model('Brand', BrandSchema);