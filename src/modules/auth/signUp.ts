import { WFFormComponent } from "@xatom/core";
import supabase from "../supbase";
import { SUPABASE_REDIRECT_URL } from "../../config";

export const signUp = () => {
  const form = new WFFormComponent<{
    "full-name": string;
    email: string;
    password: string;
    "confirm-password": string;
  }>(`[xa-type=main-form]`);

  const googleBtn = form.getChildAsComponent(
    `[xa-type="google-btn"]`
  );

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
    if (data.password !== data["confirm-password"]) {
      form.updateTextViaAttrVar({
        error:
          "Password and confirm password does not match",
      });
      form.showErrorState();
      return;
    }

    form.disableForm();
    form.updateSubmitButtonText("Please wait...");

    supabase.auth
      .signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: SUPABASE_REDIRECT_URL,
          data: {
            fullName: data["full-name"],
          },
        },
      })
      .then((data) => {
        if (data.error) {
          form.updateTextViaAttrVar({
            error:
              data.error.message ||
              "Unable to create account please try again",
          });
          form.showErrorState();
          form.updateSubmitButtonText("Create Account");
          return;
        }
        form.showSuccessState();
      })
      .catch((err) => {
        form.updateTextViaAttrVar({
          error:
            err.message ||
            "Unable to create account please try again",
        });
        form.showErrorState();

        form.updateSubmitButtonText("Create Account");
      })
      .finally(() => {
        form.enableForm();
      });
  });
};
