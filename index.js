import Express from "express";
import wholeSalerRouter from "./routes/userRoutes.js";

const app = Express();

//middlewares

app.use("/api/v1/wholesaler", wholeSalerRouter);

app.listen(3000, () => {
  console.log("Server listening to port", 3000);
});
