let slideIndex = 0;
showSlides():

function showSlides(){
	let i;
	let slides = document.getElementByClassName("slides");
	for (i = 0; i < slides.lenght; i++){
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slideIndex){
		slideIndex = 1;
	}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 5000);
}