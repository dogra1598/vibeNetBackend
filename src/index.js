import connectDB from "./db/dbConnection.js";
import { server } from "./app.js";

connectDB()
  .then(() => {
    server.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    server.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!!", error);
  });
