import { Router } from 'express'

export const mapRouter = Router()

// get all rooms
mapRouter.get("/maps/", (req, res) => {
    res.json({ message: "get all maps route" });
  });
  
mapRouter.get("/map/:mapId", (req, res) => {
    res.json({
      message: "Fetching  Rooms Data (mapdata, objects, elements , etc.) route",
    });
  });
  


