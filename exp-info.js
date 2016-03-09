// ここに元データを記載する

	// キャラごとのデータ
	// 対象日、キャラ名、分類、レア度
	// 分類,0:近接,1:射撃,2:魔法,3:重装,4:なし
	var chrTable=[
	[	1,	"ヒラリィ・イトウ",			0,	"SR"],
	[	2,	"キティ・クローダー",		0,	"SR"],
	[	3,	"サラ・サンジョウ",			2,	"SR"],
	[	4,	"アリシア・ヤマータ",		0,	"SR"],
	[	5,	"マーシャ・マツカタ",		1,	"R"],
	[	6,	"シェロブ・ビッグベア",		1,	"R"],
	[	7,	"キンバリー・サイオンジ",	2,	"R"],
	[	8,	"タルア・カツラ",			0,	"SR"],
	[	9,	"コーデリア・ヤマモト",		1,	"SR"],
	[	10,	"マセッタ・テラウチ",		0,	"R"],
	[	11,	"トリクシィ・ハラ",			2,	"SR"],
	[	12,	"コリス・ウチダ",			0,	"R"],
	[	13,	"コレット・タカハシ",		3,	"SR"],
	[	14,	"サブリナ・カトー",			1,	"R"],
	[	15,	"ケイト・キヨーラ",			0,	"R"],
	[	16,	"ティターニィ・カトー",		1,	"R"],
	[	17,	"レイシィ・ワカツキ",		3,	"R"],
	[	18,	"キララ・タナカ",			1,	"SR"],
	[	19,	"オフェーリア・ハマグチ",	2,	"SR"],
	[	20,	"ティアラ・イヌカイ",		1,	"SR"],
	[	21,	"マロン・サイトウ",			2,	"R"],
	[	22,	"ケイシア・オカダ",			2,	"SR"],
//	[	23,	"ヒロタ（仮）",				1,	"SR"],
	[	24,	"リン・ハヤシ",				0,	"SR"],
	[	25,	"プリミュラ・コノエ",		2,	"SR"],
//	[	26,	"ヒラヌマ（仮）",			1,	"SR"],
	[	27,	"ユーリア・アベ",			0,	"SR"],
//	[	28,	"ヨナイ（仮）",			0,	"SR"],

//	[	14,	"クレア・コイソ",			0,	"SR"],
//	[	15,	"スズキ（仮）",			0,	"SR"],
	[	16,	"ﾆｺﾗｺﾎﾟｰﾛｩ・ﾋｶﾞｼｸﾆ",		1,	"SR"],

	[	1,	"エリカ",					0,	"N"],
	[	2,	"エリナ",					0,	"N"],
	[	3,	"エリサ",					0,	"N"],
	[	4,	"エレナ",					3,	"N"],
	[	5,	"アオバ",					1,	"N"],
	[	6,	"ワカバ",					1,	"N"],
	[	7,	"クレハ",					1,	"N"],
	[	8,	"マツバ",					1,	"N"],
	[	9,	"サン",						2,	"N"],
	[	10,	"シュウ",					2,	"N"],
	[	11,	"シホ",						2,	"N"],
	[	12,	"リッポ",					2,	"N"],

	[	29,	"N近接",					0,	"N"],
	[	29,	"N射撃",					1,	"N"],
	[	29,	"N魔法",					2,	"N"],
	[	29,	"N重装",					3,	"N"],
	[	30,	"N近接",					0,	"N"],
	[	30,	"N射撃",					1,	"N"],
	[	30,	"N魔法",					2,	"N"],
	[	30,	"N重装",					3,	"N"],
	[	31,	"N近接",					0,	"N"],
	[	31,	"N射撃",					1,	"N"],
	[	31,	"N魔法",					2,	"N"],
	[	31,	"N重装",					3,	"N"],
	];

	// ステージごとのデータ（選挙区ごとの色変え処理用に16ステージ単位で記載すること）
	//  x0, x1, x2, x3, x4, x5, x6, x7, x8, x9,x10,x11,x12,x13,x14,x15
	// X-1,X-2,X-A,X-3,X-B,X-C,X-4,X-D,X-E,X-5,X-F,X-G,X-H,X-I,X-J,X-K
	
	// 曜日　0:日曜,1:月曜,2:火曜,3:水曜,4:木曜,5:金曜,6:土曜,7:なし
	// ステージ名, 消費モチベ, 経験値, ボーナス分類, Gold, EXP曜日、Gold曜日
	var stageTable=[
	[	"H3-1",	37,	0,	3920,	4070,	3,	1	],
	[	"H3-2",	37,	1,	3914,	4080,	4,	2	],
	[	"H3-A",	38,	2,	4018,	4210,	5,	3	],
	[	"H3-3",	38,	1,	4072,	4190,	6,	4	],
	[	"H3-B",	39,	0,	4157,	4370,	0,	5	],
	[	"H3-C",	0,	4,	100,	0	,	7,	7	],
	[	"H3-4",	40,	3,	4347,	4370,	2,	0	],
	[	"H3-D",	0,	4,	100,	0	,	7,	7	],
	[	"H3-E",	0,	4,	100,	0	,	7,	7	],
	[	"H3-5",	41,	4,	4579,	4460,	5,	4	],
	[	"N3-F",	0,	4,	100,	0	,	7,	7	],
	[	"N3-G",	0,	4,	100,	0	,	7,	7	],
	[	"N3-H",	0,	4,	100,	0	,	7,	7	],
	[	"N3-I",	0,	4,	100,	0	,	7,	7	],
	[	"N3-J",	0,	4,	100,	0	,	7,	7	],
	[	"N3-K",	0,	4,	100,	0	,	7,	7	],

	[	"N3-1",	19,	1,	1799,	1940,	0,	5	],
	[	"N3-2",	19,	0,	1815,	1960,	1,	6	],
	[	"N3-A",	19,	2,	1824,	2560,	2,	7	],
	[	"N3-3",	20,	3,	1931,	2050,	3,	1	],
	[	"N3-B",	20,	0,	1963,	2670,	4,	7	],
	[	"N3-C",	0,	4,	100,	0	,	7,	7	],
	[	"N3-4",	22,	2,	2159,	2300,	6,	4	],
	[	"N3-D",	0,	4,	100,	0	,	7,	7	],
	[	"N3-E",	0,	4,	100,	0	,	7,	7	],
	[	"N3-5",	24,	4,	2450,	2530,	2,	0	],
	[	"N3-F",	0,	4,	100,	0	,	7,	7	],
	[	"N3-G",	0,	4,	100,	0	,	7,	7	],
	[	"N3-H",	0,	4,	100,	0	,	7,	7	],
	[	"N3-I",	0,	4,	100,	0	,	7,	7	],
	[	"N3-J",	0,	4,	100,	0	,	7,	7	],
	[	"N3-K",	0,	4,	100,	0	,	7,	7	],

	[	"H2-1",	22,	3,	1758,	1730,	0,	3	],
	[	"H2-2",	23,	1,	1870,	1800,	1,	4	],
	[	"H2-A",	24,	0,	1989,	2830,	2,	5	],
	[	"H2-3",	28,	2,	2116,	2900,	3,	6	],
	[	"H2-B",	29,	1,	2251,	3070,	4,	0	],
	[	"H2-C",	29,	4,	2395,	2140,	5,	1	],
	[	"H2-4",	31,	0,	2711,	2210,	6,	2	],
	[	"H2-D",	36,	3,	2884,	4280,	0,	7	],
	[	"H2-E",	36,	2,	3068,	1860,	3,	4	],
	[	"H2-5",	36,	4,	3264,	2430,	4,	5	],
	[	"H2-F",	28,	1,	2506,	2480,	7,	7	],
	[	"H2-G",	28,	0,	2535,	2540,	7,	7	],
	[	"H2-H",	28,	3,	2570,	2480,	7,	3	],
	[	"H2-I",	29,	2,	2696,	2600,	7,	7	],
	[	"H2-J",	34,	1,	3206,	3020,	7,	7	],
	[	"H2-K",	35,	0,	3311,	3210,	7,	7	],

	[	"N2-1",	12,	2,	523,	630	,	1,	4	],
	[	"N2-2",	12,	1,	589,	630	,	2,	5	],
	[	"N2-A",	13,	3,	664,	890	,	3,	6	],
	[	"N2-3",	13,	0,	748,	900	,	4,	0	],
	[	"N2-B",	14,	0,	843,	950	,	5,	1	],
	[	"N2-C",	15,	4,	950,	810	,	6,	2	],
	[	"N2-4",	16,	1,	1142,	870	,	0,	3	],
	[	"N2-D",	17,	0,	1215,	1590,	1,	7	],
	[	"N2-E",	18,	3,	1292,	800	,	2,	3	],
	[	"N2-5",	20,	4,	1758,	1110,	3,	4	],
	[	"N2-F",	12,	2,	775,	580,	3,	7	],
	[	"N2-G",	12,	1,	802,	490,	7,	7	],
	[	"N2-H",	13,	0,	862,	550,	7,	3	],
	[	"N2-I",	13,	3,	985,	670,	7,	7	],
	[	"N2-J",	17,	2,	1350,	1140,	7,	7	],
	[	"N2-K",	17,	2,	1371,	1100,	7,	7	],

	[	"H1-1",	12,	2,	523,	990	,	7,	7	],
	[	"H1-2",	13,	1,	589,	1050,	7,	7	],
	[	"H1-A",	14,	0,	664,	1160,	7,	3	],
	[	"H1-3",	15,	3,	748,	1230,	7,	4	],
	[	"H1-B",	19,	1,	950,	1650,	7,	7	],
	[	"H1-C",	22,	0,	1142,	1410,	3,	7	],
	[	"H1-4",	23,	2,	1215,	1540,	7,	7	],
	[	"H1-D",	24,	3,	1436,	1350,	4,	3	],
	[	"H1-E",	0,	4,	100,	0	,	7,	7	],
	[	"H1-5",	24,	4,	1292,	1660,	7,	7	],
	[	"H1-F",	0,	4,	100,	0	,	7,	7	],
	[	"H1-G",	0,	4,	100,	0	,	7,	7	],
	[	"H1-H",	0,	4,	100,	0	,	7,	7	],
	[	"H1-I",	0,	4,	100,	0	,	7,	7	],
	[	"H1-J",	0,	4,	100,	0	,	7,	7	],
	[	"H1-K",	0,	4,	100,	0	,	7,	7	],

	[	"N1-1",	6,	4,	100,	300	,	7,	7	],
	[	"N1-2",	6,	1,	112,	300	,	7,	4	],
	[	"N1-A",	7,	2,	126,	350	,	7,	7	],
	[	"N1-3",	7,	3,	142,	350	,	3,	7	],
	[	"N1-B",	8,	0,	180,	560	,	4,	7	],
	[	"N1-C",	9,	1,	228,	460	,	7,	7	],
	[	"N1-4",	9,	2,	325,	460	,	7,	7	],
	[	"N1-D",	11,	3,	423,	510	,	7,	3	],
	[	"N1-E",	0,	4,	100,	0	,	7,	7	],
	[	"N1-5",	11,	4,	464,	570	,	7,	7	],
	[	"N1-F",	0,	4,	100,	0	,	7,	7	],
	[	"N1-G",	0,	4,	100,	0	,	7,	7	],
	[	"N1-H",	0,	4,	100,	0	,	7,	7	],
	[	"N1-I",	0,	4,	100,	0	,	7,	7	],
	[	"N1-J",	0,	4,	100,	0	,	7,	7	],
	[	"N1-K",	0,	4,	100,	0	,	7,	7	],

	];

	var titleText =["戦挙区","消費","職業","EXP","Gold","EXP/M","Gold/M"];
	var typeText=["近接","射撃","魔法","重装","なし"];
	var rows=[];
	var cnt=0;
	var colorCode=["#B0C4DE","#E0E0E0","#C0C0FF","#E0E0FF","#C0FFC0","#E0FFE0", "#FF4040", "#4040FF"];


function setTableData( inTbl, inDate, inDay ){
	for(var i=0;i<chrTable.length;i++){
		if( chrTable[i][0] == inDate) {
			// 行の追加
			rows.push(inTbl.insertRow(-1));
			// キャラ情報の追加
			{
				var cell=rows[cnt].insertCell(-1);
				var chtxt = chrTable[i][1] + '  ' + typeText[chrTable[i][2]] + '  ' + chrTable[i][3];
				cell.appendChild(document.createTextNode(chtxt));
	    	    cell.style.backgroundColor=colorCode[1];
	    	    cell.style.color=colorCode[7];
	    	    cell.style.fontWeight="bold";
			}

			var wktbl=[[0,"N0-0"]];
			for( var j=0; j<stageTable.length;j++){
				// EXP/M
				var subtbl=[[0,""]];
				var work = 0;
				if( stageTable[j][1]!=0){
					if( stageTable[j][5]==inDay) {
						work = stageTable[j][3]*12;
						work = Math.round(work / 10);
					}
					else {
						work = stageTable[j][3];
					}
					if( chrTable[i][2]==stageTable[j][2]){
						work = work*12;
						work = Math.round(work / 10);
					}
					work = work / stageTable[j][1]*100;
					work = Math.round( work );
					work = work / 100;
					subtbl[0] = work;
					subtbl[1] = stageTable[j][0];
					wktbl.push(subtbl);
				}
			}
			wktbl.sort(function(a, b){return b[0]-a[0];});
			cnt++;			
			// 行の追加
			rows.push(inTbl.insertRow(-1));
			{
				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[0][1] + ' ' + wktbl[0][0]));
	   		    cell.style.backgroundColor=colorCode[0];
	   		    cell.style.textAlign="center";
	   		    cell.style.fontWeight="bold";
			}
			cnt++;
			// 行の追加
			rows.push(inTbl.insertRow(-1));
			{
				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode('    ' + wktbl[1][1] + ' ' + wktbl[1][0]));
	   	    	cell.style.backgroundColor=colorCode[0];
	   	    	cell.style.textAlign="center";
	   	    	cell.style.fontWeight="bold";
			}
			cnt++;
			// 行の追加
			rows.push(inTbl.insertRow(-1));
			{
				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode('    ' + wktbl[2][1] + ' ' + wktbl[2][0]));
	   		    cell.style.backgroundColor=colorCode[0];
	   		    cell.style.textAlign="center";
	   	    	cell.style.fontWeight="bold";
			}
			cnt++;
		}
	}
}

(function(){
    "use strict";
	// 日付と曜日の取得
	var nowTime = new Date();
	var nowDate = nowTime.getDate();
	var nowDay = nowTime.getDay();
	var oldDate = nowDate;
    var nowHours = nowTime.getHours();
	var nowMonth = nowTime.getMonth()+1;
	var oldMonth = nowMonth;

	// 4時より前の場合、前日の日付を取得
	if( nowHours < 4 ) {
		nowTime.setHours(-1);
		oldDate = nowTime.getDate(); 
		oldMonth = nowTime.getMonth()+1;
	}

// ここで表用のデータを作成する
// ここで日替わりテーブルの内容を作成する
    var exptable= document.createElement( 'table' );

	// 当日の0:00～3:59分
	if( nowHours < 4 ) {
		rows.push(exptable.insertRow(-1));
		{
			var cell=rows[cnt].insertCell(-1);
			var chtxt = nowMonth + '/' + nowDate + ' 0:00～3:59';
			cell.appendChild(document.createTextNode(chtxt));
	   	    cell.style.backgroundColor=colorCode[5];
	   	    cell.style.fontWeight="bold";
		}
		cnt++;
	
		setTableData( exptable, oldDate, nowDay);

	}
	// 当日の4:00～23:59分
	rows.push(exptable.insertRow(-1));
	{
		var cell=rows[cnt].insertCell(-1);
		var chtxt = nowMonth + '/' + nowDate + ' 4:00～23:59';
		cell.appendChild(document.createTextNode(chtxt));
   	    cell.style.backgroundColor=colorCode[5];
   	    cell.style.fontWeight="bold";
	}
	cnt++;
	
	setTableData( exptable, nowDate, nowDay);

	// 翌日の0:00～3:59分（4時以降のみ表示）
	if( nowHours > 3 ) {
		// 翌日の日付を取得する
		nowTime.setTime(nowTime.getTime() +60*1000*60*24);
		var newDay=nowTime.getDay();
		var newDate=nowTime.getDate();
		var newMonth=nowTime.getMonth()+1;

		rows.push(exptable.insertRow(-1));
		{
			var cell=rows[cnt].insertCell(-1);
			var chtxt = newMonth + '/' + newDate + ' 0:00～03:59';
			cell.appendChild(document.createTextNode(chtxt));
	   	    cell.style.backgroundColor=colorCode[5];
	   	    cell.style.fontWeight="bold";
		}
		cnt++;
	
		setTableData( exptable, nowDate, newDay);

	}

	// テーブルへの登録
    document.getElementById("exp-info").appendChild(exptable);

// ここでステージ一覧テーブルの内容を作成する
    var alltable= document.createElement( 'table' );
	var allrows=[];
	cnt=0;
	var offcol=0;

	// タイトル行の追加
	allrows.push(alltable.insertRow(-1));
	for(var j=0;j<titleText.length;j++){
		// 追加した行にセルを追加してテキストを書き込む
		var cell=allrows[0].insertCell(-1);
		cell.appendChild(document.createTextNode(titleText[j]));
        cell.style.backgroundColor=colorCode[0];
	}

	for(var i=0;i<stageTable.length;i++){
		var chk = Math.floor(i / 16);
		if( Math.floor( chk / 2 ) != Math.round( chk / 2) ){
			offcol=2;
		} else {
			offcol=0;
		}
		// 行の追加
		if(stageTable[i][1] != 0){
			allrows.push(alltable.insertRow(-1));
			cnt++;
			// 追加した行にセルを追加してテキストを書き込む
			{	// ステージ名
				var cell=allrows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(stageTable[i][0]));
	    	    cell.style.backgroundColor=colorCode[2 + offcol];
			}
			{	// 消費モチベ
				var cell=allrows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(stageTable[i][1]));
	    	    cell.style.backgroundColor=colorCode[3 + offcol];
			}
			{	// 分類
				var cell=allrows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(typeText[stageTable[i][2]]));
	    	    cell.style.backgroundColor=colorCode[3 + offcol];
			}
			{	// EXP
				var cell=allrows[cnt].insertCell(-1);
				var work = 0; 
				var noww = 0;
				if( stageTable[i][5]==nowDay) {
					work = stageTable[i][3]*12;
					work = Math.round(work / 10);
					noww = 1;
				}
				else {
					work = stageTable[i][3];
				}
				cell.appendChild(document.createTextNode(work));
	    	    cell.style.backgroundColor=colorCode[3 + offcol];
	    	    if( noww == 1) {
		    	    cell.style.color=colorCode[6];
		    	    cell.style.fontWeight="bold";
	    	    }
			}
			{	// Gold
				var cell=allrows[cnt].insertCell(-1);
				var work = 0; 
				var noww = 0;
				if( stageTable[i][6]==nowDay) {
					work = stageTable[i][4]*12;
					work = work / 10;
					noww = 1;
				}
				else {
					work = stageTable[i][4];
				}
				cell.appendChild(document.createTextNode(work));
	    	    cell.style.backgroundColor=colorCode[3 + offcol];
	    	    if( noww == 1) {
		    	    cell.style.color=colorCode[6];
		    	    cell.style.fontWeight="bold";
	    	    }
			}
			{	// EXP/M
				var cell=allrows[cnt].insertCell(-1);
				var work = 0; 
				var noww = 0;
				if( stageTable[i][5]==nowDay) {
					work = stageTable[i][3]*12;
					work = Math.round(work / 10);
					noww = 1;
				}
				else {
					work = stageTable[i][3];
				}
				work = work / stageTable[i][1]*100;
				work = Math.round( work );
				work = work / 100;
				cell.appendChild(document.createTextNode(work));
	    	    cell.style.backgroundColor=colorCode[3 + offcol];
	    	    if( noww == 1) {
		    	    cell.style.color=colorCode[6];
		    	    cell.style.fontWeight="bold";
	    	    }
			}
			{	// Gold/M
				var cell=allrows[cnt].insertCell(-1);
				var work = 0; 
				var noww = 0;
				if( stageTable[i][6]==nowDay) {
					work = stageTable[i][4]*12;
					work = work / 10;
					noww = 1;
				}
				else {
					work = stageTable[i][4];
				}
				work = work / stageTable[i][1]*100;
				work = Math.round( work );
				work = work / 100;
				cell.appendChild(document.createTextNode(work));
	    	    cell.style.backgroundColor=colorCode[3 + offcol];
	    	    if( noww == 1) {
		    	    cell.style.color=colorCode[6];
		    	    cell.style.fontWeight="bold";
	    	    }
			}
		}
	}
    document.getElementById("stage-info").appendChild(alltable);


})();
