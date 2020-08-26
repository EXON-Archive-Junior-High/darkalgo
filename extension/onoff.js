const onOff = document.querySelector("#isDark")
const Darkbtn = document.querySelector("#DarkBtn")

onOff.innerText = loadDark()
Darkbtn.addEventListener("click", changeDark)

function changeDark(event){
    const btn = event.target;
    if (loadDark() == "Off"){
        onOff.innerText = "On"
        saveDark("On")
    }
    else if (loadDark() == "On"){
        onOff.innerText = "Off"
        saveDark("Off")
    }
}

function saveDark(coordsObj) {
    localStorage.setItem("dark", coordsObj);
}


function loadDark() {
    const loadedDark = localStorage.getItem("dark");
    if (loadedDark === null) {
        saveDark("Off")
        return "Off"
    } else {
        return loadedDark
    }
}