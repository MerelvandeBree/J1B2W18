var menuKnop = document.getElementById("icon");
var menuTekst = document.getElementById("contact");
var open = false;


menuKnop.onclick = function naam() {
	if (open == false){
		menuTekst.style.visibility = "visible";
		menuTekst.style.display = "inline-block";
		menuTekst.style.height = "20em";
		menuTekst.style.backgroundColor = "red";
		open = true;
	}
	else if (open == true) {
		menuTekst.style.visibility = "hidden";
		open = false;
	}
}