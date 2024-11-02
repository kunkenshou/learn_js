
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
  
  let times = [
    str_hours,
    str_minutes,
    str_seconds,
  ];

  for (let i = 0; i < times.length; i++) {
    
    if(times[i].length === 1){
      times[i] = `0` + times[i];
    } else {
      times[i] = times[i];
    }
    
  }

  const time = document.getElementById("time");
  time.innerHTML = `${times[0]}時${times[1]}分${times[2]}秒`

  const alert = document.getElementById("alert");
  alert.innerText = `${times[0]}:${times[1]}`
  const time_now = `${times[0]}:${times[1]}`
  //console.log(`${times[0]}:${times[1]}:${times[2]}`);
}

  const startTime = document.getElementById("startTime");
  const valueSpan = document.getElementById("value");
  const btn = document.getElementById("btn");
  const reset = document.getElementById("reset");

  startTime.addEventListener("input", (event =>{
    valueSpan.innerText = startTime.value;
 })
); 


  btn.addEventListener("click", (event) => {
          const alert_start = document.getElementById("value");
          const time_now = document.getElementById("alert");
          const str_timeNow = time_now.innerText;
          const str_alertStart = alert_start.innerText;
          console.log(str_timeNow);
          console.log(str_alertStart);
          
          if(str_timeNow === str_alertStart) {
            alert("時間です");
            console.log(time_now);
            console.log(alert_start);
          }else{
            alert("時間ではありません");
            console.log(time_now);
            console.log(alert_start);
          }
          
        });

  });
  
  
  /*
  const time_now = "11時42分";
  
  if (time == time_now ){
  alert("yes");
  }else{
  alert("no");
  }
  
  
  const item = document.getElementById("hoge");
  item.innerHTML = time;
  console.log(item.id);
  console.log(typeof item);
  
  */
  
  
  