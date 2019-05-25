# NoteCuts

NoteCuts triggers shortcuts on other iOS devices using shared notes. Combine NoteCuts with [Cronios](http://cronios.com), and these shortcuts can run automatically in the background, even when the device is locked and sleeping.

- [Download NoteCuts from RoutineHub.co](https://routinehub.co/shortcut/2711)

With NoteCuts, you can:

- Turn your iPad or iPhone into a server where others can run shortcuts to get device status, retrieve content, or deliver notifications. 
- Access and run shortcuts — with their permission — on other people's iOS devices.
- Assist people who are less familiar with their iOS devices (i.e. parents and children) troubleshoot, web pages, display notifications, or run other shortcuts.

NotesCuts offers features such as the ability to:

- Limit which shortcuts are available to run on a per-note basis.
- Run shortcuts while the screen is locked and the device is sleeping (requires Cronios).
- Notify owners of shared notes that there are shortcuts they would like them to run.
- Send input to the shortcuts.
- Switch to the Shortcuts app for displaying menus and dialogs.

## Automating Shortcuts
People have been writing about the inability for shortcuts to be triggered to run automatically. What they fail to mention is there are solutions today that you let automate your shortcuts:

- **Cronios**: Date and time based scheduling. Enables shortcuts that can check every minute for triggering events.
- **GeoCuts**: Location-based triggering of shortcuts.
- **WatchCuts**: Trigger shortcuts from any iCloud-connected device, including Macs, Apple Watch, and iCloud.com.
- **NoteCuts**: Trigger shortcuts to run on other iOS devices using shared notes.
- **AlarmCuts**: Attach shortcuts to run with alarms using ringtones and GarageBand.

Of course, it would be great if these features are built into iOS and Shortcuts, but we could be waiting a long time for those features to come. In the meantime, you can take advantage of these shortcuts today.

## System Requirements 

NoteCuts has the following system requirements:

- Shortcuts 2.2
- iCloud Notes
- Cronios required to run shortcuts automatically and in the background. 

## Getting Started
When you run NoteCuts for the first time, you'll be presented by a brief number of tutorial screens will be displayed. Afterwards, you will have the option to create your first NoteCut. You can choose between a Local NoteCut or Remote NoteCut.

### Local NoteCuts
A local NoteCut allows you to run shortcuts on the same iOS device where the NoteCut resides. When you share your note with other people, they associate a Remote NoteCut to your note.

### Remote NoteCuts
Remote NoteCuts are associated with Local NoteCuts on other iOS devices. You can create these notes or receive them as shared notes from other users.

It is recommended to name your NoteCuts by device. This way it will be easy to identify on which device the shortcuts will be running. For instance;

- `Adam's iPad Pro` 
- `Team Access to Adam's iPad Pro`
- `Mary's iPhone` 
- `Johnny's iPad touch` 

Let's first create a local NoteCut. Give it a name and provide it with a description. 

### Adding Shortcuts
When you create a Local NoteCut, you can define which shortcuts can be run from the NoteCut. By default, you can run any shortcut installed on the device.

> If you don't specify anything, any shortcut on your iOS device will be available to run from this NoteCut. 

To restrict this, separate keywords by new lines. Any shortcut that contains the keyword can run when this NoteCut is evaluated. For instance:

```
Speak
Toggle
Remote
```

Specifying these keywords means any shortcut that contains `Speak`, `Toggle`, or `Remote` can run with this local NoteCut. A shortcut named `Photos` will not run. 

Use the ability to specify which shortcuts can run when sharing your local NoteCuts with other people. Otherwise, they will have complete access to run every shortcut on your device!

### Testing NoteCuts
After creating the NotCut, you will be presented by the Edit NoteCut Screen. Tap **View Note** to open the Notes app. 

> Note: If you have an iPad with Split View support, have both the Shortcuts app and Notes visible. 

In the new note, add some shortcuts to run by prefixing them with the `▶️` character. For instance:

```
▶️ Speak Random Number
```

Choose a shortcut where it will be obvious to you that it has run. 

Return to the Shortcuts app and tap **Evaluate This NoteCut** from the Edit menu. After a few seconds, the shortcut will run.

### How It Works
When NoteCuts evaluates your notes, it does the following things:

1. Checks to see if the device is locked by inspecting the device brightness value.
2. Checks online status.
3. Retrieves a list of shortcuts on the device. If you have a lot of shortcuts, this process can take several seconds. You can speed it up by enabling the Shortcuts Cache in Settings.
4. Retrieves all local NoteCuts or a single local NoteCut (if NoteCuts was supplied at launch with name of a NoteCut).
5. If the screen is on, assume that the device is unlocked. Update each note to force an iCloud sync of the note.
6. Wait a few seconds for iCloud sync to complete.
7. Evaluate the NoteCut for new shortcuts to run.
8. Run the shortcuts if evaluation is successful. Don't run if certain conditions are not met (i.e. online status, lock detection, etc.).
9. Exit the shortcut.

This workflow can be visualized in the following flow diagram:

### Sharing NoteCuts

## NoteCuts Syntax

### Run Delimiter
NoteCuts will evaluate any text that follows the last occurrence of the following string:

`⚡️📅 {{Date}} 🗒⚡️`

Where {{Date}} is an evaluation date. This string is called the **NoteCuts Run Delimiter**.

> Note; Anything you place above the last run delimiter will be ignored. 

You do not have to add the run delimiter yourself. NoteCuts automatically adds it when it evaluates your local NoteCuts. If you want to force an evaluation of new shortcuts, you can manually add the run delimiter, followed by a list of shortcuts. 

### Shortcut Syntax
To run a shortcut, you must prefix the shortcut name with the `▶️` character. This instructs NoteCuts to run a shortcut. For instance:

```
▶️ Speak Random Number
▶️ Backup My Shortcuts
Toggle Flashlight
```

In the example above, only two shortcuts will run, Speak Random Number and Backup My Shortcuts. Toggle Flashlight will not run, even though it is a valid shortcut name, because the `▶️` character does not prefix the shortcut name. 

### Options
You can specify the following options after the name of the shortcut:

- 🔒 **Lock Detection**. If this emoji is present, the shortcut will not run when the device is locked. While it is currently impossible to know if the device is locked, NoteCuts make a guess that it is locked whenever the device screen brightness is 0. Note: if your shortcut natively handles lock detection (i.e. it alerts the user to unlock the device before continuing), you do not need to specify this option. 
- ✋ **Requires Interaction**. This option will cause NoteCuts to open the Shortcuts app prior to running the shortcut. This is useful if you need to present dialogs and menus to the user. 
- ☁️ **Requires Network Access**. If this option is present, your shortcut will not run if the device is offline. 
- 📗 **Notify Shortcut**: A Cronios-style dictionary will be sent to the shortcut as input. You can use this dictionary to determine whether or not you are running the shortcut in the background. 
- 💬 **Custom Input**: Any text that follows this line will be sent to the shortcut as input. If the Notify Shortcut option is present, input will be placed under the `input` key of the dictionary sent to the shortcut. 

Here are some examples:

```
▶️ The Dark Dungeon (PKS) ✋🔒
▶️ How Do You Feel? ✋🔒☁️
▶️ Retrieve Web API ☁️
▶️ Remote Notification 💬 How are you doing? Are you all free for dinner tonight?
```

The Dark Dungeon, a [PromptKit Story](http://promptkit.com) shortcut, will not run when the device is locked. NoteCuts will Open the Shortcuts app prior to running the shortcut. 

How Do You Feel requires network access for dictation and user interaction (Shortcuts needs to be in the foreground for dictation to operate). It needs to run when the device is unlocked. 

Retrieve Web API only requires network access as it pings an API on the open web for information. 

Finally, Remote Notification has custom input which will be displayed on the iOS device in a notification banner. 

## Running NoteCuts in the Background
With Cronios, you can run NoteCuts in the background. It can even when your device is asleep. Here's how:

1. Configure NoteCuts to run at an interval of your choosing in Cronios. NoteCuts gives you options to create a cron job in Cronios that checks every 1, 2, 5, 10, 15, 30, or 60 minutes. You can further customize this within the NoteCuts cron job details page in Cronios. 
2. Run Cronios in Run Continuously Mode.
3. For best results, have some kind of background audio playing, be it a song, podcast, or a [silent audio]() file.

Troubleshooting and Frequently Asked Questions

**I added items to run, but they are not running.**
Did the device go to sleep before you added the items to the shared Note? iCloud Sync does not happen when the device is sleeping or off. NoteCuts will remember the last set of shortcuts that were run so it doesn't run them again when the device wakes up. 

## Exploring the NotesCuts Interface
The NoteCuts Home screen has the following elements:

- **Evaluate Local NoteCuts**: Checks all Local NoteCuts and runs any newly added shortcuts.
- **Local NoteCuts**: Lists all Local NoteCuts on the device.
- **Remote NoteCuts**: Lists all Remote NoteCuts.
- **New NoteCut**: Create a new local or remote NoteCut.
- **Import NoteCuts**: Scans the Notes app for any notes that follow the NoteCuts naming syntax, `NoteCuts⚡️(XYZ)` where XYZ is the NoteCut identifier.
- **Run Continuously with Cronios**: When Cronios integration is enabled, this action starts Cronios in Run Continuously mode. Shortcuts run via NoteCuts and Cronios are executed automatically in the background.
- **Add/Update Cron Job in Cronios**: Action to import a NoteCut cron job into Cronios. 
- **About**: Displays the NoteCuts about page. Includes the current version and build number.
- **Help**: Displays the documentation you are reading now.
- **Settings**: Displays the NoteCuts Settings page.
- **Close NoteCuts**: Allows you to exit the shortcut. Useful if you ran NoteCuts from another shortcut and want to return to it instead of terminating all shortcut execution.

## Settings
You can configure the following options in NoteCuts from the Settings page:

- **Evaluate Local NoteCuts at Startup**: If enabled, NoteCuts will evaluate all Local NoteCuts when NoteCuts starts up. Any newly added shortcuts will run during this time. Afterwards, the NoteCuts Home screen will be displayed.
- **Display Notification During Evaluation**: Displays a notification banner when NoteCuts evaluates Local NoteCuts. This banner does not appear if NoteCuts is running on a locked and sleeping device (via Cronios).
- **Notify Shortcut**: This option causes NoteCuts to send the shortcut a Cronios-style dictionary as input. If custom input is added, it is placed under the `input` key within this dictionary. Otherwise, the custom input is sent directly as input to the shortcut.
- **Show Tips**: Shows tips as you use the app.
- **Check for Updates Automatically**: If enabled, NoteCuts will check for updates automatically at startup.
- **Integrate with Cronios**: If enabled, additional options will appear on the NoteCuts Home page. You can launch Cronios into Run Continuously mode or add/update the NoteCuts cron job in Cronios.
- **Add/Update Cron Job with Cronios**: Adds or updates the NoteCuts cron job in Cronios.
- **Cache Shortcuts**: By default, NoteCuts will use the **Get My Shortcuts** action to retrieve a list of all shortcuts on your device prior to running any shortcut. Ifyou have a lot of shortcuts, this action can take several seconds. Enabling **Cache Shortcuts** will cause NoteCuts to use a cached list of shortcut names when determining which shortut will run.
- **Update Shortcuts Cache**: Updates the saved cache file for shortcuts installed on this iOS device.
- **Check for Updates**: Perform a manual check for updates of PromptKit.
- **Change Language**: Change the language of PromptKit.
- **Back to Home**: Returns to the NoteCuts Home screen.

## License
Copyright © 2019 Adam Tow • tow.com • @atow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

