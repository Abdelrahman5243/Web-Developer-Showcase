const showlinks = document.querySelector(".links");
showlinks.onclick = ()=>{
  showlinks.classList.toggle("active");
}
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });
