let slideIndex=0;
const slides = document.querySelectorAll(".slide")
const totalslides = slides.length

function showslides(){
    if (slideIndex<0){
        slideIndex = totalslides -1
    }else if(slideIndex >= totalslides){
        slideIndex = 0

    }

    slides.forEach((slide, index) => {
        if(index == slideIndex){
            slide.style.display = "block"
        }else{
            slide.style.display = "none"
        }
    })
}


function prevSlide(){
    slideIndex --
    showslides()
}

function nextSlide(){
    slideIndex ++
    showslides()
}

showslides();