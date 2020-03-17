var slide = document.querySelector(".slide");
window.addEventListener("scroll", function () {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	     slide.style.top = "-60px";
	  } else {
		 slide.style.top = "70px";
	  }
});
var button = document.getElementById("scroll");
window.addEventListener("scroll", function () {
	if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
		button.style.opacity = 1;
	} else {
	    button.style.opacity = 0;	
	}
});
button.addEventListener("click", function () {
	window.scrollTo({
	   "top": 0,
	   "behavior": "smooth"
	});
});


