import { useDispatch, useSelector } from "react-redux";
import { LoginStructure, RegisterStructure } from "../../models/users";
import { UsersRepo } from "../repo.features/users.repo";
// import { login, register } from "../reducers.features/users.slice";
import { AppDispatch, RootState } from "../../store/store";
import { loginToken } from "../reducers.features/users.slice";

export function useUsers(repo: UsersRepo) {
  const users = useSelector((state: RootState) => state.users);

  const dispatch = useDispatch<AppDispatch>();

  const userRegister = async (newUser: Partial<RegisterStructure>) => {
    try {
      await repo.create(newUser, "register");
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const userLogin = async (loginInfo: LoginStructure) => {
    try {
      const tokensResponse: any = await repo.login(loginInfo, "login");
      dispatch(loginToken(tokensResponse.results[0]));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  // const userLogin = async (info: Partial<LoginStructure>) => {
  //   try {
  //     const data = await repo.create(info, "login");
  //     console.log(data);

  //     dispatch(register(data.results[0]));
  //   } catch (error) {
  //     console.error((error as Error).message);
  //   }
  // };

  return {
    users,
    userRegister,
    userLogin,
  };
}
