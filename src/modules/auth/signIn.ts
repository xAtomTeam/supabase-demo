import { WFFormComponent, navigate } from "@xatom/core";
import supabase from "../supbase";
import { SUPABASE_REDIRECT_URL } from "../../config";

export const signIn = () => {
  //form
  const form = new WFFormComponent<{
    email: string;
    password: string;
  }>(`[xa-type=main-form]`);

  //google login button
  const googleBtn = form.getChildAsComponent(
    `[xa-type="google-btn"]`
  );

  //on click trigger supabase oAuth provider
  googleBtn.on("click", () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: SUPABASE_REDIRECT_URL,
      },
    });
  });

  form.onFormSubmit((data) => {
    form.showForm();

    form.disableForm();
    form.updateSubmitButtonText("Please wait...");

    supabase.auth
      .signInWithPassword({
        email: data.email,
        password: data.password,
      })
      .then((data) => {
        if (data.error) {
          form.updateTextViaAttrVar({
            error:
              data.error.message ||
              "Unable to login please try again",
          });
          form.showErrorState();
          form.updateSubmitButtonText("Login");
          return;
        }

        form.updateSubmitButtonText("Redirecting...");
        navigate("/dashboard/task-list");
      })
      .catch((err) => {
        form.updateTextViaAttrVar({
          error:
            err.message ||
            "Unable to login please try again",
        });
        form.showErrorState();

        form.updateSubmitButtonText("Login");
      })
      .finally(() => {
        form.enableForm();
      });
  });
};
