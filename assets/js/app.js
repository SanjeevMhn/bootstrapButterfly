
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

//for lightbox modal gallery of gallery section//
//TODO: Please implement a better way of doing this 
const modal = document.getElementById("lightboxModal");
const modal2 = document.getElementById("lightboxModal-2");
const modalImages  = document.querySelector(".modal-images");
const modalImagesPortfolio  = document.querySelector(".modal-images-portfolio");
const slides = document.querySelectorAll(".slides");
const slides2 = document.querySelectorAll(".slides2");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn2 = document.querySelector(".next-btn2");
const prevBtn2 = document.querySelector(".prev-btn2");
const closeBtn = document.querySelector(".close-button");
const closeBtn2 = document.querySelector(".close-button-2");
const galleryImages = document.querySelectorAll(".galleryImgs");
const portfolioImages = document.querySelectorAll(".modalView");


galleryImages.forEach((img,index)=>{
	img.addEventListener("click",function(){
		modal.style.display = "block";
		modalImages.style.display = "block";
		displaySlide(slides,slideIndex = index + 1);
	})
})

portfolioImages.forEach((img,index)=>{
	img.addEventListener("click",function(){
		modal2.style.display = "block";
		modalImagesPortfolio.style.display = "block";
		displaySlide(slides2,slideIndex = index + 1);
	})
})

closeBtn.addEventListener("click", function(){
	modal.style.display = "none";
});

closeBtn2.addEventListener("click", function(){
	modal2.style.display = "none";
});

nextBtn.addEventListener("click", function(){
	nextSlide(slides,1)
})

prevBtn.addEventListener("click", function(){
	nextSlide(slides,-1)
})

nextBtn2.addEventListener("click", function(){
	nextSlide(slides2,1)
})

prevBtn2.addEventListener("click", function(){
	nextSlide(slides2,-1)
})

function nextSlide(sli,n){
	displaySlide(sli,slideIndex += n)
}

var slideIndex = 1;

function displaySlide(sli,n){

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	sli.forEach((slide,index)=>{
		slide.style.display = "none";
	});

	sli[slideIndex - 1].style.display = "block";

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
		backToTop.style.display = "flex"	
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
