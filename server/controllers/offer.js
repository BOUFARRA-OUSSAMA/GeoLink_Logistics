import Offer from '../models/Offer.js';
import tryCatch from './utils/tryCatch.js';

export const createOffer = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newOffer = new Offer({ ...req.body, uid, uName, uPhoto });
  await newOffer.save();
  res.status(201).json({ success: true, result: newOffer });
});

export const getOffers = tryCatch(async (req, res) => {
  const offers = await Offer.find().sort({ _id: -1 });
  res.status(200).json({ success: true, result: offers });
});

export const deleteOffer = tryCatch(async (req, res) => {
  const { _id } = await Offer.findByIdAndDelete(req.params.offerId);
  res.status(200).json({ success: true, result: { _id } });
});

export const updateOffer = tryCatch(async (req, res) => {
  const updatedOffer = await Offer.findByIdAndUpdate(
    req.params.offerId,
    req.body,
    { new: true }
  );
  res.status(200).json({ success: true, result: updatedOffer });
});
