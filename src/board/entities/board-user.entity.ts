import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';
import { Board } from './board.entity';

@Table
export class BoardUser extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Board)
  @Column
  boardId: number;
}
