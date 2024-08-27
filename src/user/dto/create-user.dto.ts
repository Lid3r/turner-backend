import { UserRole } from '../entities/user.entity';

export interface CreateUserDto {
  name: string;
  surname: string;
  email: string;
  password: string;
  isPremium: boolean;
  role?: UserRole;
}
