# NoteCuts

NoteCuts let's you trigger the running of shortcuts using shared notes between iOS devices. If you have [Cronios](http://cronios.com) installed, these shortcuts can even run automatically in the background. 

Use Cases:

- Server: Turn your iOS device into a server where others can run shortcuts to get device status and information, or send you a notification. 
- Help: Assist people who are less familiar with their iOS devices (i.e. parents and children) troubleshoot, web pages, display notifications, or run other shortcuts.

Requirements 

- Shortcuts 2.2
- iCloud Notes
- Cronios required to run shortcuts automatically and in the background. 

## Getting Started
After installing NoteCuts, you a brief number of tutorial screens will be displayed. Then, you will have the option to create your first NoteCut. 

### Local vs. Remote NoteCuts
There are two types of NoteCuts, local and remote. 

**Local NoteCuts** run shortcuts on the same iOS device where the NoteCut resides. **Remote NoteCuts** run shortcuts on a different iOS device. 

It is recommended to name your NoteCuts by device. For instance;

- `Adam's iPad Pro` 
- `Mary's iPhone` 
- `Johnny's iPad touch` 

When getting started, first create a local NoteCut. Give it a name and provide it with a description. 

### Adding Shortcuts
Next, we will configure the list of shortcuts that can run from this NoteCut. If you don't specify anything, any shortcut on your iOS device will be available to run from this NoteCut. 

To restrict this, separate keywords by new lines. Any shortcut that contains the keyword can run when this NoteCut is evaluated. For instance:

```
Speak
Toggle
Remote
```

Specifying these keywords means any shortcut that contains `Speak`, `Toggle`, or `Remote` can run with this local NoteCut. A shortcut named `Photos` will not run. 

Use the ability to specify which shortcuts can run when sharing your local NoteCuts with other people. Otherwise, they will have complete access to run every shortcut on your device!

### Testing NoteCuts
After creating a NotCut, you will be presented by the Edit NoteCut Screen. Tap View Note to open the Notes app. 

> Note: If you have an iPad with Split View support, have both the Shortcuts app and Notes visible. 

In the new note, add some shortcuts to run by prefixing them with the `▶️` character. For instance:

```
▶️ Speak Random Number
```

Choose a shortcut where it will be obvious to you that it has run. 

Return to the Shortcuts app and tap Evaluate NoteCut. 

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

