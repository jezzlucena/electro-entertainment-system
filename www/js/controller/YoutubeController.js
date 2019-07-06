var YoutubeController = {};

YoutubeController.init = function(){
	YoutubeController.ready = false;

	YoutubeController.player = new YT.Player('youtubePlayer', {
	events: {
			'onReady': YoutubeController.onPlayerReady,
			'onStateChange': YoutubeController.onPlayerStateChange,
		}
	});
};

YoutubeController.onPlayerReady = function(){
	YoutubeController.ready = true;
};

YoutubeController.onPlayerStateChange = function(){
	var state = YoutubeController.player.getPlayerState();

	//-1 – unstarted
	//0 – ended
	//1 – playing
	//2 – paused
	//3 – buffering
	//5 – video cued

	if(YoutubeController.videoTitle != YoutubeController.player.getVideoData().title){
		YoutubeController.videoTitle = YoutubeController.player.getVideoData().title;
	}

	if(state == 1){
		YoutubeController.showNowPlaying();

		if(!YoutubeController.hasPlayed){
			YoutubeController.hasPlayed = true;
			setTimeout(function(){
				$('.headerContent .play').addClass('hasPlayed');
			}, 2000);
		}
	}else if(state == 2){
		YoutubeController.hideNowPlaying();
		$('.playerBar .playPause').removeClass('playing');
	}
};

YoutubeController.playPauseVideo = function(){
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		return true;
	}

	if(YoutubeController.ready){
		var state = YoutubeController.player.getPlayerState();

		if(state == 1){
			YoutubeController.player.pauseVideo();
		}else{
			YoutubeController.player.playVideo();
		}
	}
};

YoutubeController.playVideo = function(){
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		return true;
	}
	
	$('.header, .headerContent, .playerBar .playPause').addClass('playing');

	if(YoutubeController.ready){
		YoutubeController.player.playVideo();
	}

	return false;
};

YoutubeController.prevVideo = function(){
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		return true;
	}

	if(YoutubeController.ready){
		YoutubeController.player.previousVideo();
	}

	return false;
};

YoutubeController.nextVideo = function(){
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		return true;
	}

	if(YoutubeController.ready){
		YoutubeController.player.nextVideo();
	}

	return false;
};

YoutubeController.playVideoAt = function(index){
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		return true;
	}
	
	$('.header, .headerContent, .playerBar .playPause').addClass('playing');

	if(YoutubeController.ready){
		var currentIndex = YoutubeController.player.getPlaylistIndex();

		if(index != currentIndex || YoutubeController.player.getPlayerState() != 1){
			YoutubeController.player.playVideoAt(index);
		}
	}

	return false;
};

YoutubeController.showNowPlaying = function(){
	var index = YoutubeController.player.getPlaylistIndex();

	$(".tracklist").find(".button").removeClass("nowPlaying");
	$(".tracklist").find(".button").html("Listen");

	$(".tracklist").find(".button").eq(index).html("Now Playing");
	$(".tracklist").find(".button").eq(index).addClass("nowPlaying");
};

YoutubeController.hideNowPlaying = function(){
	$(".tracklist").find(".button").removeClass("nowPlaying");
	$(".tracklist").find(".button").html("Listen");
};
