import $$ from 'dom7';
import $ from 'jquery';
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

// // help page
// $$('.open-help').on('click', function(){
//   console.log(app);
//   app.views.main.router.navigate('/help/', {reloadCurrent: true});
// });

//log out
$$('.reload').on('click', function () {
  window.location.reload();
});

// FlashcardApp
$$(document).on('page:init', '.page[data-name="flashcard"]', function () {
  loadDB();
})

var colorArray=["#019875","#1E8BC3","#D91E18","#D35400","#8E44AD","#C0392B"];
var cardState;
var currentQuestion=0;
var qbank=new Array;


function loadDB(){
 $.getJSON("./static/json/frenchFood.json", function(data) {
  for(var i=0;i<data.questionlist.length;i++){
   qbank[i]=[];
   qbank[i][0]=data.questionlist[i].cardfront;
   qbank[i][1]=data.questionlist[i].cardback;
  }//for
  beginActivity();
 })//gtjson
}//loadDB

function beginActivity(){
 cardState=0;
 var color1=colorArray[Math.floor(Math.random()*colorArray.length)];

 $("#card-area").empty();
 $("#card-area").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
 $("#card-area").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>');
 $("#card1").css("background-color",color1);
 $("#card2").css("background-color","#34495E");
 $("#card2").css("top","400px");

 $("#card-area").on("click",function(){
  if(cardState!=1){
   cardState=1;
   //togglePosition();
   $("#card1").animate({top: "-=200"}, 150, function() {cardState=0;togglePosition();});
   $("#card2").animate({top: "-=200"}, 150, function() {togglePosition2();});
  }//if
 });//click function
 
 currentQuestion++;

 $("#button-area").empty();
 $("#button-area").append('<p class="row"><button id="skip-button" class="col button button-fill color-red">Study Again</button><button id="next-button" class="col button button-fill color-green">Got it</button></p>');

 $$("#next-button").on("click", function(){
  if(currentQuestion<qbank.length){beginActivity();}
  else{displayFinalMessage();}
 });//click function
}//beginactivity

function togglePosition(){
 if($("#card1").position().top==-200){$("#card1").css("top","400px");};
}//toggle

function togglePosition2(){
 if($("#card2").position().top==-200){$("#card2").css("top","400px");};
}//toggle2

function displayFinalMessage(){
 $("#button-area").empty();
 $("#card-area").empty();
 $("#card-area").append('<div id="finalMessage">You have finished the activity.</div>');
}//final message

