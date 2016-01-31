"use strict";
$(function(){
/* Initialisation de senna */
var app = new senna.App();
    app.setBasePath('/');
    app.addSurfaces(['content']);
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

/* Twitter
getTwitters('tweet', {
	id: 'simplonMIP',
	count: 5,
	enableLinks: true,
	ignoreReplies: true,
	clearContents: true,
	template: '%text% <a href="http://twitter.com/%user_screen_name%/statuses/%id%/">%time%</a>'
});
$.ajax({
	url: 'https://api.twitter.com/1.1/search/tweets.json?q=from%3AsimplonMIP&result_type=popular',
	type: 'GET',
	dataType: 'json',
	success: function(json){
		console.log(json);
	},
	error: function(){console.log('erreur dans la requête twitter')}
});*/

});
