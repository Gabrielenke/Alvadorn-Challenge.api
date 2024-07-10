import { Sports } from "../model/Sports";
import { SportsRepo } from "../repository/SportsRepo";

class SportsService {
  private sportsRepo: SportsRepo;

  constructor() {
    this.sportsRepo = new SportsRepo();
  }

  async createSport(data: Sports) {
    const new_sport = new Sports();
    new_sport.activity_name = data.activity_name;
    new_sport.activity_detail = data.activity_detail;
    new_sport.activity_type = data.activity_type;
    new_sport.distance = data.distance;
    new_sport.effort = data.effort;

    await this.sportsRepo.save(new_sport);
    return {
      status: "Created!",
      message: "Successfully created sport activity!",
    };
  }

  async updateSport(id: number, data: Sports) {
    const sport = new Sports();
    sport.id = id;
    sport.activity_name = data.activity_name;
    sport.activity_detail = data.activity_detail;
    sport.activity_type = data.activity_type;
    sport.distance = data.distance;
    sport.effort = data.effort;

    await this.sportsRepo.update(sport);
    return { status: "Ok!", message: "Successfully updated sport activity!" };
  }

  async deleteSport(id: number) {
    await this.sportsRepo.delete(id);
    return { status: "Ok!", message: "Successfully deleted sport activity!" };
  }

  async findSportById(id: number) {
    const sport = await this.sportsRepo.findById(id);
    return {
      status: "Ok!",
      message: "Successfully fetched sport activity by id!",
      data: sport,
    };
  }

  async findAllSports() {
    const sports = await this.sportsRepo.findAll();
    return {
      status: "Ok!",
      message: "Successfully fetched all sport activities!",
      data: sports,
    };
  }
}

export default new SportsService();
