

// About me

let name = ['Ujjwal Dheke.', 'a Junior Web Developer'];
let count=0;
let index=0;
let currentText='';
let letter='';
(function type(){
    if(count == name.length){
        count=0;
    }
    currentText= name[count];
    letter = currentText.slice(0, ++index);
     document.getElementById('type').textContent = letter;
     if(letter.length === currentText.length){
         count++;
         index=0;
     }
     setTimeout(type, 600);
}());


// services
const text = document.querySelector(".section__title");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0; i<splitText.length;i++){
    text.innerHTML +=`<span>${splitText[i]}</span>`;
}




let char = 0;
let timer = setInterval(onTick, 60);


function onTick(){
    const span = text.querySelectorAll('span')[char];
    
    span.classList.add("fade");
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}


function complete(){
    clearInterval(timer);
    timer = null;
}



//project
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton =document.querySelector('.carousel__button--right');
const prevButton =document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


//arrange the slides next to one another

const setSlidePosition = (slide, index)=>{
    slide.style.left = slideWidth * index + 'px';
}
 slides.forEach(setSlidePosition);



const moveToSlide = (track, currentSlide, targetSlide) => {
    const amountToMove = targetSlide.style.left;
     track.style.transform = 'translateX(-'+ amountToMove  + ')';
    currentSlide.classList.remove('current-slide');
   targetSlide.classList.add('current-slide');
}
const updateDOts = (currentDot, targetDot) => {
      currentDot.classList.remove('current-slide');
   targetDot.classList.add('current-slide');

}
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) =>{
    if(targetIndex === 0){
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');

        }
        else if(targetIndex === slides.length - 1){
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        }
        else{
            prevButton.classList.remove('is-hidden')
            nextButton.classList.remove('is-hidden');
        }
}

// left slide
prevButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
     const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling; 
    const prevIndex = slides.findIndex(slide => slide ===prevSlide);
       //move to next slide
  moveToSlide(track, currentSlide, prevSlide);
   updateDOts(currentDot, prevDot);
   hideShowArrows(slides, prevButton, nextButton, prevIndex);
})
//right slide
nextButton.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling; 
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    //move to next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDOts(currentDot, nextDot);
   hideShowArrows(slides, prevButton, nextButton, nextIndex);
   e.preventDefault();

});
// indicators
    dotsNav.addEventListener('click', e =>{
        //indicator clicked?
        const targetDot = e.target.closest('button');
        if(!targetDot) return;
        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot ===targetDot);
        const targetSlide = slides[targetIndex];
        moveToSlide(track, currentSlide, targetSlide);
         updateDOts(currentDot, targetDot);
         hideShowArrows(slides, prevButton, nextButton, targetIndex);
        })
// header
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')



navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	})
})



