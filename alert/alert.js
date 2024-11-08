
addEventListener("DOMContentLoaded", (event) => {

  const startTime = document.getElementById("startTime");
  const valueSpan = document.getElementById("value");
  let alert_boolean = new Boolean(true);
  let check_value = document.getElementById("No1");
  check_value.checked = false;
  let check_boolean = new Boolean(false); 
  const navi = document.getElementById("navi");


  //ダイアログ関係
  const dialog = document.querySelector("dialog");
  const closeButton = document.querySelector("dialog button");


//[閉じる]ボタンでダイアログを閉じる
  closeButton.addEventListener("click", ()=> {
	check_value.checked = false;
	navi.style.display = "none";
	dialog.close();
  });
  
  let nIntervId = setInterval(time, 600);
  
  function time(){
  let check_value = document.getElementById("No1");
  check_boolean = check_value.checked;
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
 


  const time_now = `${time_arry[0]}:${time_arry[1]}`

	  
  const btn = document.getElementById("btn");
  const reset = document.getElementById("reset");
  valueSpan.innerText = startTime.value;
  const alert_time = document.getElementById("value");
  let str_alerttime = alert_time.innerText; 



//[真偽値を代入]現在の時刻と設定したアラームが同じか評価して真偽値を代入する
  if(time_now === str_alerttime) {
    alert_boolean = new Boolean(true);
  }else{
    alert_boolean = new Boolean(false);
}


//[アラーム時間が登録されてない時の処理]
  function normal_view(){
    navi.style.display = "none";
  }

//[アラーム時間の処理]ダイアログボックスに表示
  function dialog_view(){
    dialog.showModal();
    navi.style.display = "grid";
    navi.style.position = "relative";
    navi.style.background = "rgb(207 232 220)";
    navi.style.margin = "auto";
    navi.style.width = "150px";
    navi.style.height = "100px";
    navi.style.border = "5px";
    navi.style.padding = "1em";
  }


//[チェックボタン]ボタンでチェック、未チェックで動作を変える。
  check_value.addEventListener("click", (event) => {
	check_boolean = check_value.checked;

  });


  if (check_boolean == true && alert_boolean == true) {
		dialog_view();

	}else{
		normal_view();

	}
  }


  });
