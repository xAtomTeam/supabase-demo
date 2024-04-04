import {
  WFAuth,
  WFAuthMiddleware,
  navigate,
} from "@xatom/core";
import supabase from "../supbase";

// Initialize the WFAuth instance with user data, roles, and configuration
export const userAuth = new WFAuth<
  {
    fullName: string;
    email: string;
  },
  "GUEST" | "USER",
  {}
>();

//setting default role
userAuth.setRole("GUEST");

export const setUser = (
  fullName: string,
  email: string
) => {
  userAuth.setUser({
    email,
    fullName,
  });
  userAuth.setRole("USER");
};

export const logout = () => {
  supabase.auth.signOut().then(() => {
    userAuth.logout();
    navigate("/");
  });
};

export const userMiddleware = new WFAuthMiddleware(
  userAuth
);
