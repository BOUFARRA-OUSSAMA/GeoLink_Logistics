import { Router } from 'express';

import {
  createOffer,
  deleteOffer,
  getOffers,
  updateOffer,
} from '../controllers/offer.js';
import auth from '../middleware/auth.js';
import checkAccess from '../middleware/checkAccess.js';
import offerPermissions from '../middleware/permissions/offer/offerPermissions.js';

const offerRouter = Router();
offerRouter.post('/', auth, createOffer);
offerRouter.get('/', getOffers);
offerRouter.delete(
  '/:offerId',
  auth,
  checkAccess(offerPermissions.delete),
  deleteOffer
);
offerRouter.patch(
  '/:offerId',
  auth,
  checkAccess(offerPermissions.update),
  updateOffer
);
export default offerRouter;
