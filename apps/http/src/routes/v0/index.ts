import { Router } from "express";

export  const router = Router();



router.use("/user", userRouter);
router.use("/map", mapRouter);
router.use("/admin", adminRouter);

// 3.04.58
