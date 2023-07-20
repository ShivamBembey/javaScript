function timeOut(){
    alert("Hello")
}
setTimeout(timeOut,4000)
let b = prompt("Do you want to run settimeout? (y/n)")
if("n"==b){
    clearTimeout(a)
}