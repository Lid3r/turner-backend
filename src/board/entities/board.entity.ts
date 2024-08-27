import {
  Model,
  AutoIncrement,
  Column,
  PrimaryKey,
  Table,
  BelongsTo,
  AllowNull,
  ForeignKey,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';
import { BoardUser } from './board-user.entity';
import { Activity } from 'src/activity/entities/activity.entity';

@Table
export class Board extends Model {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @BelongsTo(() => User)
  owner: User;

  @ForeignKey(() => User)
  @Column
  ownerId: number;

  @BelongsToMany(() => User, () => BoardUser)
  members: Array<User & { BoardUser: BoardUser }>;

  @HasMany(() => Activity)
  activities: Activity[];
}
