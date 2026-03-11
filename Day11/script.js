function show(){
    document.getElementById("add").style.display="none";
    document.getElementById("count").style.display="block";

}
let amt = document.getElementById("amt").innerHTML;
function minus(){
   let n= document.getElementById("num").innerHTML
   document.getElementById("num").innerHTML=n-1
}

function plus(){
    let n= parseInt( document.getElementById("num").innerHTML)
    document.getElementById("amt").innerHTML=amt*n;
    document.getElementById("num").innerHTML=n+1    


}