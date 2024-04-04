import { WFRoute, navigate } from "@xatom/core";
import { userMiddleware } from "../modules/auth";

export const app = () => {
  //will trigger route matches /auth/*
  new WFRoute("/auth/(.*)")
    .withMiddleware(userMiddleware, "GUEST", "allow", {
      onError() {
        navigate("/dashboard/task-list");
      },
    })
    .execute(() => {
      //will trigger route matches /auth/sign-up
      new WFRoute("/auth/sign-up").execute(() => {
        //lazy loading route
        import("../modules/auth/signUp")
          .then(({ signUp }) => signUp())
          .catch(console.error);
      });
      //will trigger route matches /auth/sign-in
      new WFRoute("/auth/sign-in").execute(() => {
        //lazy loading route
        import("../modules/auth/signIn")
          .then(({ signIn }) => signIn())
          .catch(console.error);
      });
      //will trigger route matches /auth/verify
      new WFRoute("/auth/verify").execute(() => {
        //lazy loading route
        import("../modules/auth/verify")
          .then(({ verify }) => verify())
          .catch(console.error);
      });
    });
  //will trigger route matches /dashboard/*
  new WFRoute("/dashboard/(.*)")
    .withMiddleware(userMiddleware, "USER", "allow", {
      onError() {
        navigate("/auth/sign-in");
      },
    })
    .execute(() => {
      //will trigger route matches /dashboard/task-list
      new WFRoute("/dashboard/task-list").execute(() => {
        //lazy loading route
        import("../modules/dashboard/taskList")
          .then(({ taskList }) => taskList())
          .catch(console.error);
      });
    });
};
