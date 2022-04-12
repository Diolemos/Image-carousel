const btns = document.querySelectorAll('.carousel-btn')
const images = document.querySelectorAll('.slide')
//selects the current active image's data number
let currentImageIndex = document.querySelector('.active').dataset.imageIndex


btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        
        if(e.target.id == 'prev'){
            if(currentImageIndex==1){return}
            //Selects the current active img and removes active
            document.querySelector(`li[data-image-index="${currentImageIndex}"]`).classList.toggle('active');
            //decrements counter by one
            currentImageIndex --  
            //selects the one image under the previous and toggles
            //the active class
            document.querySelector(`li[data-image-index="${currentImageIndex}"]`).classList.toggle('active');
            return
        }else{
            if(currentImageIndex == images.length){return}
            //Selects the current active img and removes active
            document.querySelector(`li[data-image-index="${currentImageIndex}"]`).classList.toggle('active');
            //increments counter by one
            currentImageIndex ++  
            //selects the one image above the previous and toggles
            //the active class
            document.querySelector(`li[data-image-index="${currentImageIndex}"]`).classList.toggle('active');
        }
    })
})

