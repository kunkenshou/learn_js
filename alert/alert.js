
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
    str_seconds
  ];

  for (let i = 0; i < times; i++) {

    if(times[i].length === 1){
      times = "0" + times[i];
    } else {
      times = items;
    }
  }
  console.log(times[0] + times[1] + times[2]);

  /*
  if(str_minutes.length === 1){
    str_minutes = 0+str_minutes
  }

  if(str_minutes.length === 1){
    str_hours = 0+str_hours
  }
*/
  const time = document.getElementById("time");
  time.innerHTML = `${str_hours}時${str_minutes}分${str_seconds}秒`
  const alert = document.getElementById("alert");
  alert.innerHTML = `${str_hours}:${str_minutes}`
}

  const startTime = document.getElementById("startTime");
  const valueSpan = document.getElementById("value");
  const btn = document.getElementById("btn");
  const reset = document.getElementById("reset");
  
  btn.addEventListener("click", (event) => {
          valueSpan.innerText = startTime.value;
          alert_start = startTime.value;
          console.log(alert_start);
  });


/*
  if(time === ){

  }
*/

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
  
  
  