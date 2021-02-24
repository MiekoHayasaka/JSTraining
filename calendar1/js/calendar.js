
//現在の年月を取得
let today = new Date();
let currentMonth = today.getMonth(); // 0(1月)～11(12月)
let currentYear = today.getFullYear();

//指定の年月を取得
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

//見出しを取得
let cTitle = document.getElementById("cTitle");

//日付指定プルダウンメニュー(年)を作成
let createYear = generate_year_range(2000, 2050);
function generate_year_range(start, end) {
  let years = "";
  for (let i=start; i<= end; i++) {
      years += "<option value='" + i + "'>" + i + "</option>";
  }
  return years;
}
document.getElementById("year").innerHTML = createYear;

let calendar = document.getElementById("calendar");
const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const days = ["日", "月", "火", "水", "木", "金", "土"];

//テーブルに曜日を設定
let dayHeader = "<tr>";
for (let day in days) {
  dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
}
dayHeader += "</tr>";
document.getElementById("thead-month").innerHTML = dayHeader;

//現在の年月でカレンダー表示
showCalendar(currentYear,currentMonth);

//翌月へ移動
function next() {
  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentYear,currentMonth);
}
//前月へ移動
function previous() {
  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentYear,currentMonth);
}
//選択された年月へ移動
function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentYear,currentMonth);
}

//指定した年月のカレンダーを生成
function showCalendar(year,month) {
  let firstDay = (new Date(year, month)).getDay();　//1日は何曜日か(0～6)
	let lastDate = 32 - new Date(year, month, 32).getDate();　//月の末日
  let lastDay = (new Date(year, month,lastDate)).getDay();　//末日は何曜日か 
//console.log(lastDay); 

  tbl = document.getElementById("calendar-body");
  tbl.innerHTML = "";
	//見出しを表示
	cTitle.innerHTML = year + "年 " + months[month];
  selectYear.value = year;
  selectMonth.value = month;

  //テーブル作成
  let date = 1;
  for (let i=0; i<6; i++) {
      var row = document.createElement("tr");
      for (let j=0; j<7; j++) {
//          if ( i===0 && j<firstDay || j>lastDay) {
          if ( i===0 && j<firstDay) {
              cell = document.createElement( "td" );
              cellText = document.createTextNode("");
              cell.appendChild(cellText);
              row.appendChild(cell);
        	} else if (date > lastDate) {
							//月の最終日を超えたらブレイク
              break;
          } else {
              cell = document.createElement("td");
              cell.setAttribute("data-date", date);
              cell.setAttribute("data-month", month + 1);
              cell.setAttribute("data-year", year);
              cell.setAttribute("data-month_name", months[month]);
              cell.className = "date-picker";
              cell.innerHTML = "<span>" + date + "</span>";
              if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                  cell.className = "date-picker selected";
              }
              row.appendChild(cell);
              date++;
          }
      }
      tbl.appendChild(row);
  }
}
