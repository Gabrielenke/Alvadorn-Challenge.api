interface ISportsRepo {
  save(sport: Sports): Promise<void>;
  update(sport: Sports): Promise<void>;
  delete(id: number): Promise<void>;
  findAll(): Promise<Sports[]>;
  findById(id: number): Promise<Sports | null>;
}

export default ISportsRepo;
