// $( document ).ready(() => {
//     alert("11")
//     let dark = false

//     $("p").text("On")

//     let darkbtn = $("input[type='checkbox']")
//     darkbtn.click(() => {
//     if (dark) {
//         alert("Off")
//         dark = false
//         $("#isDark").text("Off")
//     }
//     else if (!dark) {
//         alert("On")
//         dark = true
//         $("#isDark").text("On")
//     }
//     })
// })

const onOff = document.querySelector("#isDark")
onOff.innerText = loadDark()

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