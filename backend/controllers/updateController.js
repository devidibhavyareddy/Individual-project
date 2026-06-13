import Update from "../models/Update.js";
import Animal from "../models/Animal.js";


// ADMIN CREATE UPDATE ENTRY
export const createUpdate = async (
  req,
  res
) => {
  try {
    const {
      animalId,
      updateText,
    } = req.body;

    const animal = await Animal.findById(
      animalId
    );

    if (!animal) {
      return res.status(404).json({
        message: "Animal not found",
      });
    }

    const update =
      await Update.create({
        animal: animalId,
        updateText,
      });

    res.status(201).json(update);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET TIMELINE FOR ANIMAL
export const getAnimalUpdates =
  async (req, res) => {
    try {
      const updates =
        await Update.find({
          animal: req.params.animalId,
        }).sort({
          createdAt: 1,
        });

      res.status(200).json(
        updates
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };


// DELETE UPDATE
export const deleteUpdate =
  async (req, res) => {
    try {
      const update =
        await Update.findByIdAndDelete(
          req.params.id
        );

      if (!update) {
        return res.status(404).json({
          message:
            "Update not found",
        });
      }

      res.status(200).json({
        message:
          "Update deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };