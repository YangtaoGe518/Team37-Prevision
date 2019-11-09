import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

// Import Routes
import routes from './routes.js';

import categories from './categories';

var app = new Framework7({
  root: '#app', // App root element

  name: 'EzTalk', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      categories,
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    }
  },
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});

// Login Screen Dem
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

//side panels
$$('.open-prompt').on('click', function () {
  app.dialog.prompt('Enter your new user name (demo only)', function (name) {
    app.dialog.confirm('Are you sure that your name is ' + name + '?', function (name) {
      app.dialog.alert('Successfully Changing Name');
    });
  });
});

$$('.open-vertical-mother').on('click', function () {
  app.dialog.create({
    title: 'Mother Language',
    text: 'Select your mother language(demo only)',
    buttons: [
      {
        text: 'English',
      },
      {
        text: 'French',
      },
      {
        text: 'Chinese',
      },
    ],
    verticalButtons: true,
  }).open();
});

$$('.open-vertical-target').on('click', function () {
  app.dialog.create({
    title: 'Target Language',
    text: 'Select your mother language(demo only)',
    buttons: [
      {
        text: 'English',
      },
      {
        text: 'French',
      },
      {
        text: 'Chinese',
      },
    ],
    verticalButtons: true,
  }).open();
});

// help page
$$('.open-help').on('click', function(){
  
});

//log out
$$('.reload').on('click', function () {
  window.location.reload();
});
