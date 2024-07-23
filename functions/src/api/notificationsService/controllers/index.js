const FirebaseController = require("../../utils/firebaseCrud");
const Notifications = require("../classes/index");

class NotificationController {
  static async create(req, res) {
    try {
      const firebaseController = new FirebaseController();
      const { message, type, userId } = req.body; // Extract type and userId from request body
      const notification = new Notifications(message, type, userId); // Pass type and userId to constructor

      await firebaseController.create("notifications", notification);

      res.json({ message: "Notification created successfully", notification });
    } catch (error) {
      console.error("Error creating notification:", error);
      res.status(500).json({ error: "Failed to create notification" });
    }
  }

  static async getAll(req, res) {
    try {
      let firebaseController = new FirebaseController();

      const notifications = await firebaseController.getAll("notifications");
      res.json({
        message: "List of notifications retrieved successfully",
        notifications: notifications,
      });
    } catch (error) {
      console.error("Error getting all notifications:", error);
      res.status(500).json({ error: "Failed to get all notifications" });
    }
  }

  static async getOne(req, res) {
    try {
      let firebaseController = new FirebaseController();

      let notificationId = req.params.id;
      let notification = await firebaseController.getOne(
        "notifications",
        notificationId
      );

      if (!notification) {
        return res.status(404).json({ error: "Notification not found" });
      }

      res.json({
        message: "Notification retrieved successfully",
        notification: notification,
      });
    } catch (error) {
      console.error("Error getting notification:", error);
      res.status(500).json({ error: "Failed to get notification" });
    }
  }

  static async update(req, res) {
    let firebaseController = new FirebaseController();
    let notificationId = req.params.id;
    try {
      // Update logic based on your requirements
      await firebaseController.update("notifications", notificationId);

      res.json({
        message: "Notification updated successfully",
        notificationId: notificationId,
      });
    } catch (error) {
      console.error("Error updating notification:", error);
      res.status(500).json({ error: "Failed to update notification" });
    }
  }

  static async deleteOne(req, res) {
    try {
      let firebaseController = new FirebaseController();
      let notificationId = req.params.id;

      await firebaseController.delete("notifications", notificationId);

      res.json({
        message: "Notification deleted successfully",
        notificationId: notificationId,
      });
    } catch (error) {
      console.error("Error deleting notification:", error);
      res.status(500).json({ error: "Failed to delete notification" });
    }
  }
}

module.exports = NotificationController;