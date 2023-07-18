function interval(){
    alert("Hello")
}
let a = setInterval(interval,4000)
let b = prompt("Do you want to run setinterval? (y/n)")
if("n"==b){
    clearInterval(a)
}