import "reflect-metadata";

import { loadDependencies } from "./dependency-loader";
import app from "./app";
import { CONFIG } from "./configs";

const start = async () => {
  // app prerequisites
  try {
    // db connection
  } catch (error) {
    throw error;
  }

  // load tsyringe project dependencies
  await loadDependencies();

  // start app
  app.listen(CONFIG.PORT, () => {
    console.log(`Server is running on port:${CONFIG.PORT}`);
  });
};

start();
