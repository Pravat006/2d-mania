import { Router } from 'express'

export const roomRouter = Router()

// get all rooms
roomRouter.get("/maps/", (req, res) => {
    res.json({ message: "get all maps route" });
  });
  
roomRouter.get("/map/:mapId", (req, res) => {
    res.json({
      message: "Fetching  Rooms Data (mapdata, objects, elements , etc.) route",
    });
  });
  


