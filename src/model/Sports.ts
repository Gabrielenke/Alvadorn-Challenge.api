import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: Sports.SPORTS_TABLE_NAME,
})
export class Sports extends Model {
  public static SPORTS_TABLE_NAME = "sports" as string;
  public static SPORTS_ID = "id" as string;
  public static SPORTS_NAME = "activity_name" as string;
  public static SPORTS_DETAIL = "activity_detail" as string;
  public static SPORTS_TYPE = "activity_type" as string;
  public static SPORTS_DISTANCE = "distance" as string;
  public static SPORTS_EFFORT = "effort" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Sports.SPORTS_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Sports.SPORTS_NAME,
  })
  activity_name!: string;

  @Column({
    type: DataType.STRING(255),
    field: Sports.SPORTS_DETAIL,
  })
  activity_detail!: string;

  @Column({
    type: DataType.STRING(50),
    field: Sports.SPORTS_TYPE,
  })
  activity_type!: string;

  @Column({
    type: DataType.FLOAT,
    field: Sports.SPORTS_DISTANCE,
  })
  distance!: number;

  @Column({
    type: DataType.INTEGER,
    field: Sports.SPORTS_EFFORT,
  })
  effort!: number;
}
