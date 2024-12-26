
addEventListener("DOMContentLoaded", (event) => {


//ウィンドウのピクセルサイズを取得
  const screenWidth = window.screen.width;//幅
  const screenHeight = window.screen.height;//高さ
  //https://developer.mozilla.org/ja/docs/Web/API/Screen/availWidth

  console.log(screenWidth);
  console.log(screenHeight);

//Canvasの要素を取得
const canvas0 = document.getElementById("canvas0");
const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");

//Canvas要素の幅と高さをウィンドウのピクセルサイズに変更
canvas0.width = screenWidth;
canvas0.height = screenHeight;
canvas1.width = screenWidth;
canvas1.height = screenHeight;
canvas2.width = screenWidth;
canvas2.height = screenHeight;

	//値：[ループ回数]、型:[整数]
	const bricks_count = 3;	

//objectを呼び出す関数
function star(){
	//値：[canvas要素]、型:[オブジェクト]
	const canvasn = 0;
	
	//値：[ランダムな整数]、型：[整数]
	let random;

	//値：[空]
	let trans;
	
	//値:[空]
	let color;

	//値：[ループ回数]、型:[整数]
	//const bricks_count = 3;	

	//出力結果：[ランダムな整数]
 		function getRandomIntInclusive(min, max) {
  		const minCeiled = Math.ceil(min);
  		const maxFloored = Math.floor(max);
  		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // 上限を含み、下限も含む
	};

	//値：[図形の色]、型：[オブジェクト]
	const colors = ['yellow','red','green'];
	

	//値：[図形の情報]、型：[オブジェクト]
	const BricksData = {
		brickRowCount:20,//[行数]変更する時はココの値を変更する
		brickColumnCount:20,//[列数]変更する時はココの値を変更する
		brickWidth:20,//[列幅]変更する時はココの値を変更する
		brickHeight:20,//[行高]変更する時はココの値を変更する
		brickPadding:25,//[列と行の間隔]変更する時はココの値を変更する
		brickOffsetTop:20,//図形のY座標
		brickOffsetLeft:20,//図形のX座標
		brickVX:-0.1,//[水平の移動量]水平の移動速度を変更する時はココの値を変更する
		brickVY:0.1//[垂直の移動量]垂直の移動速度を変更する時はココの値を変更する

	}


	//値：[2Dオブジェクト用配列]、型：[オブジェクト]
	const ctx_array = [];
	

	//値：[canvas要素]、型：[オブジェクト]
	for (let i = 0; i < bricks_count; i++){
		ctx_array[i] = [];
		const canvas = document.getElementById(`canvas${i}`);
		ctx_array[i] = canvas.getContext("2d");
	}

	//値：[図形のサイズ]、型：「オブジェクト」
	const bricks_arry = [];
		for (let i = 0; i < bricks_count; i++) {
			bricks_arry[i] = [];
			bricks_arry[i] = BricksData;
	}

	//値：[空、図形の座標格納用]、型：「オブジェクト」
	const bricks = [];//空の配列


	//値：[図形の座標情報]、型：[オブジェクト]　
	for (let c = 0; c < bricks_arry[0].brickColumnCount; c++) {
  		bricks[c] = [];//変数の数だけ空の列を作る

		  for (let r = 0; r < bricks_arry[0].brickRowCount; r++) {
		    bricks[c][r] = { x: 0, y: 0 };//変数の数だけx,y座標の列と行を作る

	  	}
	}


	//値：[空、図形のサイズ、色、座標を格納]、型:[オブジェクト]
	const bricks_insta = [];
	
	//値：[図形の全情報]、型:[オブジェクト]
	for (let s = 0; s < bricks_count; s++) {

		let random = getRandomIntInclusive(50, 400);

		const drawbricks = {
		X:random,
		Y:random,
		VX:0,
		VY:0,
		color:colors[getRandomIntInclusive(0,2)],
		trans:getRandomIntInclusive(4,10),
		draw(){
  			for (let c = 0; c < bricks_arry[s].brickColumnCount; c++) {
			//変数の数だけブロック処理を繰り返す
    				for (let r = 0; r < bricks_arry[s].brickRowCount; r++) {

				//変数の数だけブロックを繰り返す
      				let brickX = c * (bricks_arry[s].brickWidth + bricks_arry[s].brickPadding) + bricks_arry[s].brickOffsetLeft;//brickの水平位置を指定（30）
      				let brickY = r * (bricks_arry[s].brickHeight + bricks_arry[s].brickPadding) + bricks_arry[s].brickOffsetTop;//brickの垂直位置を指定（30）
      				bricks[c][r].x = brickX;//{x: 30, y:30}
				//↑の値をループ事に変えるとランダムに表示される
      				bricks[c][r].y = brickY;//{x: 30, y:30}
				//↑の値をループ事に変えるとランダムに表示される
      				ctx_array[s].save();
      				ctx_array[s].beginPath();//パスの作成を開始する
				ctx_array[s].transform (this.trans, 0, 0, this.trans, this.X, this.Y);
          			ctx_array[s].fillStyle = this.color;
	  			ctx_array[s].translate(-400,-400);
	  			ctx_array[s].translate(brickX+this.VX, brickY+this.VY);
	  			ctx_array[s].beginPath();
	  			ctx_array[s].moveTo(465, 0);//頂点
	  			ctx_array[s].lineTo(466, 4);
	  			ctx_array[s].lineTo(470, 4);//右上角
	  			ctx_array[s].lineTo(467, 6);
	  			ctx_array[s].lineTo(469, 11);//右下角
	  			ctx_array[s].lineTo(465, 7);
	  			ctx_array[s].lineTo(461, 11);//左下角
	  			ctx_array[s].lineTo(463, 6);
	  			ctx_array[s].lineTo(460, 4);//左上角
	  			ctx_array[s].lineTo(464, 4);
          			ctx_array[s].fill();
	  			ctx_array[s].closePath();
				ctx_array[s].restore();
    }
  }
}
}


bricks_insta[s] = [];

bricks_insta[s] = drawbricks;


}




//結果：[ブラウザに図形を描画]
function bricks2(){
  bricks_insta[0].draw();

  if (bricks_insta[0].VX <= 0) {
　//処理：[図形の座標に値を足す]、条件：[図形のX座標が0だった時]
	for (let a = 0; a < bricks_count; a++){
		ctx_array[a].clearRect(0,0,canvas0.width,canvas0.height);
	  	bricks_insta[a].draw();
		bricks_insta[a].VX += -0.1;
	  	bricks_insta[a].VY += 0.1;
		  }

　//処理：[図形の座標を元に戻す]、条件：[図形の水平位置が-450以上になった時]
　}if (bricks_insta[0].VX < -720) {
	for (let y = 0; y < bricks_count; y++){
		random = getRandomIntInclusive(50, 400);
		trans = getRandomIntInclusive(4, 10);
		color = colors[getRandomIntInclusive(0, 2)];
		bricks_insta[y].VX = 0;
	  	bricks_insta[y].VY = 0;
		bricks_insta[y].X = random;
	  	bricks_insta[y].Y = random;
		bricks_insta[y].trans = trans;
		bricks_insta[y].color = color;
	  }
	

	}
	let getMs = document.getElementById("navi").textContent;
	console.log(getMs);
}

	//[関数の呼び出し]第２引数の数値を大きくすると移動が速くなる。
	//const intervalID = setInterval(bricks2, 10, "stop");
	return bricks2
}

const clearStarArray = [];

function clearStar(){
	
	for (let f = 0; f < bricks_count; f ++){
		clearStarArray[f] = [];
		const canvas = document.getElementById(`canvas${f}`);
		clearStarArray[f] = canvas.getContext("2d");
	}

	clearStarArray[0].clearRect(0, 0, canvas0.width, canvas0.height);
	clearStarArray[1].clearRect(0, 0, canvas1.width, canvas1.height);
	clearStarArray[2].clearRect(0, 0, canvas2.width, canvas2.height);
	return
}

console.log(clearStar());

const dialogBox = document.querySelector('dialog');

dialogBox.addEventListener("focus", (event) => {
 const intervalID = setInterval(star(),10,"stop");
 //clearInterval(intervalID);
 dialogBox.addEventListener("blur", (event) => {
	clearInterval(intervalID);
	clearStar();
	/*
	const canvas0 = document.getElementById("canvas0");
	const canvas1 = document.getElementById("canvas1");
	const canvas2 = document.getElementById("canvas2");
	ctx0 = canvas0.getContext("2d");
	ctx1 = canvas1.getContext("2d");
	ctx2 = canvas2.getContext("2d");
	ctx0.clearRect(0, 0, canvas0.width, canvas0.height);
	ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
	*/
 });

});




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
  


//  let nIntervId = setInterval(time, 600);
  setInterval(time, 600);

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
		document.getElementById("navi").focus();
		//let text = document.getElementById("navi").textContent;
		//document.getElementById("navi").textContent = "isTime";
		
	}else{
		normal_view();
		document.getElementById("navi").blur();
		//let text = document.getElementById("navi").textContent;
		//document.getElementById("navi").textContent = "isTimeout";
	}

	}
});


