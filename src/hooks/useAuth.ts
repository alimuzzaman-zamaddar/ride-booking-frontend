// hooks/useAuth.ts
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export const useAuth = () => {
  const { token, role, email, is_onboarded } = useSelector(
    (state: RootState) => state.user
  );

  return {
    isLoggedIn: !!token,
    token,
    role,
    email,
    is_onboarded,
  };
};
