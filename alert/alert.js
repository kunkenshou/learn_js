


addEventListener("DOMContentLoaded", (event) => {

  const startTime = document.getElementById("startTime");
  const valueSpan = document.getElementById("value");
  const btn = document.getElementById("btn");
  const reset = document.getElementById("reset");

  btn.addEventListener("click", (event) => {
    valueSpan.innerText = startTime.value;
  });

  reset.addEventListener("click", (event) => {
   valueSpan.innerText = "";
  });

  let nIntervId = setInterval(time, 600);
  
  function time(){
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const Seconds = today.getSeconds();
  
  let str_hours = hours.toString();
  let str_minutes = minutes.toString();
  let str_seconds = Seconds.toString();
  
  let time_arry = [
    str_hours,
    str_minutes,
    str_seconds,
  ];

  for (let i = 0; i < time_arry.length; i++) {
    
    if(time_arry[i].length === 1){
      time_arry[i] = `0` + time_arry[i];
    } else {
      time_arry[i] = time_arry[i];
    }
    
  }

  const time = document.getElementById("time");
  time.innerText = `${time_arry[0]}時${time_arry[1]}分${time_arry[2]}秒`
 
  const alert_time = document.getElementById("value");
  const navi = document.getElementById("navi");
  const time_now = `${time_arry[0]}:${time_arry[1]}`
  const str_alerttime = alert_time.innerText;

  function normal(){
    navi.innerHTML = "時間ではありません";
  }

  function alert(){
    console.log("hgoe");
    navi.innerHTML = "時間です";
  }

  if(time_now === str_alerttime) {
    alert();
    /*
    console.log("時間です");
    console.log(time_now);
    console.log(str_alerttime);
    window.alert("時間です");
    */
  }else{
    normal();
  }

}
  });
