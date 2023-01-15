function hiden() {
  let r = document.getElementById("m");
  r.removeAttribute("hidden");

  $( '#btnHide' ).addClass("slideOut ")
  $( '#btnHide' ).hide(2000)
  $( '#sectp' ).hide(2000)

 

  

}

function auto (){

  if (screen.width<550)
  $('#m').addClass("enjoy"),
  $(".video").attr("src","/assets/images/Fondo7.mp4"),
  $('h1').addClass("fl");
  $('text').css("color","white");
  


}

function loadTrans(){
  let r = document.getElementById("m");
  r.addAttribute("hidden");


}

function hide(){
  $( '.btn-neon' ).addClass("btn-neon-click");
  $( '.btn-neon' ).removeClass("btn-neon");
  $( '.btn-neon-click' ).text('<33');

setTimeout(() =>{
  hiden()
  },3000);
}