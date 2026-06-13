import express from "express";

import {
  createUpdate,
  getAnimalUpdates,
  deleteUpdate,
} from "../controllers/updateController.js";

import protect from "../middleware/authMiddleware.js";
import adminOnly from "../middleware/adminMiddleware.js";

const router = express.Router();


// PUBLIC
router.get(
  "/:animalId",
  getAnimalUpdates
);


// ADMIN
router.post(
  "/",
  protect,
  adminOnly,
  createUpdate
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteUpdate
);

export default router;