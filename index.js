let count=0
let countEl=document.getElementById("count")
let saveEl=document.getElementById("count-save")

function inc() {
    count+=1
    countEl.innerHTML=count
}
function save(){
    saveEl.innerText+=count+"-"
    count=0
    countEl.innerText=count
}