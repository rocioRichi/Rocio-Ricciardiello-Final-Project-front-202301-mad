import { LivingSpaceStructure } from "../../../models/livingspace";

export interface RepoLivingSpace<LS> {
  create(userInfo: Partial<LivingSpaceStructure>, urlPath: string): Promise<LS>;
  update(
    userInfo: Partial<LivingSpaceStructure>,
    urlPath: string,
    token: string
  ): Promise<LS>;
}
