const express = require('express');
const router = express.Router();


// Import of the Technician Controller
const Technician = require("../controllers/Technicain");


// Creating the Technician
router.post("/",Technician.createTechnician);

// Getting all the Technician
router.get("/",Technician.getTechnician);

// Getting the Specific Technician
router.get("/:id",Technician.getSpecificTechnician);
    
// Updating the Technician 
router.put("/:id",Technician.updateTechnician);

// Deleting the Technician 
router.delete("/:id",Technician.deleteTechnician);


module.exports = router;