import Offer from '../../../models/Offer.js';

const checkOwner = async (req) => {
  try {
    const offer = await Offer.findOne({
      _id: req.params.offerId,
      uid: req.user.id,
    });
    if (offer) return true;
    return false;
  } catch (error) {
    console.log(error);
    return 'error';
  }
};

export default checkOwner;
