import { Router } from "express";

export const adminRouter = Router();

//create room
adminRouter.post("/maps/create", (req, res) => {
  res.json({ message: "create map route" });
});
//update room details
adminRouter.patch("/maps/:roomId", (req, res) => {
  res.json({ message: "Update mapss  route" });
});

// add an  objects to a room
adminRouter.post("/maps/:mapId/objects", (req, res) => {
  res.json({ message: "Add Objects to map route" });
});

// update an  objects to a room
adminRouter.patch("/maps/:mapId/object/:objectId", (req, res) => {
  res.json({ message: "Update Objects to map route" });
});

// update multiple objects position in a room
adminRouter.patch("/maps/:mapId/objects", (req, res) => {
  res.json({ message: "Update Multiple Objects to map route" });
});

// delete a room
adminRouter.delete("/maps/:mapId", (req, res) => {
  res.json({ message: "Delete maps  route" });
});

// delete an object from a room
adminRouter.delete("/maps/:mapd/object/:objectId", (req, res) => {
  res.json({ message: "Delete Objects from map route" });
});

// update spawn points in a room
adminRouter.patch("/maps/:mapId/spawnpoints", (req, res) => {
  res.json({ message: "Update Spawn Points in map route" });
});

// update map background in a room
adminRouter.patch("/maps/:mapId/map", (req, res) => {
  res.json({ message: "Update Map Background in map route" });
});

