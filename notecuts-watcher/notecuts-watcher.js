/**
 * NoteCuts Watcher
 * ---------------
 * This script notifies you when NoteCuts has stopped running.
 * It assists with keeping NoteCuts running continuously throughout the day.
 *
 * Initial installation is a multi-step process involving Scriptable and Shortcuts.
 *
 * -- In Scriptable -- 
 * 1) If desried, modify the kNotificationInterval constant according to how often you want to be notified.
 * 2) Run this script to create a Siri Suggestion in the Shortcuts app.
 *
 * -- In NoteCuts --
 * 1) Open NoteCuts.
 * 2) Tap Settings…
 * 3) Tap Notify When NoteCuts Stops Running.
 * 4) Tap Yes.
 *
 * NoteCuts Watcher is now ready. Each minute while NoteCuts is running, it will:
 * 
 * 1) Removes all pending NoteCuts Watcher notifications.
 * 2) Creates new NoteCuts Watcher notifications in the future, defined by the values
 * in kNotificationInterval array (values represent minutes from the current date).
 * 
 * If NoteCuts were to stop, the notifications in the future will be displayed.
 * Tapping the notification banner will cause the shortcut NoteCuts to
 * be launched from the Shortcuts app.
 *
 */

// Specify the number notifications and frequency of notifications (in minutes).
const kNotificationInterval = [
	5,
	7,
	10,
	15,
	30,
	60
];


const kShortcutName = "NoteCuts Daemon";
const kNoteCutsName = "NoteCuts";

// Specify the title of the notification 
const kTitle = `Tap to Relaunch ${kNoteCutsName}`;
const kBody = `${kNoteCutsName} has not run since {{Date}}.`;
const kSound = "failure"; // default, accept, alert, complete, event, failure, piano_error, piano_success, popup

/**
 * @NoteCutsRestart
 */

/**
 * Delivers notifications when NoteCuts is down.
 * @constructor
 *
 */
function NoteCutsWatcher() {}

/**
 * Schedules notifications to relaunch NoteCuts according to the 
 * values (in minutes) defined in the kNotificationInterval array.
 * 
 */
NoteCutsWatcher.prototype.scheduleNotifications = async function() {
	let currDate = new Date();

	// First remove all pending notifications
	this.removePendingNotifications();
	
	// Escape the Shortcut Name
	let shortcutName = escape(kShortcutName);

	// Generate the notification date X minutes in the future.
	for ( var i = 0; i < kNotificationInterval.length; i++ ) {
		let notifyDate = new Date( currDate.getTime() + ( kNotificationInterval[i] * 60 * 1000 ) );

		// Create the notification
		let n = new Notification();

		n.title = kTitle;
		n.body = kBody.replace("{{Date}}", currDate);
		n.openURL = "shortcuts://run-shortcut?name=" + shortcutName + "&input=autorun";
		n.sound = kSound;
		n.setTriggerDate( notifyDate );
		n.schedule();
	}
	
	return true;
}

/**
 * Removes all pending NoteCuts Watcher notifications.
 *
 * @returns - true
 */
NoteCutsWatcher.prototype.removePendingNotifications = async function() {
	let notifications = await Notification.allPending();
	
	for ( n of notifications ) {
		// Only remove the NoteCuts Watcher notifications
		if ( n.title != null && n.title == kTitle ) {
			n.remove();
		}
	}
	return true;
}

let watcher = new NoteCutsWatcher();

watcher.scheduleNotifications();

Script.complete();
