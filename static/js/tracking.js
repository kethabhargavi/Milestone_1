let time = 10;
setInterval(()=>{
  if(time>0){
    document.getElementById("timer").innerText = time-- + " min";
  }
},60000);