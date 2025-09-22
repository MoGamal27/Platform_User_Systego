import { Category } from '../../models/shema/Category';
import asyncHandler from 'express-async-handler';
import { NotFound } from '../../Errors/NotFound'
import { SuccessResponse} from '../../utils/response';


export const getAllCategorys = asyncHandler(async (req, res) => {
  const categories = await Category.find()
    .sort({ created_at: -1 });

  return SuccessResponse(res, { message: 'Categorys retrieved successfully', data: categories }, 200);
});

export const getCategoryById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const category = await Category.findOne({ _id: id})

  if (!category) {
    throw new NotFound('Category not found');
  }

  return SuccessResponse(res, { message: 'Category retrieved successfully', data: category }, 200);
});