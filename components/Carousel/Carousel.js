class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.img = carousel;
        console.log(this.img)
    
        this.rightBtn = document.querySelector('.right-button')
        this.leftBtn = document.querySelector('.left-button')
        
         this.leftBtn.addEventListener('click', () => this.left());
         //this.rightBtn.addEventListener('click', () => this.right());
      }
    
      left(img){
        this.img = img;
        for(i=0; i < img.length; i++){
            this.img[i].style.display = 'none';
            }
        
        this.tabElement.classList.add('active-tab');
      
        this.cards.forEach(card => card.selectCard());
      }
    }

let carousel = document.querySelector('.carousel');
new Carousel(carousel);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
