function openNav() {
    document.getElementById("mySidenav").style.width = "68%";
    document.getElementById("open").classList.add("hidden")
    document.getElementById("close").classList.remove("hidden")
    document.getElementById("open").classList.remove("shown")
    document.getElementById("close").classList.add("shown")
    document.getElementById("opacity").style.display = "flex";
    document.getElementById("opacity").style.opacity = "30%";
    
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("open").classList.remove("hidden")
    document.getElementById("close").classList.add("hidden")
    document.getElementById("open").classList.add("shown")
    document.getElementById("close").classList.remove("shown")
    document.getElementById("opacity").style.display = "none";
  }