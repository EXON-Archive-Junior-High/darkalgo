const onOff = document.querySelector("#isDark")
const Darkbtn = document.querySelector("#DarkBtn")

if (load("dark") == "On") Darkbtn.checked = true
else Darkbtn.checked = false

onOff.innerText = load("dark")
Darkbtn.addEventListener("click", changeDark)

function changeDark(event){
    if (load("dark") == "Off"){
        onOff.innerText = "On"
        Darkbtn.checked = true
        save("dark", "On")
    }
    else if (load("dark") == "On"){
        onOff.innerText = "Off"
        Darkbtn.checked = false
        save("dark", "Off")
    }
}

function save(item, coordsObj) {
    localStorage.setItem(item, coordsObj);
}


function load(item) {
    const loadedDark = localStorage.getItem(item);
    if (loadedDark === null) {
        save("dark", "Off")
        return "Off"
    } else {
        return loadedDark
    }
}