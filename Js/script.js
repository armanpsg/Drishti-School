function Show_Menu(){
	ulLinkContainer.style.transition = "0.75s";
	ulLinkContainer.style.left = "0%";
}
function Close_Menu(){
	ulLinkContainer.style.transition = "0.75s";
	ulLinkContainer.style.left = "100%";
}

var showMenuButton = document.getElementById("show-menu-id");
var ulLinkContainer = document.getElementById("header-links-id");
showMenuButton.addEventListener("click",Show_Menu)

var closeMenuButton = document.getElementById("close-menu");
closeMenuButton.addEventListener("click",Close_Menu)
