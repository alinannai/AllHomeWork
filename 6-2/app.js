let h1 = document.querySelector('h1');
 function enter() {
    this.style.color = 'purple'
    this.style.backgroundColor = 'pink'
    this.style.textAlign = 'center'
    this.style.fontSize = '50px'
    this.style.fontFamily = 'Fantasy'
    this.style.textDecoration = 'underline'

 }

 h1.addEventListener('mouseenter',enter);
 h1.addEventListener('mouseleave', function(){
    this.style.color = 'black'
    this.style.backgroundColor = 'white'
    this.style.textAlign = 'left'
    this.style.fontSize = '32px'
    this.style.fontFamily = 'normal'
    this.style.textDecoration = 'none'
 });