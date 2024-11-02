addEventListener("DOMContentLoaded", (event) => {

  let nIntervId = setInterval(time, 600);
  
  function tiem(){
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const Seconds = today.getSeconds();
  
  const str_hours = hours.toString();
  const str_minutes = minutes.toString();
  const str_seconds = Seconds.toString();
  
  const item = document.getElementById("time");
  item.innerHTML = `${str_hours}時${str_minutes}分${str_seconds}秒`

  }
  });