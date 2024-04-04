import { onReady } from "@xatom/core";
import { app } from "./routes";
import "./modules/supbase";
import { initSupabase } from "./modules/supbase";

(window as any).WFDebug = true;

onReady(() => {
  initSupabase(() => {
    app();
  });
});
