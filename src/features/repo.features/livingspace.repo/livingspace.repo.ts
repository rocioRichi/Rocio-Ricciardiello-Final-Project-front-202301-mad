import debug from "debug";
import { currentUrl } from "../../../config.renderorlocal";
import { LivingSpaceStructure } from "../../../models/livingspace";
import { ServerResponse } from "../../../models/users";
import { RepoLivingSpace } from "./livingspace.repo.interface";

export class LivingSpaceRepo implements RepoLivingSpace<ServerResponse> {
  url: string;
  constructor() {
    this.url = currentUrl;
  }
  async create(
    newLivingSpace: Partial<LivingSpaceStructure>,
    urlExtraPath: string
  ): Promise<ServerResponse> {
    const url = this.url + "/livingspace" + urlExtraPath;
    console.log(url);
    console.log(newLivingSpace);

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newLivingSpace),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    console.log(data);

    return data;
  }

  async update(
    userInfo: Partial<LivingSpaceStructure>,
    urlExtraPath: string,
    token: string
  ): Promise<ServerResponse> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(userInfo),
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();

    return data;
  }

  async getAll(urlExtraPath: string): Promise<ServerResponse> {
    const url = this.url + "/" + urlExtraPath;

    const resp = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    console.log(data);

    return data;
  }

  async getById(
    loginInfo: LivingSpaceStructure,
    urlExtraPath: string,
    token: string,
    id: string
  ): Promise<LivingSpaceStructure[]> {
    const url = this.url + "/" + urlExtraPath + "/" + id;
    console.log(url);
    console.log(id);

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!resp.ok)
      throw new Error(`Error http: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    console.log("token devuelto por el repo");
    console.log(data);

    return data;
  }
}
