# browser-config
Configuration files for web browsers. Currently for Firefox and Chromium.
Symlink the config files with `link.sh`.

# Firefox Settings
You can configure Firefox through the user.js in your profile folder.
Profile folders are name like:<br  />
`$HOME/.mozilla/firefox/random.profile-name`.<br  />
The profile name is proceeded by a random string then a dot.
The default profile is `random.default-release`.
This is not to be confused with `random.default`
which is also created but not used? Idk why this is.
The default folder can be found automatically despite the random string with:<br  />
`variable="$(find $HOME/.mozilla/firefox/ -type d -path *.default-release)"`<br  />
(Sometimes it is named default-esr could be another permutation of default-something)<br  />
You can then copy your user.js into this folder and the settings will take effect.
It is also possible to create a new profile then change the default profile and copy user.js.
Unfortunately I have not found a way to automate this.
You can create a new profile with:<br  />
`firefox -CreateProfile profilename`<br  />
But I have not found a command to change the default profile.
Firefox command line options appear to be poorly documented.

## user.js Examples
[Github arkenfox/user.js](https://github.com/arkenfox/user.js)<br  />
[Github pyllyukko/user.js](https://github.com/pyllyukko/user.js)<br  />
[Github yokoffing/Better-Fox](https://github.com/yokoffing/Better-Fox)<br  />

# Chromium Preferences
You can configure Chromium through a preferences files that uses json syntax to set options and variables.
By default it is named `Preferences` and it's default location is listed below.

## Location of the Preferences file
The default location is of the `Preferences` file is `$HOME/.config/chromium/Default/Preferences`<br  />
With Google Chrome this would be `$HOME/.config/google-chrome/Default/Preferences`<br  />
I am unsure whether or not chromium respects the `$XDG_CONFIG_HOME` or always uses `$HOME/.config`<br  />
### MacOS
`~/Library/Application\ Support/Google/Chrome/`<br  />
### Windows
`C:\Users\<username>\AppData\Local\Google\Chrome\User Data\`<br  />

## Useful Links
### Community Forum Answers
[Very Good Answer: How can I customize the default settings when deploying Google Chrome for Business?](https://serverfault.com/questions/635202/how-can-i-customize-the-default-settings-when-deploying-google-chrome-for-busine/635203#635203)<br  />
[Where can I find a full list of Chrome's master preferences?](https://superuser.com/questions/773614/where-can-i-find-a-full-list-of-chromes-master-preferences)<br  />
[Where are Chrome/Chromium preferences stored?](https://askubuntu.com/questions/23620/where-are-chrome-chromium-preferences-stored-to-force-chrome-uniformity-in-fon)<br  />
[Where is the Chrome settings file?](https://superuser.com/questions/149032/where-is-the-chrome-settings-file)<br  />
### Official Documentation
[Documentation for Administrators](https://www.chromium.org/administrators)<br  />
[Basics of the Preferences File for Administrators](https://www.chromium.org/administrators/configuring-other-preferences)<br  />
[The Preferences File for Developers](https://www.chromium.org/developers/design-documents/preferences)<br  />
[Turning Off Auto Updates](https://www.chromium.org/administrators/turning-off-auto-updates)<br  />
