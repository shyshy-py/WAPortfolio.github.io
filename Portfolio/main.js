function animate({ timing, draw, duration }) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction va de 0 a 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calcular el estado actual de la animación
    let progress = timing(timeFraction);

    draw(progress); // dibujar

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}



function animateText(textArea) {
  document.getElementById("textExample").innerHTML = "Bienvenido <3";
  $( '.name' ).addClass("animate1 ")
  setTimeout(function () {
    window.location.href = "http://127.0.0.1:5500/me.html";
  }, 5000);
  
 

  let text = textArea.value;
  let to = text.length,
    from = 0;

  animate({
    duration: 2000,
    timing: bounce,
    draw: function (progress) {
      let result = (to - from) * progress + from;
      textArea.value = text.slice(0, Math.ceil(result));
      
    },
    setTimeout() {},
    
    
    
  })
  
  
  
}

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return (
        -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      );
    }
  }
}

function hiden() {
  var r = document.getElementById("m");
  r.removeAttribute("hidden");

  $( '#btnHide' ).addClass("slideOut ")
  $( '#btnHide' ).hide(2000)
 

  

}

function hide(){
  
  
  $( '.btn-neon' ).addClass("btn-neon-click");
  $( '.btn-neon' ).removeClass("btn-neon");
  $( '.btn-neon-click' ).text('Encender');

setTimeout(() =>{
  hiden()
  },2000);
}