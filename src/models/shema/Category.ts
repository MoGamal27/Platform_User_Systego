import { Schema, model, Document } from 'mongoose';


const CategorySchema = new Schema({
  name: { 
    type: String, 
    required: [true, "Name is required"],
    maxlength: 100 
},
  icon: { 
    type: String, 
    required: [true, "Icon is required"], 
    maxlength: 255 
},
  parent_category_id: { 
    type: Number 
}, 
  number_of_products: { type: Number, required: true, default: 0 },
  stock_quantity: { type: Number, required: true, default: 0 },
  value: { type: Number, required: true, default: 0.00 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});


export const Category = model('Category', CategorySchema);