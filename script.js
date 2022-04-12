const btns = document.querySelectorAll('.carousel-btn')
const images = document.querySelectorAll('.slide')
//selects the current active image's data number
let currentImageIndex = document.querySelector('.active').dataset.imageIndex


btns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        
        if(e.target.id == 'prev'){
            if(currentImageIndex==1){return}
            
        }else{

        }
    })
})

