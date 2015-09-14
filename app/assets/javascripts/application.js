//= require axios/dist/axios
//= require cable
//= require_self
//= require app

window.App = {};

var protocol = document.getElementsByName('protocol')[0].content;
var host = document.getElementsByName('host')[0].content;
var port = document.getElementsByName('port')[0].content;
if (port && port != 80) {
    window.App.cable = Cable.createConsumer("ws://"+host+":"+port);
} else {
    window.App.cable = Cable.createConsumer("ws://"+host);
}
