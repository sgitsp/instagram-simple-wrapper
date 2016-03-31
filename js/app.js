$(function() {

	//Set up instafeed
	var feed = new Instafeed({
		target: 'instafeed',
		get: 'user',
		userId: 577210186,
		accessToken: '577210186.8046de1.b57e8fd1fcbf4ee3a8d95bde49b5f151',
		useHttp: true,
		links: true,
		limit: 16,
		sortBy: 'most-recent',
		resolution: 'standard_resolution',
		template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}"></a><div class="likes">❤{{likes}}</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
	});
	feed.run();
});