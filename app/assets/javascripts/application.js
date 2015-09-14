//= require axios/dist/axios
//= require cable
//= require_self
//= require app

window.App = {};

var host = document.getElementsByName('host')[0].content;
window.App.cable = Cable.createConsumer("ws://"+host+":28080");
