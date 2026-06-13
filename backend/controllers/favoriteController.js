import User from "../models/User.js";
import Animal from "../models/Animal.js";

export const addFavorite = async (
  req,
  res
) => {
  try {
    const animal =
      await Animal.findById(
        req.params.animalId
      );

    if (!animal) {
      return res.status(404).json({
        message: "Animal not found",
      });
    }

    const user =
      await User.findById(
        req.user.id
      );

    if (
      !user.favorites.includes(
        animal._id
      )
    ) {
      user.favorites.push(
        animal._id
      );

      await user.save();
    }

    res.status(200).json({
      message:
        "Added to favorites",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getFavorites =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.user.id
        ).populate(
          "favorites"
        );

      res.status(200).json(
        user.favorites
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const removeFavorite =
  async (req, res) => {
    try {
      const user =
        await User.findById(
          req.user.id
        );

      user.favorites =
        user.favorites.filter(
          (id) =>
            id.toString() !==
            req.params.animalId
        );

      await user.save();

      res.status(200).json({
        message:
          "Removed from favorites",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };