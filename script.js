let countDate= new Date('jan 1, 2024 00:00:00:00').getTime()

function countdown(){
     let now = new Date().getTime()
         gap = countDate - now;

         let seconds = 1000;
         let minutes = seconds * 60;
         let hrs  = minutes * 60;
         let days= hrs * 24;

         let d = Math.floor(gap / (days));
         let h = Math.floor((gap %(days)) /(hrs));
         let m = Math.floor((gap % (hrs))/(minutes));
         let s = Math.floor((gap % (minutes))/(seconds));
         
         document.getElementById('days').innerText= d;
         document.getElementById('hrs').innerText= h;
         document.getElementById('minutes').innerText= m;
         document.getElementById('seconds').innerText= s;   
}
setInterval(function(){
     countdown();
},1000)
