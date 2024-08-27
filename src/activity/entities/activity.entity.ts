import {
  AutoIncrement,
  Model,
  Column,
  AllowNull,
  Table,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Board } from 'src/board/entities/board.entity';

@Table
export class Activity extends Model {
  @AllowNull(false)
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @ForeignKey(() => Board)
  @Column
  boardId: number;

  @BelongsTo(() => Board)
  board: Board;
}
