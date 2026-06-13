import Animal from "../models/Animal.js";
import AdoptionRequest from "../models/AdoptionRequest.js";

export const getDashboardStats =
  async (req, res) => {
    try {
      const totalAnimals =
        await Animal.countDocuments();

      const adoptedAnimals =
        await Animal.countDocuments({
          status: "Adopted",
        });

      const readyAnimals =
        await Animal.countDocuments(
          {
            status:
              "Ready For Adoption",
          }
        );

      const pendingRequests =
        await AdoptionRequest.countDocuments(
          {
            status: "Pending",
          }
        );

      res.status(200).json({
        totalAnimals,
        adoptedAnimals,
        readyAnimals,
        pendingRequests,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };