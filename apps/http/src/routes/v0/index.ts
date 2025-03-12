import { Router } from "express";
import { userRouter } from "./user.route";
import { mapRouter } from "./map.route";
import { adminRouter } from "./admin.route";

export  const router = Router();



router.use("/user", userRouter);
router.use("/map", mapRouter);
router.use("/admin", adminRouter);

// 3.04.58
