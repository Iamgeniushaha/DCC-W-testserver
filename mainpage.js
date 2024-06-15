// side scroll
//################################################################
const container = document.querySelector('.container')
const clientHeight = document.documentElement.clientHeight
let lastScrollLocation = 0 // 최근 스크롤 위치 기억하기
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

function scrollHorizontally(){
  console.log(window.pageYOffset / (scrollHeight - clientHeight))
  container.scrollLeft = window.pageYOffset / (scrollHeight - clientHeight) * (container.scrollWidth - container.clientWidth)
}
window.addEventListener('scroll', scrollHorizontally)
//############################################################3


//side bar
//###################################################################
function toggleSidebar() {
    const sidebar = document.getElementById("topSidebar");
    const main = document.querySelector(".main");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        main.style.marginRight = "0";
    } else {
        sidebar.style.width = "250px";
        main.style.marginRight = "250px";
    }
}
//#################################################################################