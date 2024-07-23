// Importation des modules nécessaires
const router = require("express").Router(); // Module pour créer un nouveau routeur

const absenceServiceController = require("../controllers"); // Importation du contrôleur PurchaseOrder

// Route pour créer un nouvel objet 
// Quand une requête POST est envoyée à '/new', la méthode create du contrôleur 
router.post('/', absenceServiceController.create);
router.get("/:id", absenceServiceController.getOne);
router.get("/", absenceServiceController.getAll);
router.put("/:id",absenceServiceController.updateOne);





// Exporte le routeur
module.exports = router;
