import { Request, Response } from "express";

import client from "@repo/db/src/index" 
import { GoogleAuthSchema } from "../types/zschemas";

export const googleAuth = async (req: Request, res: Response) => {
  try {
   const {name , email , avatar}= GoogleAuthSchema.parse(req.body)
   // find the use in db 
    let user = await client.user.findUnique({ where: { email } });

    // if user not found create a new user
        if (!user) {
          user = await client.user.create({
            data: {
                name,
                email,
                avatar,
                role: "USER",
                },
            });
        }


    res.status(200).json({ message: "Authentication successful!", user });
  } catch (error) {
    res.status(500).json({ error: "Failed to authnticate user" });
  }
};
