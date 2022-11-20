themeButton = document.getElementById("themeButton")
darkIcon = document.getElementById("darkIcon")
lightIcon = document.getElementById("lightIcon")
navButton = document.getElementById("navButton")
navBars = document.getElementById("navBars")
navX = document.getElementById("navX")

navButton.addEventListener("click", () => {
  navBars.classList.toggle("hidden")
  navX.classList.toggle("hidden")
  document.getElementById("nav-content").classList.toggle("flex")
  document.getElementById("nav-content").classList.toggle("hidden")
})

themeButton.addEventListener("click", () => {
  darkIcon.classList.toggle("hidden")
  lightIcon.classList.toggle("hidden")
  if(localStorage.getItem('color-item')){ 
    if(localStorage.getItem('color-theme') === "light"){ 
      document.documentElement.classList.add("dark")
      localStorage.setItem('color-theme', 'dark')
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem('color-theme', 'light')
    }
  }else {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
  }
})