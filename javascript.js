let copy = document.querySelector(".Copied")
let Discord = document.querySelector(".Discord")
let submenu =  document.querySelector(".submenu")
let menu = document.querySelector(".menu")
let db = true
Discord.onclick = function(){
    copy.style.cssText = "display:block;"
    navigator.clipboard.writeText("`Marwan.#7551")
    setTimeout( function(){copy.style.cssText = ""} , 1000)
}
menu.onclick = function(){
    if(db == true){
        submenu.style.cssText = "display:flex;"
        db = false
    }
    else{
        submenu.style.cssText = ""
        db = true
    }
}