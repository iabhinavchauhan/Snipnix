
document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-btn");
  const links=document.querySelector(".nav-links");
  menu?.addEventListener("click",()=>{
    links.classList.toggle("open");
    menu.setAttribute("aria-expanded",links.classList.contains("open"));
  });

  const theme=document.querySelector("#theme-toggle");
  const saved=localStorage.getItem("snipnix-theme");
  if(saved==="light") document.body.classList.add("light");
  const updateIcon=()=>{ if(theme) theme.textContent=document.body.classList.contains("light")?"🌙":"☀️"; };
  updateIcon();
  theme?.addEventListener("click",()=>{
    document.body.classList.toggle("light");
    localStorage.setItem("snipnix-theme",document.body.classList.contains("light")?"light":"dark");
    updateIcon();
  });

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

  document.querySelectorAll("a[href]").forEach(a=>{
    if(a.getAttribute("href")==="#") a.addEventListener("click",e=>e.preventDefault());
  });
});
