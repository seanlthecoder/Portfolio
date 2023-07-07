

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");


// function called "opentab" that switches between tabs on a webpage. It loops through all elements with class names "tab-links" and "tab-contents", removes the "active-link" and "active-tab" classes from them, then adds the "active-link" class to the clicked tab link and the "active-tab" class to the corresponding tab content element......  This is atest

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu(){
  sidemenu.style.right = "0";


}

function closemenu(){
  sidemenu.style.right = "-200px";

}
