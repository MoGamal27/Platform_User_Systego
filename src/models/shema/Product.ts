import { Schema, model, Document } from 'mongoose';

const ProductSchema = new Schema({
  icon: { 
    type: String, 
    maxlength: 255 
  },
  code: { 
    type: String, 
    required: [true, "Code is required"],
    maxlength: 100 
  },
  name: { 
    type: String, 
    required: [true, "Name is required"],
    maxlength: 200 
  },
  brand_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'Brand',
    required: [true, "Brand ID is required"] 
  },
  category_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'Category',
    required: [true, "Category ID is required"] 
  },
  quantity: { 
    type: Number, 
    required: true, 
    default: 0.00 
  },
  unit: { 
    type: String, 
    enum: ['piece', 'kilogram', 'liter', 'meter'],
    required: [true, "Unit is required"] 
  },
  price: { 
    type: Number, 
    required: true, 
    default: 0.00 
  },
  cost: { 
    type: Number, 
    required: true, 
    default: 0.00 
  },
  stock_worth: { 
    type: Number, 
    required: true, 
    default: 0.00 
  },
  exp_date: { 
    type: Date 
  },
  notify_near_expiry: { 
    type: Boolean, 
    default: false 
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

export const Product = model('Product', ProductSchema);