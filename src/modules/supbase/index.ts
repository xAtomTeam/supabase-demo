import {
  SupabaseClientOptions,
  createClient,
} from "@supabase/supabase-js";
import { setUser } from "../auth";

const options: SupabaseClientOptions<string> = {
  db: {
    schema: "public",
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
};

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  options
);

export const initSupabase = (cb: () => void) => {
  supabase.auth
    .getSession()
    .then((data) => {
      if (!data.error && data.data && data.data.session) {
        setUser(
          data.data.session.user.user_metadata.fullName,
          data.data.session.user.email
        );
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(cb);
};

// supabase.auth
//   .getSession()
//   .then(console.log)
//   .catch(console.error);

// supabase.auth.onAuthStateChange((event, session) => {
//   console.log(event, session);

//   if (event === "INITIAL_SESSION") {
//     // handle initial session
//   } else if (event === "SIGNED_IN") {
//     // handle sign in event
//   } else if (event === "SIGNED_OUT") {
//     // handle sign out event
//   } else if (event === "PASSWORD_RECOVERY") {
//     // handle password recovery event
//   } else if (event === "TOKEN_REFRESHED") {
//     // handle token refreshed event
//   } else if (event === "USER_UPDATED") {
//     // handle user updated event
//   }
// });

export default supabase;
