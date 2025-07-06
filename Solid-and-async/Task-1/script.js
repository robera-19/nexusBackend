

//-------the code that violates solid  principle---------
/*
class Notification {
    constructor(type) {
      this.type = type; // "email", "sms", or "telegram"
    }
    send(message, emailAddress, phoneNumber, telegramId) {
      if (this.type === 'email') {
        if (!emailAddress) throw new Error("Email required");
        console.log(`Sending EMAIL to ${emailAddress}: ${message}`);
      } else if (this.type === 'sms') {
        if (!phoneNumber) throw new Error("Phone number required");
        console.log(`Sending SMS to ${phoneNumber}: ${message}`);
      } else if (this.type === 'telegram') {g
        if (!telegramId) throw new Error("Telegram ID required");
        console.log(`Sending Telegram to ${telegramId}: ${message}`);
      } else {
        throw new Error("Unknown notification type");
      }
    }
  }
  
  const n1 = new Notification('email');
  n1.send('Hello!', 'nexus@email.com', null, null);
  
  const n2 = new Notification('sms');
  n2.send('Hi!', null, '1234567890', null);
  
  const n3 = new Notification('telegram');
  n3.send('Yo!', null, null, 'telegram_user_42');

  */


  //--------below are the correct code that follows SOLID principle------

  // We’ll introduce an abstraction (NotificationChannel), and 
  // delegate responsibilities to modular classes:

  
  // 🔧 Abstract Notification Channel interface
class NotificationChannel {
    send(message) {
      throw new Error("Method 'send()' must be implemented by subclass.");
    }
  }
  
  // ✉️ Email Notification Class
  class EmailNotification extends NotificationChannel {
    constructor(emailAddress) {
      super();
      if (!emailAddress) throw new Error("Email address is required.");
      this.emailAddress = emailAddress;
    }
  
    send(message) {
      console.log(`Email sent to ${this.emailAddress}: ${message}`);
    }
  }
  
  // 📱 SMS Notification Class
  class SMSNotification extends NotificationChannel {
    constructor(phoneNumber) {
      super();
      if (!phoneNumber) throw new Error("Phone number is required.");
      this.phoneNumber = phoneNumber;
    }
  
    send(message) {
      console.log(`SMS sent to ${this.phoneNumber}: ${message}`);
    }
  }
  
  // 📨 Telegram Notification Class
  class TelegramNotification extends NotificationChannel {
    constructor(telegramId) {
      super();
      if (!telegramId) throw new Error("Telegram ID is required.");
      this.telegramId = telegramId;
    }
  
    send(message) {
      console.log(`Telegram sent to ${this.telegramId}: ${message}`);
    }
  }
  
  // High-level Notification class that delegates sending
  class Notification {
    constructor(channel) {
      if (!(channel instanceof NotificationChannel)) {
        throw new Error("Invalid notification channel provided.");
      }
      this.channel = channel;
    }
  
    send(message) {
      this.channel.send(message);
    }
  }
  
  // instances of the class
  const emailNotification = new Notification(
    new EmailNotification("nexus@email.com")
  );
  emailNotification.send("Hello via Email!");
  
  const smsNotification = new Notification(
    new SMSNotification("1234567890")
  );
  smsNotification.send("Hello via SMS!");
  
  const telegramNotification = new Notification(
    new TelegramNotification("telegram_user_42")
  );
  telegramNotification.send("Hello via Telegram!");
  