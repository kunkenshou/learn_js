//alert("hoeg");

//const today = new Date();
//const hours = today.getHours();
//const minutes = today.getMinutes();
//const milliseconds = today.getMilliseconds();
//const str_hours = hours.toString();
//const str_minutes = minutes.toString();
//const str_milliseconds = milliseconds.toString();
 

//console.log(milliseconds);


addEventListener("DOMContentLoaded", (event) => {

  let nIntervId = setInterval(time, 600);
  
  function time(){
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const Seconds = today.getSeconds();
  
  const str_hours = hours.toString();
  const str_minutes = minutes.toString();
  const str_seconds = Seconds.toString();
  
  //let time = `${str_hours}時${str_minutes}分${str_seconds}秒`
  const item = document.getElementById("time");
  item.innerHTML = `${str_hours}時${str_minutes}分${str_seconds}秒`

  //console.log(time);
}

  const startTime = document.getElementById("startTime");
  const valueSpan = document.getElementById("value");
  const btn = document.getElementById("btn");
  const reset = document.getElementById("reset");
  
  startTime.addEventListener(
    "input",
    () => {
      //valueSpan.innerText = startTime.value;
      alert_start = startTime.value;
      console.log(alert_start);
    },
    false,
  )


  btn.addEventListener("click", (event) => {
    console.log("ボタンが..");
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
  
  
  