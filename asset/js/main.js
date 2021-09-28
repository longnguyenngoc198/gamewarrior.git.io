const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slideRun(counter);

let timer = setInterval(autoSlide, 15000);
function autoSlide() {
	counter += 1;
	slideRun(counter);
}
function plusSlides(n) {
	counter += n;
	slideRun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slideRun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 10000);
}

function slideRun(n) {
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}