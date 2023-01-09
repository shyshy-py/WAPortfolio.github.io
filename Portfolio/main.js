function hiden() {
  var r = document.getElementById("m");
  r.removeAttribute("hidden");

  $( '#btnHide' ).addClass("slideOut ")
  $( '#btnHide' ).hide(2000)
  $( '#sectp' ).hide(2000)

 

  

}

function hide(){
  
  
  $( '.btn-neon' ).addClass("btn-neon-click");
  $( '.btn-neon' ).removeClass("btn-neon");
  $( '.btn-neon-click' ).text('Encender');

setTimeout(() =>{
  hiden()
  },2000);
}