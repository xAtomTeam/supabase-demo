import { navigate } from "@xatom/core";
import supabase from "../supbase";

export const verify = () => {
  //since supabase handles verification for us we just have to listen login state
  supabase.auth
    .getSession()
    .then((data) => {
      if (data.data && !data.error) {
        navigate("/dashboard/task-list");
      } else {
        const { data } = supabase.auth.onAuthStateChange(
          (event, session) => {
            console.log(event, session);
            if (session) {
              navigate("/dashboard/task-list");
              data.subscription.unsubscribe();
            }
          }
        );
      }
    })
    .catch(console.log);
};
