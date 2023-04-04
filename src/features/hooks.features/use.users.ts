import { useDispatch, useSelector } from "react-redux";
import {
  LoginStructure,
  RegisterStructure,
  TokenResponse,
} from "../../models/users";
import { UsersRepo } from "../repo.features/users.repo/users.repo";
// import { login, register } from "../reducers.features/users.slice";
import { AppDispatch, RootState } from "../../store/store";
import { loginToken, loginUser } from "../reducers.features/users.slice";

export function useUsers(repo: UsersRepo) {
  const users = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch<AppDispatch>();

  const userRegister = async (newUser: Partial<RegisterStructure>) => {
    try {
      await repo.create(newUser, "users/register");
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const userLogin = async (loginInfo: LoginStructure) => {
    try {
      const tokensResponse: any = await repo.login(loginInfo, "users/login");
      dispatch(loginToken(tokensResponse.results[0]));
      dispatch(loginUser(tokensResponse.results[1]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    users,
    userRegister,
    userLogin,
  };
}
