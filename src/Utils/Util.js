function Utils(time){
    const hh =  ("0"+Math.floor((time / 60000) %60)).slice(-2)+":";  
    const mm = ("0"+Math.floor((time / 1000) %60)).slice(-2)+":"; 
    const ss = ("0"+(time / 10) %100).slice(-2);
 return [hh,mm,ss];
 }

 
 export default Utils;