# Your first Progressive Web App Code Lab

These are the resource files needed for the [Your first Progressive Web App](https://codelabs.developers.google.com/codelabs/your-first-pwapp/)
code lab from Google.

This is a work in progress, if you find a mistake, please [file an issue](https://github.com/googlecodelabs/your-first-pwapp/issues). Thanks!

## What you’ll learn
* How to design and construct an app using the “app shell” method
* How to make your app work offline
* How to store data for use offline later

## What you’ll need
* Chrome 52 or above, though any browser that supports service workers and `cache.addAll()` will work
* [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb), or use your own web server of choice.
* The [sample code](https://github.com/googlecodelabs/your-first-pwapp/archive/master.zip)
* A text editor
* Basic knowledge of HTML, CSS and JavaScript
* (Optional) Node is required in the last step to deploy to Firebase

#Best Practices
- Place the manifest link on all your site's pages, so it will be retrieved by Chrome right when the user first visits, no matter what page they land on.
- The short_name is preferred on Chrome and will be used if present over the name field.
- Define icon sets for different density screens. Chrome will attempt to use the icon closest to 48dp, for example, 96px on a 2x device or 144px for a 3x device.
- Remember to include an icon with a size that is sensible for a splash screen and don't forget to set the background_color.
