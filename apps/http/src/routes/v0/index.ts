import { Router } from "express";
import { userRouter } from "./user.route";
import { mapRouter } from "./map.route";
import { adminRouter } from "./admin.route";
import { googleAuth } from "../../controllers/authController";

export  const router = Router();

router.post("/googleAuth", googleAuth)
  
router.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });    
}
);


router.use("/user", userRouter);
router.use("/map", mapRouter);
router.use("/admin", adminRouter);

// 3.04.58
