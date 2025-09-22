import { Brand } from '../../models/shema/Brand';
import asyncHandler from 'express-async-handler';
import { NotFound } from '../../Errors/NotFound'
import { SuccessResponse} from '../../utils/response';


export const getAllBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find()
    .sort({ created_at: -1 });

  return SuccessResponse(res, { message: 'Brands retrieved successfully', data: brands }, 200);
});

export const getBrandById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const brand = await Brand.findOne({ _id: id})

  if (!brand) {
    throw new NotFound('Brand not found');
  }

  return SuccessResponse(res, { message: 'Brand retrieved successfully', data: brand }, 200);
});