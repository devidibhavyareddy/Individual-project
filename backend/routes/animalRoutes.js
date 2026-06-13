import express from "express";

import {
  getAnimals,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} from "../controllers/animalController.js";

import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/adminMiddleware.js";

const router = express.Router();


// PUBLIC
router.get("/", getAnimals);

router.get("/:id", getAnimalById);


// ADMIN ONLY
router.post(
  "/",
  protect,
  adminOnly,
  createAnimal
);

router.put(
  "/:id",
  protect,
  adminOnly,
  updateAnimal
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteAnimal
);

export default router;