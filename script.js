
var settingsmenu = document.querySelector(".settings-menu");
var darkBtn =  document.getElementById("dark-btn")

function settingsMenuToggle(){
  // this is for settings ment open
  settingsmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function(){
  // this is for activation of dark btn
  darkBtn.classList.toggle("dark-btn-on");
  // this is for dark theme activation
  document.body.classList.toggle("dark-theme");

  if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme","dark");
  }
  else{
    localStorage.setItem("theme","light");
  }
}

// to stop the change in dark theme when we refreash the page we use the concept of local storage
if(localStorage.getItem("theme") == "light"){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
}
else{
  localStorage.setItem("theme","light");

}
// localStorage.setItem("theme","light");
// localStorage.getItem("theme");
