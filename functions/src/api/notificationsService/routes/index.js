// Importation des modules nécessaires
const router = require("express").Router(); // Module pour créer un nouveau routeur

const NotificationController = require("../controllers"); // Importation du contrôleur PurchaseOrder

// Route pour créer un nouvel objet PurchaseOrder
// Quand une requête POST est envoyée à '/new', la méthode create du contrôleur PurchaseOrder est appelée
router.post("/new", NotificationController.create);

// Route pour lire tous les objets PurchaseOrder
// Quand une requête GET est envoyée à '/', la méthode readAll du contrôleur PurchaseOrder est appelée
router.get("/", NotificationController.getAll);

// // Route pour lire un objet PurchaseOrder spécifique
// // Quand une requête GET est envoyée à '/:id', la méthode readOne du contrôleur PurchaseOrder est appelée avec l'ID spécifié
 router.get("/:id", NotificationController.getOne);

// // Route pour mettre à jour un objet PurchaseOrder spécifique
// // Quand une requête PUT est envoyée à '/:id', la méthode updateOne du contrôleur PurchaseOrder est appelée avec l'ID spécifié
 router.put("/:id", NotificationController.update);

// // Route pour supprimer un objet PurchaseOrder spécifique
// // Quand une requête DELETE est envoyée à '/:id', la méthode deleteOne du contrôleur PurchaseOrder est appelée avec l'ID spécifié
 router.delete("/:id", NotificationController.deleteOne);

// Exporte le routeur
module.exports = router;