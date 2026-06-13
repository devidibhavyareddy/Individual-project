import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  addFavorite,
  getFavorites,
  removeFavorite,
} from "../controllers/favoriteController.js";

const router = express.Router();

router.post(
  "/:animalId",
  protect,
  addFavorite
);

router.get(
  "/",
  protect,
  getFavorites
);

router.delete(
  "/:animalId",
  protect,
  removeFavorite
);

export default router;