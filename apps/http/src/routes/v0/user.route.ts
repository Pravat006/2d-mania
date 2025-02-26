import { Router } from "express";

export const userRouter = Router();    


userRouter.post("/signup", (req, res) => {

    res.json({ message: "Signup route" });
});

userRouter.post("/login", (req, res) => {

    res.json({ message: "Login route" });
}
);  
userRouter.post("/logout", (req, res) => {
    
    res.json({ message: "Logout route" });
}
);




