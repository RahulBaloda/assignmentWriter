let doit=document.getElementById("selectHandwriting");
doit.addEventListener('change',()=>
{
    let handwriting = document.getElementById('selectHandwriting').value;
    console.log(handwriting);
     if(handwriting == "HMA") {
         document.getElementById('page').style.fontFamily ="Homemade Apple"
     }
     else if (handwriting == "CA") {
         document.getElementById('page').style.fontFamily = "Caveat"
}
else{
    document.getElementById('page').style.fontFamily = "";
}
});