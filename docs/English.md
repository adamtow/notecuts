# NoteCuts

NoteCuts continually monitors shared notes on Apple Notes, Dropbox, and Evernote, enabling automatically running of shortcuts, even when the iOS device  is locked and sleeping.

- [**Download NoteCuts from RoutineHub.co**](https://routinehub.co/shortcut/2711)

![NotesCuts: Trigger Shortcuts to Run via Shared Notes](https://adamtow.github.io/notecuts/images/notecuts-note-hero.png)

With NoteCuts, you can:

- Run shortcuts automatically, no tapping on notification banners required!
- Integrate with popular third-party services like IFTTT and Zapier to send shortcut commands to your iOS device using hundreds of triggers.
- Turn your iPad or iPhone into a server to remotely run shortcuts to get device status, retrieve content, or deliver notifications.
- Access and run shortcuts — with their permission — on other people's iOS devices.
- Assist people who are less familiar with their iOS devices (i.e. parents and children) troubleshoot, web pages, display notifications, or run other shortcuts.

NotesCuts offers features such as the ability to:

- Integration with shared notes in Apple Notes and Evernote, or text files on Dropbox.
- Limit which shortcuts are available to run on a per-note basis.
- Run shortcuts while the screen is locked and the device is sleeping.
- Notify owners of shared notes that there are shortcuts they would like them to run.
- Send input to the shortcuts.
- Switch to the Shortcuts app for displaying menus and dialogs.

****

<span id="automation"></span> 
## Automating Shortcuts
A common request from Shortcuts users is whether shortcuts can be automatically triggered. And, the most common, albeit uninformed, response is that they cannot. While true this is not a built-in part of iOS, solutions do exist today. I have developed a suite of apps enabling automatic triggering of shortcuts across a variety of use cases:

- [**Cronios**](http://cronios.com): Date and time based scheduling. Enables shortcuts that can check for triggering events every minute.
- [**GeoCuts**](http://geocuts.com): Location-based triggering of shortcuts.
- [**WatchCuts**](https://tow.com/shortcuts/watchcuts): Trigger shortcuts from any iCloud-connected device, including Macs, Apple Watch, and iCloud.com.
- [**NoteCuts**](https://tow.com/shortcuts/notecuts): Trigger shortcuts to automatically run on iOS devices by monitoring shared notes on Apple Notes, Dropbox, and Evernote.
- [**AlarmCuts**](https://tow.com/shortcuts/alarmcuts): Attach shortcuts to run with alarms using ringtones and GarageBand.

> Of course, it would be great if these features are built into iOS and Shortcuts, but we could be waiting a long time for those features to come. In the meantime, you can take advantage of these automation shortcuts today.

****

<span id="requirements"></span> 
## System Requirements

NoteCuts has the following system requirements:

- Shortcuts 2.2
- iCloud Notes, Evernote, or Dropbox
- (Recommended) IFTTT, Zapier, or other third-party web integration service. 
- (Optional) [Cronios](http://cronios.com) if you want to run NoteCuts with other Cronios-compatible background shortcuts.
- (Optional) [Silent audio file](#silence) in the Music app on your iOS device.

****

<span id="getting-started"></span> 
## Getting Started
When you run NoteCuts for the first time, you'll be presented with a short tutorial that runs through the major features of NoteCuts. Afterwards, you will have the option to create your first NoteCut.

You can choose between a Local NoteCut or Remote NoteCut.

### Local NoteCuts
A local NoteCut allows you to run shortcuts on the same iOS device where the NoteCut resides. When you share your note with other people, they associate that note with a Remote NoteCut.

### Remote NoteCuts
Remote NoteCuts are associated with Local NoteCuts on other iOS devices. You can create these notes yourself or receive them as shared notes from other users. A shortcut added to a remote NoteCut will run on a different iOS device. 

It is recommended to name your NoteCuts by device. This way it will be easy to identify on which device the shortcuts will be running. For instance;

- `Adam's iPad Pro` 
- `Team Access to Adam's iPad Pro`
- `Mary's iPhone` 
- `Johnny's iPad touch` 

Let's first create a local NoteCut. Give it a name using the scheme described above. 

The name you choose will be used as the title of the note in Apple Notes or Evernote and the filename for the text file on Dropbox. The format for the note or filename will be:

	`NoteCuts (XYZ)`

Where `XYZ` is the name you enter. 

### NoteCut Location
Next, you'll choose where you want the associated note will live. Select from:

- Apple Notes
- Dropbox
- Evernote

For your first NoteCut, tap Apple Notes.

### Description
Add a description for your NoteCut or tap OK to leave it blank.

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

> Use the ability to specify which shortcuts can run when sharing your local NoteCuts with other people. Otherwise, they will be able to run every shortcut on your device!

### Testing NoteCuts

After creating the NoteCut, you will be presented by the Edit NoteCut Screen. Tap **View in Notes** to open the Notes app. 

> You can also choose **Add Text to Note** to append text to the selected note without having to leave the Shortcuts app.

#### Adding a Shortcut

In the new note, add a command to run a shortcut by prefixing the  shortcut name with the `▶️` character. For instance:

```
▶️ Speak Random Number
```

Choose a shortcut where it will be obvious to you that it has run. 

> Note: If you have an iPad with Split View support, have both the Shortcuts app and Apple Notes visible. 

Return to NoteCuts in the Shortcuts app and tap **Evaluate This NoteCut** from the Edit menu. After a few seconds, the shortcut will run. [Learn more about what NoteCuts is doing during evaluation here](#how-it-works).

Discover more [details about the NoteCuts shortcut syntax](#syntax), including additional options you can add.

<span id="sharing-notecuts"></span> 
### Sharing NoteCuts
Invite friends, family, or colleagues to run shortcuts on your device. Have them do the same for you, so you can run shortcuts on their devices. As both of you edit notes that are associated with Local and Remote NoteCuts, the changes will stay in sync via iCloud, Evernote, or Dropbox. 

> If you have no interest in sharing shortcuts with others, you may still want to be able to trigger shortcuts on all the iOS devices that you do own. Simply share the NoteCuts notes to yourself using the same instructions below. 

#### Sharing in Apple Notes
> Learn [more about sharing notes](https://support.apple.com/en-us/HT206987) in this Apple Support web page.

1. In NotesCuts, open the NoteCut that you want to share.
2. Tap View in Notes to open the note in Notes.
3. Tap the collaborate icon (the person with the plus sign).
4. Choose how you'd like to send your invitation.
5. Enter the recipients and tap Send.

Once a note has been shared, you can adjust its sharing settings by tapping on the collaborate icon again. You can:

- **Add People**: Add more people who will have access to your NoteCut.
- **Remove Access**: Remove access to your NoteCut.
- **Stop Sharing**: Remove access for everyone to your NoteCut.

#### Sharing in Dropbox
To share your text file in Dropbox, follow these steps:

1. On the Dropbox website or app, navigate to the folder containing the note.
2. Tap or click the Share Folder button.
3. Enter the name or emails of the people you want to invite to edit the file.
4. Make sure Can Edit is selected from the access permissions drop-down menu.
5. Tap the gear icon.
6. Under Manage Access, select Only You from the drop-down menu so only you can add more people to the shared folder.

> NOTE: With Dropbox, in order for people to be able to edit the file, you have to share the parent folder, not the file.

#### Sharing in Evernote
To share your note in Evernote, follow these steps:

1. Go to the note associated with the NoteCut.
2. Tap the Share Note button.
3. Enter the names or emails of the people to whom you want to share the note.
4. Tap the pencil icon to allow them to edit the note. Best to not allow them to invite others to edit the note.

> On iOS, the Share Note button looks similar to the one in Apple Notes. It's a person with a plus button. On Evernote on the web, the button is green and says Share.

Once people have accepted the share invitation and gained access to the file, they will be able to run shortcuts on your iOS device. 

****

<span id="syntax"></span> 
## NoteCuts Syntax
NoteCuts looks for specially formatted lines to indicate shortcuts to run and the last evaluation dates.

### Run Delimiter
NoteCuts will evaluate any text following the **last** occurrence of the following string:

`⚡️📅 {{Date}} 🗒⚡️`

Where {{Date}} is an evaluation date. This string is called the **NoteCuts Run Delimiter**.

> Note: Anything you place above the last run delimiter will be ignored. 

You do not have to add the run delimiter yourself. NoteCuts automatically adds it when it evaluates your local NoteCuts. If you want to force an evaluation of new shortcuts, you can manually add the run delimiter, followed by a list of shortcuts. 

> Note: If your device is sleeping, the run delimiter will be added for NoteCuts using Evernote and Dropbox. Apple Notes syncing can only occur while the device is on and unlocked. 

### Shortcut Syntax
To run a shortcut, you must prefix the shortcut name with the `▶️` character. This instructs NoteCuts to run a shortcut. For instance:

```
▶️ Speak Random Number
▶️ Backup My Shortcuts
Toggle Flashlight
```

In the example above, only two shortcuts will run, Speak Random Number and Backup My Shortcuts. Toggle Flashlight will not run, even though it is a valid shortcut name, because the `▶️` character is not present at the beginning of the line. 

### Shortcut Options
You can specify the following emoji characters to provide options after the name of the shortcut:

#### 🔒
**Lock Detection**: If this emoji is present, the shortcut will not run when the device is locked. While it is currently impossible to know if the device is locked, NoteCuts can guess that it is locked whenever the device screen brightness is 0. Note: if your shortcut natively handles lock detection (i.e. it alerts the user to unlock the device before continuing), you do not need to specify this option. 

#### ✋
**Requires Interaction**: This option will cause NoteCuts to open the Shortcuts app prior to running the shortcut. This is useful if you need to present dialogs and menus to the user. This requires the device to be on to work. 

#### ☁️
**Requires Network Access**: If this option is present, your shortcut will not run if the device is offline. 

#### 📗
**Notify Shortcut**: A Cronios-style dictionary will be sent to the shortcut as input. You can use this dictionary to determine whether or not you are running the shortcut in the background. 

```
{
	"Cronios": 1,
	"online": 1
}
```

#### 💬
**Custom Input**: Any text that follows this line will be sent to the shortcut as input. If the Notify Shortcut option is present, input will be placed under the `input` key of the dictionary sent to the shortcut. 

Here are some examples:

```
▶️ The Dark Dungeon (PKS) ✋🔒
▶️ How Do You Feel? ✋🔒☁️
▶️ Retrieve Web API ☁️
▶️ Remote Notification 💬 How are you doing? Are you free for dinner tonight?
```

1. **The Dark Dungeon**, a [PromptKit Story](http://promptkit.com) shortcut, will not run when the device is locked. NoteCuts will Open the Shortcuts app prior to running the shortcut. 
2. **How Do You Feel** requires network access for dictation and user interaction (Shortcuts needs to be in the foreground for dictation to operate). It needs to run when the device is unlocked. 
3. **Retrieve Web API** only requires network access as it pings an API on the open web for information. 
4. **Remote Notification** has custom input which will be displayed on the iOS device in a notification banner. 

****

<span id="background"></span> 
## Running NoteCuts in the Background
NoteCuts can run continually in the background, constantly checking for changes in your Apple Notes, Evernote notes, and Dropbox text files. You can configure from one to sixty seconds how often NoteCuts will check for changes.

Running NoteCuts continually means your iPhone or iPad can constantly be on the lookout for new shortcuts to run that were added either by you or someone to whom you've shared a NoteCut with. It can even run these shortcuts when your device is locked and asleep.

- Open NoteCuts
- Tap Evaluate Continously

> Make sure the shortcut you want to run automatically works when launched in the background. Any error may cause the Shortcuts app to display an modal dialog with will stop the shortcut and any future monitoring by NoteCuts until it has been removed from the [Shortcut Quarantine](#quarantine).

### Quarantine
When NoteCuts runs a shortcut, it temporarily places the shortcut in a quarantine. If no errors occurred during execution, the shortcut is removed from the quarantine. However, if there was an error, it's likely one that terminated the entire Shortcut application.

When this happens, NoteCuts will prevent that shortcut from running again until you remove it from the Quarantine.

1. Open NoteCuts
2. If shortcuts are in quarantine, a menu option called Shortcut Quarantine will appear below the evaluation menu items.
3. Tap and select the shortcuts that should remain in quarantine.
4. Tap Done.

When a shortcut is removed from the quarantine, it can run again from NoteCuts. If another error occurs, you'll want to review the shortcut to see why it's crashing. It could be one of several reasons, including:

- Trying to run an action that is disallowed in the current context.
- The action is not supported on the iOS device (i.e. Vibrate Device on iPads).
- A network timeout.
- An action was requested that required online access.
- A user timeout (i.e. a dialog menu was displayed but the user never returned to the Shortcuts app to address it).

### Integration with Cronios
Cronios, the shortcuts scheduler for iOS, lets you can run shortcuts in the background. NoteCuts can run alongside other Cronios-compatible shortcuts by addin NoteCuts as a cron job to Cronios. 

Here's how to configure NoteCuts to work with Cronios:

1. Enable Cronios Integrtfrkm the NoteCuts Settings page. Configure NoteCuts to run at an interval of your choosing in Cronios. NoteCuts gives you options to create a cron job in Cronios that checks every 1, 2, 5, 10, 15, 30, or 60 minutes. You can further customize this within the NoteCuts cron job details page in Cronios. 
2. Run Cronios in Run Continuously Mode.
3. For best results, have some kind of background audio playing, be it a song, podcast, or a [silent audio file](#silent).

****

<span id="silence"></span>
### Silent Audio
Use these audio files with Cronios to let run for long periods of time when you're using your iOS device or when it's locked.

- [**Download 12 and 24 Hours of Silence MP3 Files**](https://www.dropbox.com/sh/eu0mb1vf1oqo74l/AACijAwutUSDMtzeTElIGBx9a?dl=0)

Here are instructions on how to create a shortcut that 

1. Add these files to iTunes.
2. Sync them to your iOS device. 
3. Play the song to create a Siri Shortcut (optional). 
4. Create a shortcut that has the following actions:

- **Find Songs**: Reference the silent audio file.
- **Play Music**
- **Text**: enter "autorun" as the value.
- **Run Shortcut**: specify NoteCuts or Cronios as the shortcut.

![24 Hours of Silence](https://adamtow.github.io/notecuts/images/silence.png)

Now, whenever you want to run NoteCuts or Cronios for long periods of uninterrupted time, run this shortcut. After seeing the notification from NoteCuts or Cronios as to when it will start evaluating your cron jobs, you can lock your screen or switch to using other apps.

> If you use Cronios, install and use the [Cronios Watcher](http://cronios.com#cronios-watcher) to be notified if Cronios were to stop, either by iOS or by an error in the Shortcuts app. For more information, please refer to the [Cronios documentation](http://cronios.com).

****

<span id="integration"></span>
## Integrating NoteCuts with Third-Party Triggering Services

Combine a third-party triggering service like IFTTT or Zapier to append shortcut commands to your notes and files on Evernote or Dropbox. For Apple Notes, use shortcuts to append commands to local and remote NoteCuts notes. 

If NoteCuts is running continuously in the background, shortcut commands will run automatically. 

****

<span id="interface"></span> 
## Exploring the NotesCuts Interface
The NoteCuts Home screen has the following elements:

- **Evaluate Continuously**: Constantly checks your Local NoteCuts for shortcut commands to run.
- added - **Evaluate Once**: Checks all Local NoteCuts and runs any newly added shortcuts once before returning to the NoteCuts Home screen.
- **Run Continuously with Cronios**: When Cronios integration is enabled, this action starts Cronios in Run Continuously mode. Shortcuts run via NoteCuts and Cronios are executed automatically in the background.
- **Shortcut Quarantine**: Appears when a shortcut experiences an error while being run by NoteCuts.
- **Local NoteCuts**: Lists all Local NoteCuts on the device. The icon next to each NoteCut depicts the location of the connected note: Apple Notes, Dropbox, or Evernote. 
- **Remote NoteCuts**: Lists all Remote NoteCuts. If a NoteCut could not be found, a ❓ will appear below the name of the NoteCut. 
- **New NoteCut**: Create a new local or remote NoteCut.
- **Import Apple Notes as NoteCuts**: Scans the Notes app for any notes that follow the NoteCuts naming syntax, `NoteCuts (XYZ)` where XYZ is the NoteCut identifier.
- **Add/Update Cron Job in Cronios**: Action to import a NoteCut cron job into Cronios. 
- **About**: Displays the NoteCuts about page. Includes the current version and build number.
- **Help**: Displays the documentation you are reading now.
- **Settings**: Displays the NoteCuts Settings page.
- **Close NoteCuts**: Allows you to exit the shortcut. Useful if you ran NoteCuts from another shortcut and want to return to it instead of terminating all shortcut execution.

****

<span id="settings"></span> 
## Settings
You can configure the following options in NoteCuts from the Settings page:

- **Evaluate Local NoteCuts at Startup**: If enabled, NoteCuts will evaluate all Local NoteCuts when NoteCuts starts up. Any newly added shortcuts will run during this time. Afterwards, the NoteCuts Home screen will be displayed.
- **Display Notification During Evaluation**: Displays a notification banner when NoteCuts evaluates Local NoteCuts. This banner does not appear if NoteCuts is running on a locked and sleeping device (via Cronios).
- **Wait Interval**: Specify how long before NoteCuts evaluates your Local NoteCuts again when **Evaluate Continuously** is active.
- **Notify Shortcut**: This option causes NoteCuts to send the shortcut a Cronios-style dictionary as input. If custom input is added, it is placed under the `input` key within this dictionary. Otherwise, the custom input is sent directly as input to the shortcut.
- **Show Tips**: Shows tips as you use the app.
- **Check for Updates Automatically**: If enabled, NoteCuts will check for updates automatically at startup.
- **Integrate with Cronios**: If enabled, additional options will appear on the NoteCuts Home page. You can launch Cronios into Run Continuously mode or add/update the NoteCuts cron job in Cronios.
- **Add/Update Cron Job with Cronios**: Adds or updates the NoteCuts cron job in Cronios.
- **Cache Shortcuts**: By default, NoteCuts will use the **Get My Shortcuts** action to retrieve a list of all shortcuts on your device prior to running any shortcut. Ifyou have a lot of shortcuts, this action can take several seconds. Enabling **Cache Shortcuts** will cause NoteCuts to use a cached list of shortcut names when determining which shortut will run.
- **Update Shortcuts Cache**: Updates the saved cache file for shortcuts installed on this iOS device.
- **Display Dividers**: Separate the sections of the NoteCuts Home screen with blank lines. Assists with readability if you have a large number of local and remote NoteCuts. 
- **Enable Debug Mode**: For developers, enabling this option displays alerts during evaluation. Helpful when debugging your NoteCuts. 
- **Check for Updates**: Perform a manual check for updates of PromptKit.
- **Change Language**: Change the language of PromptKit.
- **Back to Home**: Returns to the NoteCuts Home screen.

****

## Frequently Asked Questions and Troubleshooting

### I added items to run, but they are not running.
Did the device go to sleep before you added the items to the shared Note? iCloud Sync does not happen when the device is sleeping or off. NoteCuts will remember the last set of shortcuts that were run so it doesn't run them again when the device wakes up. 

Do you have Shortcuts Cache enabled? If so, have you added new shortcuts after the last time you updated the cache? 

Did you provide keywords for your NoteCut, restricting the shortcuts that can run from the NoteCut? If so, make sure the shortcut you are trying to run is on the list of available shortcuts. You can view what shortcuts will run by selecting **View Triggerable Shortcuts** from the **Edit NoteCut** menu.

### I'm getting an error, "The action could not be run in the current user interface."
With Apple Notes, NoteCuts makes use of the Append Note action when evaluating Local NoteCuts. By appending a new line to the end of the note, iCloud sync is triggered for the note, causing all updates to be fetched. The Append Note action currently requires the device to be unlocked. If NoteCuts tries to do this when the device is locked, this error will be thrown and NoteCuts and Shortcuts will stop execution. The shortcut will be placed into quarantine, however, so it will not disrupt NoteCuts again unless your release it from quarantine.

> Let's hope Apple and the Shortcuts team allow shortcut developers better ability to handle errors without terminating the entire shortcut execution in the future. 

This is not a concern with Evernote and Dropbox. Retrieving data from those two services always seems to fetch the latest data from the cloud. 

### I can't run other shortcuts from the Shortcuts app while NoteCuts or Cronios is running in continuous mode.

Refer to the section on [running other shortcuts](http://cronios.com/#running-other-shortcuts) in the Cronios documentation. 

<span id="how-it-works"></span> 
### How it works
When NoteCuts evaluates your notes, it does the following things:

1. Checks to see if the device is locked by inspecting the device brightness value.
2. Checks online status.
3. Retrieves a list of shortcuts on the device. If you have a lot of shortcuts, this process can take several seconds. You can speed it up by enabling the Shortcuts Cache in Settings.
4. Retrieves all local NoteCuts or a single local NoteCut (if NoteCuts was supplied at launch with name of a NoteCut). Retrieved information from Apple Notes, Evernote, or Dropbox. 
5. If the screen is on, assume that the device is unlocked. Update each note to force an iCloud sync of the note.
6. Wait a few seconds for iCloud sync to complete.
7. Evaluate the NoteCut for new shortcuts to run.
8. Run the shortcuts if evaluation is successful. Don't run if certain conditions are not met (i.e. online status, lock detection, etc.).
9. Exit the shortcut.

This workflow can be visualized in the following flow diagram:

![NoteCuts Flow Diagram](https://adamtow.github.io/notecuts/images/notecuts-flow-diagram.png)

### Will running Cronios and NoteCuts impact my battery life?
If the shortcuts that are being run employ battery-draining activities like Get Current Location, battery life will be affected. However, if Cronios and NoteCuts are just polling and not running shortcuts, battery drain can be minimal. 

When running while the device is locked, the lack of battery drain is even more pronounced. A test shown that over a nearly 8 hour period, only 10% of a locked and sleeping iPad Pro battery was drained, despite Cronios, NoteCuts, and WatchCuts checking for new shortcuts to run every minute.

****

<span id="localization"></span> 
## Localization
NoteCuts is available in English, but the application is also supplied with auto-translated localized files for the support spoken/dictation languages.

Since machine translation is never perfect, your help would come greatly in handy. If you are a native speaker of one of these languages, consider contributing to improving PromptKit's localization files.

You can use the Localization Helper shortcut to assist with localizing PromptKit into your language.

> [**Download Localization Helper from RoutineHub &raquo;**](https://routinehub.co/shortcut/1931)

- When the localization file is complete, submit a pull request on [the PromptKit GitHub page](https://github.com/adamtow/notecuts/localization/).

Help make NoteCuts more accurate and more universal for all iOS users!

****

<span id="app-framework"></span>
## App Framework
NoteCuts was developed using the [Shortcut App Framework](https://routinehub.co/shortcut/1510) approach to developing application-like shortcuts. This framework was also used to develop:

- [**Cronios**](https://routinehub.co/shortcut/1267): The shortcuts scheduler for iOS.
- [**GeoCuts**](https://routinehub.co/shortcut/1732): Run your shortcuts automatically based on location triggers.
- [**Inspector**](https://routinehub.co/shortcut/1106): View and modify objects at runtime in your shortcuts.
- [**LaunchCuts**](https://routinehub.co/shortcut/959): Folders and tags for your organizing and launching your shortcuts.
- [**WatchCuts**](https://routinehub.co/shortcut/1864): Trigger shortcuts on your iPhone and iPad using any of your iCloud-connected devices: iPhone, iPad, Mac, Apple Watch, or iCloud.com!
- [**PromptKit**](https://routinehub.co/shortcut/2583): An advanced dialog engine for shortcuts and iOS. 

Learn more how you can create your own [shortcut applications with App Framework here](https://tow.com/shortcuts/framework).

****

<span id="license"></span>
## License
Copyright © 2019 Adam Tow • tow.com • @atow

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

