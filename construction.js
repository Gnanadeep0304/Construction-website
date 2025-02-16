window.onload= function(){
  let counter=  document.getElementById('scrollnum1' , 'scrollnum2');
    let start=0;
    let duration=2000;
    let target =485;
   
    let count=setInterval(function(){
        start+=10;
        if(start>=target)
        {
            start=target;
            clearInterval(count);
        }
        counter.textContent=Math.floor(start);
    },50)

}; 





