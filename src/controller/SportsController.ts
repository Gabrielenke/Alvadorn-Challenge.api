import { Request, Response } from "express";
import SportsService from "../service/SportsService";

class SportsController {
  async create(req: Request, res: Response) {
    try {
      const result = await SportsService.createSport(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      const result = await SportsService.updateSport(id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      const result = await SportsService.deleteSport(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      const result = await SportsService.findSportById(id);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const result = await SportsService.findAllSports();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new SportsController();
