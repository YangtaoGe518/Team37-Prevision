# EzTalk
This is the prevision coursework from team-37, by Yangtao Ge([YangtaoGe518](https://github.com/YangtaoGe518)), Ruairidh Williamson([RuairidhWilliamson](https://github.com/RuairidhWilliamson)), Afiq Bin Samsudin([Afiqsamsudin98](https://github.com/Afiqsamsudin98)).

EzTalk is a mobile application that will help refugees to learn a new language suitable for integration in their new communities. There are two major features: the app will include materials to help with learning new languages and cultures; it will also allow users to build common sentences in an easy and intuitive way to be translated. The app contains different media for learning including flashcards, videos and documents. 

The flashcards allow users to view example sentences or phrase with an image to help remember it and an audio clip to help pronunciation. It could track user progress to give the user a sense of accomplishment and an incentive to learn more.  Words could be grouped by category to help learning specific topics. Educational multimedia about social, economic and culture integrate can be accessed through the app and link with the related vocabulary to strengthen the understanding of those words. Lastly, there are social networking capabilities for connecting people in similar situations. 


## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "cwd": "/Users/sweetie/UCL/Year2/Coursework/Comp0016-Prevision",
  "type": [
    "pwa"
  ],
  "name": "EzTalk",
  "framework": "core",
  "template": "tabs",
  "bundler": "webpack",
  "cssPreProcessor": "less",
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkTheme": true,
    "iconFonts": true,
    "fillBars": false
  },
  "customBuild": false,
  "webpack": {
    "developmentSourceMap": true,
    "productionSourceMap": true,
    "hashAssets": false,
    "preserveAssetsPaths": false,
    "inlineAssets": true
  }
}
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build-dev` - build web app using development mode (faster build without minification and optimization)
* 🔧 `build-prod` - build web app for production

## WebPack

There is a webpack bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Webpack config located in `build/webpack.config.js`.

Webpack has specific way of handling static assets (CSS files, images, audios). You can learn more about correct way of doing things on [official webpack documentation](https://webpack.js.org/guides/asset-management/).

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.
## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 generate-assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 generate-assets --ui
```

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)


* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi
