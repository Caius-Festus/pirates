const Pirate = require("../models/pirate.model");

module.exports.findAllPirates = (req, res) => {
  Pirate.find()
    .then(allDaPirates => res.json({ pirates: allDaPirates }))
    .catch(err => res.json({ message: "Something went wrong 1", error: err }));
};

module.exports.createNewPirate = (req, res) => {
  Pirate.create(req.body)
    .then(newlyCreatedPirate => res.json({ pirates: newlyCreatedPirate }))
    .catch(err => res.status(400).json(err));
};

module.exports.findPirate = (req, res) => {
  Pirate.findOne({_id: req.params.id})
    .then(onePirate => res.json({ pirate: onePirate }))
    .catch(err => res.json({ message: "Something went wrong 2", error: err }));
};

module.exports.updatePirate = (req, res) => {
  Pirate.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedPirate => res.json({ pirate: updatedPirate }))
    .catch(err => res.json({ message: "Something went wrong 3", error: err }));
};

module.exports.deletePirate = (req, res) => {
  Pirate.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong 4", error: err }));
};

module.exports.findCaptain = (req, res) => {
  Pirate.find({position: 'Captain'})
    .then(captainResponse => res.json({captain: captainResponse}))
    .catch(err=> res.json({message:"Something went wrondddd", error:err}))
}
