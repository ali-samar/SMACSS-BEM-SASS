"use strict";
$(function(){
/* Initialisation de senna */
var app = new senna.App();
    app.setBasePath('/');
    app.addSurfaces(['content', 'bandeau']);
    app.addRoutes(new senna.Route(/\w+\.html/, senna.HtmlScreen));
    senna.Screen.prototype.activate = function() {
		$.getJSON('https://smp.ovh/ppl.json', function(data){
			var template = $("#template").html();
			var info = Mustache.to_html(template, {users:data});
			$('.trombibi').html(info);
		});
    };

/* Slider */
setInterval(function() {
	$('#liste-images').animate({marginLeft : -1000}, 1000, function(){
		$(this).find("li:last").after($(this).find("li:first"));
		$(this).css({marginLeft : 0});
	});
}, 5000);
});
