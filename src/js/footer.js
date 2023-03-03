function footer(){
    const footer = document.querySelector("#footer");
    
    
    footer.innerHTML = `
    <div class="flex flex-col text-lg md:text-xl text-center ">
      <p class="">Copyright &copy; </p>
      <p>Gustav Henriksson</p>
      <p>gustav@henrikssons.org</p>
     </div>
    `
}
export default footer;