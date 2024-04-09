//Github Link: https://tmichows.github.io/hw6-2024/video

var video;

//Page Loading
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay=false;
	video.loop=false;
	console.log("auto play is set to " + video.autoplay)
	console.log("loop is set to " + video.loop)
});


//Play Button
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	var slider = document.querySelector("#slider");
	//console.log(slider.value)
	document.querySelector("#volume").innerText = "100%";
});

//Pause Button
document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
});

//Slow Down
document.querySelector("#slower").addEventListener("click", function(){

	video.playbackRate = video.playbackRate * .90;
	console.log("The new video speed is " + video.playbackRate)
});

//Speed Up
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 1.10;
	console.log("The new video speed is " + video.playbackRate)
});

//Skip Ahead
document.querySelector("#skip").addEventListener("click", function(){
  	console.log("The current video time is " + video.currentTime);
	skip = video.currentTime + 10;
	
	if(skip > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime = skip;
	}
});

//Mute
document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerText = "Unmute";
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerText = "Mute";
	}
});

//Volume Slider
document.querySelector("#slider").addEventListener("input", function(){
	var slider = document.querySelector("#slider");
	document.querySelector("#volume").innerText = slider.value +"%";
	video.volume = slider.value/100; 
});

//Styled
document.querySelector("#vintage").addEventListener("click", function(){
	var video_element = document.querySelector("#player1")
	video_element.classList.add("oldSchool");
});

//Original
document.querySelector("#orig").addEventListener("click", function(){
	var video_element = document.querySelector("#player1")
	video_element.classList.remove("oldSchool");
});