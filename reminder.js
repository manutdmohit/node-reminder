const schedule = require('node-schedule');
const notifier = require('node-notifier');
const { exec } = require('child_process');

// Set your preferred learning time (24-hour format)
const reminderTime = '12:15';

// Audio file path for the notification sound
const audioFile = 'srivalli.mp3'; // Replace with the actual path

// Convert the reminderTime to hours and minutes
const [hours, minutes] = reminderTime.split(':').map(Number);

// Schedule the daily reminder
const reminder = schedule.scheduleJob({ hour: hours, minute: minutes }, () => {
  console.log("Don't forget to learn TypeScript today!");

  // Show visual notification
  notifier.notify({
    title: 'TypeScript Learning Reminder',
    message: "Don't forget to learn TypeScript today!",
    icon: null, // You can specify an icon path here if needed
  });

  // Play sound notification
  exec(`start ${audioFile}`, (err) => {
    if (err) {
      console.error('Error playing sound:', err);
    }
  });
});
