class Notifications {
    constructor( message, type, userId = null) {
      this.message = message;
      this.type = type;
      this.userId = userId;
    }
  
    setMessage(message) {
      this.message = message;
    }
  
    setType(type) {
      this.type = type;
    }
  
    setUserId(userId) {
      this.userId = userId;
    }
  }
  
  module.exports = Notifications;