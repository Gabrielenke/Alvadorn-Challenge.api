import ISportsRepo from "../Interfaces/SportsInterface";
import { Sports } from "../model/Sports";

export class SportsRepo implements ISportsRepo {
  async save(sport: Sports): Promise<void> {
    try {
      await Sports.create({
        activity_name: sport.activity_name,
        activity_detail: sport.activity_detail,
        activity_type: sport.activity_type,
        distance: sport.distance,
        effort: sport.effort,
      });
    } catch (error) {
      throw new Error("Failed to create sport activity!");
    }
  }

  async update(sport: Sports): Promise<void> {
    try {
      const existingSport = await Sports.findOne({
        where: {
          id: sport.id,
        },
      });
      if (!existingSport) {
        throw new Error("Sport activity not found!");
      }
      existingSport.activity_name = sport.activity_name;
      existingSport.activity_detail = sport.activity_detail;
      existingSport.activity_type = sport.activity_type;
      existingSport.distance = sport.distance;
      existingSport.effort = sport.effort;

      await existingSport.save();
    } catch (error) {
      throw new Error("Failed to update sport activity!");
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const sport = await Sports.findOne({
        where: {
          id: id,
        },
      });
      if (!sport) {
        throw new Error("Sport activity not found!");
      }
      await sport.destroy();
    } catch (error) {
      throw new Error("Failed to delete sport activity!");
    }
  }

  async findAll(): Promise<Sports[]> {
    try {
      return await Sports.findAll();
    } catch (error) {
      throw new Error("Failed to retrieve sport activities!");
    }
  }

  async findById(id: number): Promise<Sports | null> {
    try {
      return await Sports.findOne({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error("Failed to retrieve sport activity!");
    }
  }
}
