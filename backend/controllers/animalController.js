import Animal from "../models/Animal.js";


// GET ALL ANIMALS
export const getAnimals = async (req, res) => {
  try {
    const { type, status, search } = req.query;

    let query = {};

    if (type) {
      query.type = type;
    }

    if (status) {
      query.status = status;
    }

    if (search) {
      query.name = {
        $regex: search,
        $options: "i",
      };
    }

    const animals = await Animal.find(query);

    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET SINGLE ANIMAL
export const getAnimalById = async (req, res) => {
  try {
    const animal = await Animal.findById(
      req.params.id
    );

    if (!animal) {
      return res.status(404).json({
        message: "Animal not found",
      });
    }

    res.status(200).json(animal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// CREATE ANIMAL
export const createAnimal = async (
  req,
  res
) => {
  try {
    const animal = await Animal.create(
      req.body
    );

    res.status(201).json(animal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE ANIMAL
export const updateAnimal = async (
  req,
  res
) => {
  try {
    const animal =
      await Animal.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    if (!animal) {
      return res.status(404).json({
        message: "Animal not found",
      });
    }

    res.status(200).json(animal);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE ANIMAL
export const deleteAnimal = async (
  req,
  res
) => {
  try {
    const animal =
      await Animal.findByIdAndDelete(
        req.params.id
      );

    if (!animal) {
      return res.status(404).json({
        message: "Animal not found",
      });
    }

    res.status(200).json({
      message: "Animal deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};