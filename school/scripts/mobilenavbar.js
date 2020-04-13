if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   document.getElementById("mail").style.display = "none";
   document.getElementById("phone").style.display = "none";
   document.getElementById("emailimage").style.display = "none";
   document.getElementById("facebookimage").style.display = "none";
   document.getElementById("phoneimage").style.display = "none";
   document.getElementById("navbar").style.display = "none";
   document.getElementById("mobilenav").style.display = "block";
   document.getElementsByClassName("button-left")[0].style.display = "none";
   document.getElementsByClassName("button-right")[0].style.display = "none";
   document.getElementsByClassName("mySlides")[0].src = "images/mobile/1-mobile.jpg";
   document.getElementsByClassName("mySlides")[1].src = "images/mobile/2-mobile.jpg";
   document.getElementsByClassName("mySlides")[2].src = "images/mobile/3-mobile.jpg";
   document.getElementsByClassName("mySlides")[3].src = "images/mobile/1-mobile.jpg";
   document.getElementsByClassName("mySlides")[4].src = "images/mobile/2-mobile.jpg";
   document.getElementsByClassName("mySlides")[5].src = "images/mobile/3-mobile.jpg";
}
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 