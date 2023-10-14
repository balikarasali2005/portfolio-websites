// toggle  icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// scroll section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =()=>{
sections.forEach(sec =>{
let top = window.scrollY;
let offset = sec.offsetTop - 100;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');

if(top >=offset && top < offset +height){
    // active navbar link
    navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id + ']').classList.add('active');

    });
    // active sections for animation scroll 
sec.classList.add('show-animate');
}
else{
    sec.classList.remove('show-animate'); 
}
});
    // sticky header
    let header =document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100);
}



// calling function for button
// for github and linkedin
function openLinkedInProfile(){
window.location.href="https://www.linkedin.com/in/balika-rasali-23364728a/";
          }
function opengithubProfile(){
window.location.href="https://github.com/balikarasali2005";
          }
 //for github link on project
 function githubLinkProject1(){
    window.location.href="https://github.com/balikarasali2005/hw2/tree/master/assignment5";
  }  
  function opengithubProfile(){
    window.location.href="https://github.com/balikarasali2005";
          }
          function githubLinkProject1(){
            window.location.href="https://github.com/balikarasali2005/hw2/tree/master/assignment5";
          }
          function githubLinkProject2(){
            window.location.href="https://github.com/bzalikarasali2005/hw/tree/main/august-14";
          }
          function githubLinkProject3(){
            window.location.href="https://github.com/balikarasali2005/hw/tree/main/openweatherapi-project";
          }
          function githubLinkProject4(){
            window.location.href="https://github.com/balikarasali2005/hw2/tree/master/assignment3";
          }
          function githubLinkProject5(){
            window.location.href="https://github.com/balikarasali2005/hw2/tree/master/assignment4";
          }
          function githubLinkProject6(){
            window.location.href="https://github.com/balikarasali2005/hw2/tree/master/assignment7";
          }
          function githubLinkProject7(){
            window.location.href="https://github.com/balikarasali2005/hw02/tree/master/assignment10";
          }
          function githubLinkProject8(){
            window.location.href="https://github.com/balikarasali2005/hw02/tree/master/assignment6";
          }

        //   netlify link calling for liveDemo
        function netlifyLinkProject1(){
        window.location.href="https://kaleidoscopic-heliotrope-406164.netlify.app";
        }
        function netlifyLinkProject2(){
        window.location.href="https://vocal-jelly-883feb.netlify.app";
        }
        function netlifyLinkProject3(){
        window.location.href="https://frabjous-clafoutis-75a5a8.netlify.app";
        }
        function netlifyLinkProject4(){
        window.location.href="https://page-of-landing.netlify.app";
        }
        function netlifyLinkProject5(){
        window.location.href="https://snazzy-lollipop-6b217e.netlify.app";
        }
        function netlifyLinkProject6(){
        window.location.href="https://portfoliodesign-a283ef.netlify.app";
        }
        function netlifyLinkProject7(){
        window.location.href="https://incomparable-pastelito-360a8c.netlify.app";
        }
        function netlifyLinkProject8(){
        window.location.href="https://magenta-dodol-6e3411.netlify.app";
        }


