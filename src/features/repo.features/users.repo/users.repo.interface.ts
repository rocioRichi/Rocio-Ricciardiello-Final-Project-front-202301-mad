import { LoginStructure } from "../../../models/users";

export interface RepoUser<T> {
  create(userInfo: Partial<LoginStructure>, urlPath: string): Promise<T>;
  update(
    userInfo: Partial<LoginStructure>,
    urlPath: string,
    token: string
  ): Promise<T>;
}
