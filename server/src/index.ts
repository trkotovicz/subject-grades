import "dotenv/config";
import { createDatabase } from "typeorm-extension";
import app from "./app";
import { AppDataSource } from "./database/data-source";

const PORT = process.env.PORT || 3001;

(async () => {
  try {
    const databaseOptions = AppDataSource.options;
    await createDatabase({ ifNotExist: true, options: databaseOptions });

    await AppDataSource.initialize();
    console.log("Data Source has been initialized");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error(`Error during Data Source initialization: ${err}`);
  }
})();
