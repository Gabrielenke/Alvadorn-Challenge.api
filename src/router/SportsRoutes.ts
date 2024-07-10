import BaseRoutes from "./base/BaseRouter";
import SportsController from "../controller/SportsController";
import validate from "../helper/validade";
import { createSportSchema, updateSportSchema } from "../schema/SportSchema";

class SportsRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("", validate(createSportSchema), SportsController.create);
    this.router.patch(
      "/:id",
      validate(updateSportSchema),
      SportsController.update
    );
    this.router.delete("/:id", SportsController.delete);
    this.router.get("", SportsController.findAll);
    this.router.get("/:id", SportsController.findById);
  }
}

export default new SportsRoutes().router;
