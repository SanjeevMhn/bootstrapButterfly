
//for handelling button states and image filtering
const optionSelect = document.querySelectorAll(".opt");
const imageCol = document.querySelectorAll(".col-4");

optionSelect.forEach((op,index)=>{

	op.addEventListener("click",function(){
		removeSelection();
		op.classList.add("text-primary");
		let className;
		switch (index) {
			case 0:
				className = " ";
				break;
			case 1:
				className = "app";
				break;
			case 2:
				className = "cards";
				break;
			case 3:
				className = "web";
				break;
		}

		if(className != " "){
			imageCol.forEach((img)=>{
				if(img.classList.contains(className)){
					img.style.display = "block";
				}else{
					img.style.display = "none";
				}
			})
		}else{
			imageCol.forEach((img)=>{
				img.style.display = "block";
			});
		}
 	})
})

function removeSelection(){
	optionSelect.forEach((opt)=>{
		opt.classList.remove("text-primary");
	})
}

//for lightbox modal gallery of gallery section
const modal = document.getElementById("lightboxModal");
const slides = document.querySelectorAll(".slides");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const closeBtn = document.querySelector(".close-button");
const galleryImages = document.querySelectorAll(".galleryImgs");

galleryImages.forEach((img,index)=>{
	img.addEventListener("click",function(){
		modal.style.display = "block";
		displaySlide(slideIndex = index + 1);
	})
})

closeBtn.addEventListener("click", function(){
	modal.style.display = "none";
});

nextBtn.addEventListener("click", function(){
	nextSlide(1)
})

prevBtn.addEventListener("click", function(){
	nextSlide(-1)
})

function nextSlide(n){
	displaySlide(slideIndex += n)
}

var slideIndex = 1;

function displaySlide(n){

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	slides.forEach((slide,index)=>{
		slide.style.display = "none";
	});

	slides[slideIndex - 1].style.display = "block";

}

//for hightlighting navigation links when the user scrolls to that particular section//

const navBar = document.querySelector(".main-nav");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const portfolio = document.querySelector(".portfolio");
const team = document.querySelector(".teams");
const contact = document.querySelector(".contact");
const navLinks = document.querySelectorAll(".nav-link");
const backToTop = document.querySelector(".scrollTop-btn");

let items = [about,services,portfolio,team,contact]

window.addEventListener("scroll",()=>{

	if(window.scrollY > 0){
		backToTop.style.display = "block"	
	}else{
		backToTop.style.display = "none";
	}
	items.forEach((it)=>{
		if((window.scrollY+navBar.offsetHeight) >= ( it.offsetTop)){
			
			if(it.classList.contains('about')){
				navLinks.forEach((nav)=>{
					nav.classList.remove('text-primary');
					nav.classList.add('text-dark')
				})
				navLinks[1].classList.remove('text-dark');
				navLinks[1].classList.add('text-primary');
			}else if(it.classList.contains('services')){
				navLinks.forEach((nav)=>{
					nav.classList.remove('text-primary');
					nav.classList.add('text-dark')
				})
				navLinks[2].classList.remove('text-dark');
				navLinks[2].classList.add('text-primary');
			}else if(it.classList.contains('portfolio')){
				navLinks.forEach((nav)=>{
					nav.classList.remove('text-primary');
					nav.classList.add('text-dark')
				})
				navLinks[3].classList.remove('text-dark');
				navLinks[3].classList.add('text-primary');
			}else if(it.classList.contains('teams')){
				navLinks.forEach((nav)=>{
					nav.classList.remove('text-primary');
					nav.classList.add('text-dark')
				})
				navLinks[4].classList.remove('text-dark');
				navLinks[4].classList.add('text-primary');
			}else if(it.classList.contains('contact')){
				navLinks.forEach((nav)=>{
					nav.classList.remove('text-primary');
					nav.classList.add('text-dark')
				})
				navLinks[6].classList.remove('text-dark');
				navLinks[6].classList.add('text-primary');
			}else{
				navLinks.forEach((nav)=>{
					nav.classList.remove('text-primary');
					nav.classList.add('text-dark')
				})
				navLinks[0].classList.remove('text-dark');
				navLinks[0].classList.add('text-primary');
			}
		}

		if(window.scrollY == 0){
			navLinks.forEach((nav)=>{
				nav.classList.remove('text-primary');
				nav.classList.add('text-dark')
			})
			navLinks[0].classList.remove('text-dark');
			navLinks[0].classList.add('text-primary');
		}
		//console.log(it.offsetTop);
	})

})
