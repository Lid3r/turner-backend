import { AllowNull, BelongsToMany, HasMany, Model } from 'sequelize-typescript';
import { AutoIncrement, Column, PrimaryKey, Table } from 'sequelize-typescript';
import { BoardUser } from 'src/board/entities/board-user.entity';
import { Board } from 'src/board/entities/board.entity';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  BOARD_OWNER = 'board_owner',
}

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id: number;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  surname: string;

  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @Column
  role: UserRole;

  @AllowNull(false)
  @Column
  isPremium: boolean;

  @HasMany(() => Board, { foreignKey: 'ownerId' })
  boards: Board[];

  @BelongsToMany(() => Board, () => BoardUser)
  usersBoards: Array<Board & { BoardUser: BoardUser }>;
}
