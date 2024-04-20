import Express from "express";

const router = Express();

router.get("/api/v1/wholesaler/login", (req, res) => {
  res.send("login");
});

export default router;
