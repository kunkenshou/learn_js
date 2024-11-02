
addEventListener("DOMContentLoaded", (event) => {

  let nIntervId = setInterval(time, 600);
  
  function time(){
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const Seconds = today.getSeconds();
  
  let str_hours = hours.toString();
  let str_minutes = minutes.toString();
  let str_seconds = Seconds.toString();
  
  let time_now = [
    str_hours,
    str_minutes,
    str_seconds,
  ];

  for (let i = 0; i < time_now.length; i++) {
    
    if(time_now[i].length === 1){
      time_now[i] = `0` + time_now[i];
    } else {
      time_now[i] = time_now[i];
    }
    
  }

  const time = document.getElementById("time");
  time.innerHTML = `${time_now[0]}時${time_now[1]}分${time_now[2]}秒`

  const alert = document.getElementById("alert");
  alert.innerText = `${time_now[0]}:${time_now[1]}`
  //console.log(`${times[0]}:${times[1]}:${times[2]}`);
}

  const startTime = document.getElementById("startTime");
  const valueSpan = document.getElementById("value");
  const btn = document.getElementById("btn");
  //const reset = document.getElementById("reset");

  startTime.addEventListener("input", (event =>{
    valueSpan.innerText = startTime.value;
 })
); 


  btn.addEventListener("click", (event) => {
          const alert_time = document.getElementById("value");
          const time_now = document.getElementById("alert");
          const str_timenow = time_now.innerText;
          const str_alerttime = alert_time.innerText;
          console.log(str_timenow);
          console.log(str_alerttime);
          
          if(str_timenow === str_alerttime) {
            alert("時間です");
            console.log(str_timenow);
            console.log(str_alerttime);
          }else{
            alert("時間ではありません");
            console.log(str_timenow);
            console.log(str_alerttime);
          }
          
        });



  });
