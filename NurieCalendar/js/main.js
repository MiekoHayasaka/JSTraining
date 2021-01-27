'use strict';
	// キャンバスを取得
	var canvas = document.getElementById("canvas");
	// 色塗り用キャンバス
//	var coloring = document.getElementById('coloring');
	// コンテキストを取得
	var ctx = coloring.getContext('2d');

	// カラーパレット取得
	var palette = document.getElementById('palette');
	// ペンサイズ
	var penSizeButtons = document.getElementsByClassName('penSize');

	// マウス位置
	var mouse = {x:0, y:0, bx:0, by:0};
	// クリック中フラグ
	var isClicked = false;
	// ペン色
	var penColor = "#000000";
	// ペン幅
	var penWidth = 10;
	// ペン濃度
	var penAlpha = 1.0;

    // 画像をキャンバスの上に描画する
	setImage()

	// 塗り絵の元を表示
	function setImage() {
		//var overCanvas = document.getElementById('overImage');
		//var overCtx = overCanvas.getContext('2d');

		/* Imageオブジェクトを生成 */
		var img = new Image();
		img.src = "images/04.png";

		img.onload = function() {
			overCtx.drawImage(img, 0, 0)
		}
		console.log("setImage")
	}

	// マウスイベントを取得
	// マウスクリック
	canvas.addEventListener("mousedown", function(e){
		// キャンバスの位置とサイズを取得
		var rect = e.target.getBoundingClientRect();
		console.log(rect)

		// マウスの位置
		mouse.x = e.clientX - rect.left;
		mouse.y = e.clientY - rect.top;

		// 描画の開始
		drarLineStart();

		// クリック中フラグ
		isClicked = true;
	});

	// 実行
	setColorPalette()


	// マウス移動
	canvas.addEventListener("mousemove", function(e){
		// クリック中以外の時は無視
		if(!isClicked) {
			return;
		}

		// キャンバスの位置とサイズを取得
		var rect = e.target.getBoundingClientRect();

		mouse.bx = mouse.x;
		mouse.by = mouse.y;

		// マウスの位置
		mouse.x = e.clientX - rect.left;
		mouse.y = e.clientY - rect.top;

		// クリック中なら線を引く
		drawLine();
	});

	// マウスクリック解除
	canvas.addEventListener("mouseup", function(e){
		// クリック終了
		isClicked = false;
	});

	// 開始位置を指定
	function drarLineStart() {
		// 線の太さを指定
		ctx.lineWidth = penWidth;
		// 線の色を指定
		ctx.strokeStyle = penColor;
		ctx.globalAlpha = penAlpha;
		// 先端を丸くする
		ctx.lineCap = "round"
		// つなぎ目を丸くする
		ctx.lineJoint = "round"
	}

	// 線を引く
	function drawLine() {
		// 今からパスを書きますよと云う宣言
		ctx.beginPath();
		// パスの開始点に移動
		ctx.moveTo(mouse.bx, mouse.by);
		// 指定の位置までパスを引く
		ctx.lineTo(mouse.x, mouse.y);
		// パスに線を載せる
		ctx.stroke();
	}

	// パレットを配置する
	function setColorPalette() {
		var colors = ['#FFFFFF', '#000000', '#663300', '#339933', '#00FF99', '#00FFFF',
				 '#0000FF', '#9900FF', '#FFFF00', '#FF9900', '#FF99FF', '#FF0000'];

		for(var i = 0; i < 12; i++) {
			var btn = "<button class='Color' style='background-color: " + colors[i] + ";' onClick='setPenColor(\"" + colors[i] + "\");'></button>"
			palette.innerHTML += btn;
		}
	}

	// 色を変更する
	function setPenColor(setColor) {
		penColor = setColor;

		// ペンの色を変える
		for(var i = 0; i < penSizeButtons.length; i++) {
			penSizeButtons[i].style.backgroundColor = setColor;
		}
	}

	// 線幅を変更する
	function setPenSize(size) {
		penWidth = size;
	}

	// 線の濃さを変更する
	function setPenAlpha(alpha) {
		penAlpha = alpha;
	}

//カレンダー
const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
const endDate = new Date(year, month,  0) // 月の最後の日を取得
const endDayCount = endDate.getDate() // 月の末日
const startDay = startDate.getDay() // 月の最初の日の曜日を取得
let dayCount = 1 // 日にちのカウント
let calendarHtml = '' // HTMLを組み立てる変数

calendarHtml += '<h1>' + year  + '/' + month + '</h1>'
calendarHtml += '<table>'

// 曜日の行を作成
for (let i = 0; i < weeks.length; i++) {
    calendarHtml += '<td>' + weeks[i] + '</td>'
}

for (let w = 0; w < 6; w++) {
    calendarHtml += '<tr>'

    for (let d = 0; d < 7; d++) {
        if (w == 0 && d < startDay) {
            // 1行目で1日の曜日の前
            calendarHtml += '<td></td>'
        } else if (dayCount > endDayCount) {
            // 末尾の日数を超えた
            calendarHtml += '<td></td>'
        } else {
            calendarHtml += '<td>' + dayCount + '</td>'
            dayCount++
        }
    }
    calendarHtml += '</tr>'
}
calendarHtml += '</table>'

document.querySelector('#calendar').innerHTML = calendarHtml