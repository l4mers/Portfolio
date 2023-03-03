function header(){
    const header = document.querySelector("#header");
    
    if(window.document.location.pathname === "/") {
        window.document.location.pathname = "/index.html"
    }
    
    header.innerHTML = `
    <nav class="max-w-3xl mx-auto w-11/12">
    <ul class="flex justify-between font-semibold text-slate-100 ">
      <li class="transition-all duration-200 hover:text-zinc-800 ${window.document.location.pathname === "/index.html" ? "text-black" : null }"><a href="/index.html">Home</a></li>
      <li class="transition-all duration-200 hover:text-zinc-800 ${window.document.location.pathname === "/portfolio.html" ? "text-black" : null }"><a href="/portfolio.html">Portfolio</a></li>
      <li class="transition-all duration-200 hover:text-zinc-800 ${window.document.location.pathname === "/contact.html" ? "text-black" : null }"><a href="/contact.html">Contact</a></li>
    </ul>
  </nav>
    `
}
export default header;