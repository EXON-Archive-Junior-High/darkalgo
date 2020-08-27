const onOff = document.querySelector("#isDark")
const Darkbtn = document.querySelector("#DarkBtn")

onOff.innerText = loadDark()
Darkbtn.addEventListener("click", changeDark)

function changeDark(event){
    const btn = event.target;
    if (load("dark") == "Off"){
        onOff.innerText = "On"
        save("dark", "On")
    }
    else if (load("dark") == "On"){
        onOff.innerText = "Off"
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