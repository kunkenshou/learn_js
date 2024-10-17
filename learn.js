//alert("javascript");

// No.1 済み
let total = Number(0);
console.log("・"+total);
console.log("合計$"+total);

var products =["item1:1000","item2:1999","item3:3000"];
//console.log(products);

// No.2 済み
for (i=0; i<products.length; i++){

// No.3 済み
products[i] = products[i].split(":");

// No.4 済み
products[i][1] = Number(products[i][1]);
//console.log(products[i][1]);


// No.5 済み
total += products[i][1];

let itemText = products[i][0]+"—$"+products[i][1]
console.log(itemText);

// No.6 済み
}

console.log("合計："+total);

//参考
//https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/Arrays



//目標のイメージ
/*
・0→
合計:0→
名１-$1000
名２-$1000
名３-$1000

反省
*ループの中にtotal変数を書いた理由、
コードの先頭で、誤読。

*価格が合計されない。
・原因
ループの中にlet total = Number(0);total定義した。
毎回total変数が初期化されるのを気付かなかった。

*配列の価格の型を変換できない。
・原因
多次元配列の構造を理解不足。

差異
*実行結果は自:console→理:ブラウザ

*/