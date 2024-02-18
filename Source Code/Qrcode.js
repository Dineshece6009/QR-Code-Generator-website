var qrtxt=document.getElementById("qrtxt")
var qrimg=document.getElementById("qrimg")
var imgBox=document.getElementById("imgBox")
var fullbox=document.querySelector(".fullbox")
var body=document.getElementById("body")
function qrGen(){
    
    if(qrtxt.value.length>0){
     qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtxt.value
     imgBox.classList.add("show-img")
      fullbox.style.height="520px";
      fullbox.style.backgroundColor="#ddd"
      body.style.backgroundColor="#fff"
    }else{
        qrtxt.classList.add("error");
        setTimeout(()=>{
            qrtxt.classList.remove("error")
        },1000);
    }
    

}