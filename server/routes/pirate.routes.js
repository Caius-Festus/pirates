const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
  app.get("/api/pirates/", PirateController.findAllPirates);
  app.get("/api/pirates/Captain", PirateController.findCaptain);
  app.get("/api/pirates/:id", PirateController.findPirate);
  app.put("/api/pirates/update/:id", PirateController.updatePirate);
  app.post("/api/pirates/new", PirateController.createNewPirate);
  app.delete("/api/pirates/delete/:id", PirateController.deletePirate);
};