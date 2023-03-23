import { currentUrl } from "../../../config.renderorlocal";
import {
  LoginStructure,
  RegisterStructure,
  ServerResponse,
  TokenResponse,
} from "../../../models/users";
import { RepoUser } from "./users.repo.interface";
export class UsersRepo implements RepoUser<ServerResponse> {
  url: string;
  constructor() {
    this.url = currentUrl;
  }
  async create(
    newUser: Partial<RegisterStructure>,
    urlExtraPath: string
  ): Promise<ServerResponse> {
    const url = this.url + "/" + urlExtraPath;
    console.log(url);
    console.log(newUser);

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newUser),
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
    userInfo: Partial<LoginStructure>,
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

  async login(
    loginInfo: LoginStructure,
    urlExtraPath: string
  ): Promise<TokenResponse> {
    const url = this.url + "/" + urlExtraPath;
    console.log(url);
    console.log(loginInfo);

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

  async getById(
    loginInfo: RegisterStructure,
    urlExtraPath: string,
    token: string,
    id: string
  ): Promise<RegisterStructure[]> {
    const url = this.url + "/" + urlExtraPath + "/" + id;
    console.log(url);
    console.log(token);
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
