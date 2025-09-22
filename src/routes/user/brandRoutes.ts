import { Router } from 'express';
import { getAllBrands, getBrandById} from '../../controller/users/brandController'

const route = Router();

route.get("/", getAllBrands);

route.get("/:id", getBrandById);


export default route;