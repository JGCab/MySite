const picButtons = document.getElementsByClassName("picBtn")
const btnlabels = document.getElementsByClassName("label")
const AMExitBtn = document.getElementsByClassName("aboutMeExit")
const AMBox = document.getElementById("aboutMeBox")
const AMBoxBtn = document.getElementById("aboutMeExit")
const AMLabel = document.getElementById("aboutMe")


let other
let titlePageLeft
let titlePageRight
for (i=0; i<picButtons.length;i++){
	console.log(i);
	other = Math.abs(i-1)
	if (picButtons[i].id == "titlePageRight"){
		console.log(picButtons[i].id);
		titlePageRight = picButtons[i]
		picButtons[i].addEventListener("mousedown", () =>{
			console.log(other)
			picButtons[other].classList.add("hidden")
			AMLabel.classList.add("hidden")
			AMBox.classList.remove("hidden")
		}
		)}
	else{
		picButtons[i].addEventListener("mousedown", () =>{
			window.open(window.location.href + "showcase", "_self");
		})
	}
}

AMBoxBtn.addEventListener("mousedown", () =>{
	document.getElementById("titlePageLeft").classList.remove("hidden")
	AMLabel.classList.remove("hidden")
	AMBox.classList.add("hidden")
})