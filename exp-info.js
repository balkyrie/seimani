// ここに元データを記載する

	// キャラごとのデータ
	// 対象日、キャラ名、分類、レア度
	// 分類,0:近接,1:射撃,2:魔法,3:重装,4:なし
	var chrTable=[
//	[	0,	0,	"ナイカク",					0,	"SR",	"00_Naikaku.png"],
	[	1,	28,	"シノブ・イチハシ",			2,	"SR",	"00_Shinobu.png"],
	[	1,	16,	"ヒラリィ・イトウ",			0,	"SR",	"01_Hillary.png"],
	[	2,	9,	"キティ・クローダー",		0,	"SR",	"02_Kitty.png"],
	[	3,	13,	"サラ・サンジョウ",			2,	"SR",	"03_Sarah.png"],
	[	4,	14,	"アリシア・ヤマータ",		0,	"SR",	"04_Alicia.png"],
	[	5,	23,	"マーシャ・マツカタ",		1,	"R",	"05_Marsha.png"],
	[	6,	11,	"シェロブ・ビッグベア",		1,	"R",	"06_Sherob.png"],
	[	7,	6,	"キンバリー・サイオンジ",	2,	"R",	"07_Kimberly.png"],
	[	8,	4,	"タルア・カツラ",			0,	"SR",	"08_taluah.png"],
	[	9,	26,	"コーデリア・ヤマモト",		1,	"SR",	"09_Cordelia.png"],
	[	10,	24,	"マセッタ・テラウチ",		0,	"R",	"10_Musetta.png"],
	[	11,	15,	"トリクシィ・ハラ",			2,	"SR",	"11_Trixi.png"],
	[	12,	29,	"コリス・ウチダ",			0,	"R",	"12_Coris.png"],
	[	13,	19,	"コレット・タカハシ",		3,	"SR",	"13_Colette.png"],
	[	14,	1,	"サブリナ・カトー",			1,	"R",	"14_Sabrina.png"],
	[	15,	27,	"ケイト・キヨーラ",			0,	"R",	"15_Cate.png"],
	[	16,	25,	"ティターニィ・カトー",		1,	"R",	"16_Titany.png"],
	[	17,	21,	"レイシィ・ワカツキ",		3,	"R",	"17_Leshy.png"],
	[	18,	25,	"キララ・タナカ",			1,	"SR",	"18_Kirara.png"],
	[	19,	1,	"オフェーリア・ハマグチ",	2,	"SR",	"19_Ophelia.png"],
	[	20,	4,	"ティアラ・イヌカイ",		1,	"SR",	"20_Tiara.png"],
	[	21,	2,	"マロン・サイトウ",			2,	"R",	"21_Maron.png"],
	[	22,	14,	"ケイシア・オカダ",			2,	"SR",	"22_Keyshia.png"],
	[	23,	14,	"コニィ・ヒロタ",			2,	"R",	"23_Conny.png"],
	[	24,	23,	"リン・ハヤシ",				0,	"SR",	"24_Rynn.png"],
	[	25,	12,	"プリミュラ・コノエ",		2,	"SR",	"25_Primula.png"],
	[	26,	25,	"キャロライン・ヒラヌマ",	1,	"SR",	"26_Caroline.png"],
	[	27,	24,	"ユーリア・アベ",			0,	"SR",	"27_Yulia.png"],
	[	28,	2,	"ミレイア・ヨナイ",			2,	"SR",	"28_Mireia.png"],

	[	1,	0,	"エリカ",					0,	"N",	"85_Elika.png"],
	[	2,	0,	"エリナ",					0,	"N",	"86_Elina.png"],
	[	3,	0,	"エリサ",					0,	"N",	"87_Elisa.png"],
	[	4,	0,	"エレナ",					3,	"N",	"88_Elena.png"],
	[	5,	0,	"アオバ",					1,	"N",	"89_Aoba.png"],
	[	6,	0,	"ワカバ",					1,	"N",	"90_Wakaba.png"],
	[	7,	0,	"クレハ",					1,	"N",	"91_Kureha.png"],
	[	8,	0,	"マツバ",					1,	"N",	"92_Matsuba.png"],
	[	9,	0,	"サン",						2,	"N",	"93_Sann.png"],
	[	10,	0,	"シュウ",					2,	"N",	"94_Syuu.png"],
	[	11,	0,	"シホ",						2,	"N",	"95_Shiho.png"],
	[	12,	0,	"リッポ",					2,	"N",	"96_Rippo.png"],

	[	13,	30,	"ビッキー・トウジョウ",			3,	"SR",	"41_Bikky.png"],
	[	14,	22,	"クレア・コイソ",			2,	"SR",	"42_Crea.png"],
	[	15,	18,	"カルロッタ・スズキ",			1,	"SR",	"43_Carlotta.png"],
	[	16,	3,	"ﾆｺﾗｺﾎﾟｰﾛｩ・ﾋｶﾞｼｸﾆ",		2,	"SR",	"44_Nikolakopoulou.png"],
	[	17,	13,	"イシュリーヌ・シデハラ",		0,	"SR",	"45_Ishrene.png"],
	[	18,	22,	"ジル・ヨシダ",			2,	"SR",	"46_Zill.png"],


	[	17,	26,	"トルーディ・オオクボ",		1,	"SR",	"47_Trudy.png"],
	[	16,	23,	"モリー・サイゴウ",		3,	"SR",	"48_Morry.png"],
	[	18,	11,	"ダーシー・キド",		0,	"SR",	"50_Darcy.png"],
	[	19,	1,	"ツグミ・サイゴウ",		3,	"SR",	"54_Tsugumi.png"],
	[	20,	18,	"マクシーン・ヤマダ",		2,	"SR",	"56_Mcseen.png"],
	[	21,	30,	"マージョリー・オオムラ",		1,	"SR",	"60_Marjorie.png"],
	[	20,	22,	"ミッシェル・ムツ",		3,	"SR",	"63_Michelle.png"],
	[	23,	20,	"ジェルソミーナ・シナガワ",		0,	"SR",	"66_Gelsomina.png"],
	[	24,	10,	"パティーニ・ムラタ",		2,	"SR",	"68_Patini.png"],
	[	25,	1,	"ネリー・ダテ",		1,	"SR",	"70_Nerry.png"],
	[	26,	0,	"シルヴィア・コムラ",		1,	"SR",	"72_Silvia.png"],
	[	9,	27,	"スー・カバヤマ",		0,	"SR",	"75_Sue.png"],
	[	24,	28,	"ジーン・マキノ",		2,	"SR",	"78_Geane.png"],

	[	1,	21,	"タイス・イタガキ",		3,	"SR",	"49_Tais.png"],
	[	2,	26,	"デメトリア・イワクラ",		2,	"SR",	"52_Demetoria.png"],
	[	3,	12,	"アシュリー・カツ",		0,	"SR",	"51_Asury.png"],
	[	4,	16,	"カーラ・イノウエ",		1,	"SR",	"53_Khara.png"],
	[	5,	18,	"ジェニファー・エトウ",		0,	"SR",	"55_Jennifer.png"],
	[	6,	5,	"タティアナ・エノモト",		0,	"SR",	"59_Tatiana.png"],
	[	8,	13,	"シャーロット・ゴトウ",		1,	"SR",	"58_Sharlotte.png"],
	[	9,	2,	"ビアトリス・シマヅ",		2,	"SR",	"57_Beatrice.png"],
	[	7,	23,	"チェリッシュ・ヤマオカ",		0,	"SR",	"61_Cherish.png"],
	[	10,	16,	"ナターシャ・ナベシマ",		0,	"SR",	"62_Natasha.png"],
	[	3,	15,	"リューナ・ゼヨ・サカモト",		0,	"SR",	"64_Ryuna.png"],
	[	11,	12,	"イオナ・オオヤマ",		0,	"SR",	"65_Iona.png"],
	[	12,	18,	"カテリーン・タニ",		1,	"SR",	"67_Caterine.png"],
	[	14,	17,	"ミランダ・ノヅ",		3,	"SR",	"69_Miranda.png"],
	[	13,	23,	"リーノ・フォレスト",		2,	"SR",	"71_Reano.png"],
	[	4,	16,	"フューリー・ヤマカワ",		3,	"SR",	"73_Fury.png"],
	[	8,	17,	"ナタリー・サノ",		1,	"SR",	"74_Natary.png"],
	[	20,	24,	"ユノ・オザキ",		2,	"SR",	"76_Yuno.png"],
	[	4,	18,	"ビアンカ・マエジマ",		2,	"SR",	"77_Bianca.png"],
	[	5,	19,	"四三式 ゾーイ・ヤマオ",		1,	"SR",	"79_Zoay.png"],
		
	[	29,	0,	"全",					0,	"SR+N",	"97_SN_all.png"],
	[	29,	0,	"全",					1,	"SR+N",	"97_SS_all.png"],
	[	29,	0,	"全",					2,	"SR+N",	"97_SM_all.png"],
	[	29,	0,	"全",					3,	"SR+N",	"97_SJ_all.png"],
	[	30,	0,	"全",					0,	"R+N",	"98_RN_all.png"],
	[	30,	0,	"全",					1,	"R+N",	"98_RS_all.png"],
	[	30,	0,	"全",					2,	"R+N",	"98_RM_all.png"],
	[	30,	0,	"全",					3,	"R+N",	"98_RJ_all.png"],
	[	31,	0,	"全",					0,	"N",	"99_NN_all.png"],
	[	31,	0,	"全",					1,	"N",	"99_NS_all.png"],
	[	31,	0,	"全",					2,	"N",	"99_NM_all.png"],
	[	31,	0,	"全",					3,	"N",	"99_NJ_all.png"],

/*
	[	23,	25,	"全",					0,	"SR+R+N",	"99_NN_all.png"],
	[	24,	25,	"全",					1,	"SR+R+N",	"99_NS_all.png"],
	[	27,	25,	"全",					2,	"SR+R+N",	"99_NM_all.png"],
	[	28,	25,	"全",					3,	"SR+R+N",	"99_NJ_all.png"],
	[	26,	0,	"全",					0,	"SR+R+N",	"99_NN_all.png"],
	[	26,	0,	"全",					1,	"SR+R+N",	"99_NS_all.png"],
	[	26,	0,	"全",					2,	"SR+R+N",	"99_NM_all.png"],
	[	26,	0,	"全",					3,	"SR+R+N",	"99_NJ_all.png"],
*/
	];

	// ステージごとのデータ（選挙区ごとの色変え処理用に16ステージ単位で記載すること）
	//  x0, x1, x2, x3, x4, x5, x6, x7, x8, x9,x10,x11,x12,x13,x14,x15
	// X-1,X-2,X-A,X-3,X-B,X-C,X-4,X-D,X-E,X-5,X-F,X-G,X-H,X-I,X-J,X-K
	
	// 曜日　0:日曜,1:月曜,2:火曜,3:水曜,4:木曜,5:金曜,6:土曜,7:なし
	// ステージ名, 消費モチベ, 経験値, ボーナス分類, Gold, EXP曜日、Gold曜日、表示制限
	var stageTable=[


/*
	[	"初級",	30,	4,	3500,	2100,	7,	7,	1	],
	[	"中級",	40,	4,	4900,	5600,	7,	7,	2	],
	[	"上級",	50,	4,	5750,	9500,	7,	7,	3	],
	[	"まつり",	80,	4,	10600,	16000,	7,	7,	5	],
	[	"ちまつり",	100,	4,	14000,	21000,	7,	7,	8	],
*/
/*
	[	"小地獄",	30,	4,	2000,	2400,	7,	7,	2	],
	[	"中地獄",	50,	4,	3500,	7000,	7,	7,	4	],
	[	"大地獄",	80,	4,	6000,	16000,	7,	7,	6	],
	[	"超地獄",	0,	4,	15000,	33000,	7,	7,	13	],
	[	"天国",	1000,	4,	5000,	70000,	7,	7,	4	],
*/

["T8-1",0,0,3920,0,0x0,0x0,99],
["T8-A",0,2,4018,0,0x0,0x0,99],
["T8-2",0,1,3914,0,0x0,0x0,99],
["T8-B",0,0,4157,0,0x0,0x0,99],
["T8-3",0,1,4072,0,0x0,0x0,99],

["T8-C",0,1,4284,0,0x0,0x0,99],
["T8-4",0,3,4347,0,0x0,0x0,99],
["T8-5",0,4,4579,0,0x0,0x0,99],
["T8-D",0,2,4323,0,0x0,0x0,99],
["T8-E",0,3,4343,0,0x0,0x0,99],
["T8-F",0,4,100,0,0x0,0x0,99],
["T8-G",0,4,100,0,0x0,0x0,99],
["T8-H",0,4,100,0,0x0,0x0,99],
["T8-I",0,4,100,0,0x0,0x0,99],
["T8-J",0,4,100,0,0x0,0x0,99],
["T8-K",0,4,100,0,0x0,0x0,99],

["H8-1",45,2,9474,6030,0x10,0x20,17],
["H8-A",45,1,9531,6090,0x1,0x8,17],
["H8-E",45,0,9490,6070,0x50,0x1,17],
["H8-2",45,1,9580,6080,0x28,0x40,17],
["H8-B",45,0,9520,6080,0x8,0x10,17],
["H8-3",45,3,9577,6110,0x50,0x1,17],
["H8-C",45,3,9583,6060,0x0,0x20,17],
["H8-4",45,0,9590,6080,0x21,0x0,17],
["H8-D",46,2,9832,6210,0x8,0x40,17],
["H8-5",46,2,9917,6220,0x60,0x0,17],
["H8-6",47,3,10000,6280,0x9,0x40,17],
["H8-Ex1",55,1,12111,0,0x30,0x0,18],
["H8-Ex2",55,2,12134,0,0x1,0x0,18],
["H8-Ex3",55,3,12155,0,0x21,0x8,18],
["H8-I",0,4,100,0,0x0,0x0,17],
["H8-J",0,4,100,0,0x0,0x0,17],

["N8-1",28,3,5593,3630,0x20,0x0,16],
["N8-A",28,1,5692,3630,0x8,0x40,16],
["N8-E",28,1,5705,3590,0x11,0x18,16],
["N8-2",28,2,5693,3640,0x40,0x0,16],
["N8-B",29,0,5980,3810,0x30,0x1,16],
["N8-3",29,1,5940,3770,0x41,0x8,16],
["N8-C",29,2,6007,3780,0x21,0x0,16],
["N8-4",29,3,6073,3780,0x8,0x10,16],
["N8-D",29,0,6098,3720,0x48,0x0,16],
["N8-5",29,0,6069,3790,0x0,0x20,16],
["N8-6",30,4,6119,3850,0x0,0x0,16],
["N8-Ex1",35,1,7525,0,0x20,0x10,18],
["N8-Ex2",35,3,7531,0,0x10,0x20,18],
["N8-Ex3",35,2,7560,0,0x28,0x40,18],
["N8-I",0,4,100,0,0x0,0x0,16],
["N8-J",0,4,100,0,0x0,0x0,16],

["T7-1",0,0,3920,0,0x0,0x0,99],
["T7-A",0,2,4018,0,0x0,0x0,99],
["T7-E",0,1,3914,0,0x0,0x0,99],
["T7-2",0,0,4157,0,0x0,0x0,99],
["T7-B",0,1,4072,0,0x0,0x0,99],
["T7-F",0,1,4284,0,0x0,0x0,99],
["T7-3",0,3,4347,0,0x0,0x0,99],
["T7-C",0,4,4579,0,0x0,0x0,99],
["T7-4",0,2,4323,0,0x0,0x0,99],
["T7-D",0,3,4343,0,0x0,0x0,99],
["T7-5",0,4,100,0,0x0,0x0,99],
["T7-Ex1",0,4,100,0,0x0,0x0,99],
["T7-Ex2",0,4,100,0,0x0,0x0,99],
["T7-Ex3",0,4,100,0,0x0,0x0,99],
["T7-J",0,4,100,0,0x0,0x0,99],
["T7-K",0,4,100,0,0x0,0x0,99],

["H7-1",44,0,8541,5710,0x20,0x10,15],
["H7-A",44,3,8495,5700,0x60,0x0,15],
["H7-E",44,2,8569,5740,0x9,0x40,15],
["H7-2",44,2,8599,5700,0x40,0x20,15],
["H7-B",44,1,8555,5750,0x41,0x8,15],
["H7-F",44,1,8580,5730,0x10,0x1,15],
["H7-3",44,1,8596,5720,0x28,0x40,15],
["H7-C",44,3,8635,5680,0x0,0x10,15],
["H7-4",44,0,8665,5760,0x18,0x1,15],
["H7-D",45,0,8915,5870,0x1,0x20,15],
["H7-5",45,2,8866,5880,0x30,0x0,15],
["H7-Ex1",55,0,12092,0,0x20,0x0,18],
["H7-Ex2",55,1,12120,0,0x40,0x0,18],
["H7-Ex3",0,4,100,0,0x0,0x0,18],
["H7-J",0,4,100,0,0x0,0x0,15],
["H7-K",0,4,100,0,0x0,0x0,15],

["N7-1",28,1,5193,3470,0x10,0x1,14],
["N7-A",28,3,5260,3490,0x41,0x20,14],
["N7-E",28,0,5297,3510,0x8,0x0,14],
["N7-2",28,0,5301,3460,0x30,0x0,14],
["N7-B",28,1,5324,3520,0x8,0x40,14],
["N7-F",28,1,5310,3550,0x41,0x8,14],
["N7-3",28,3,5392,3540,0x48,0x0,14],
["N7-C",28,2,5387,3490,0x10,0x1,14],
["N7-4",28,2,5412,3490,0x21,0x8,14],
["N7-D",28,1,5436,3530,0x20,0x0,14],
["N7-5",28,0,5467,3520,0x0,0x10,14],
["N7-Ex1",35,3,7539,0,0x8,0x10,18],
["N7-Ex2",35,0,7535,0,0x40,0x20,18],
["N7-Ex3",0,4,100,0,0x0,0x0,18],
["N7-J",0,4,100,0,0x0,0x0,14],
["N7-K",0,4,100,0,0x0,0x0,14],

["T6-1",0,0,3920,0,0x0,0x0,99],
["T6-A",0,2,4018,0,0x0,0x0,99],
["T6-2",0,1,3914,0,0x0,0x0,99],
["T6-B",0,0,4157,0,0x0,0x0,99],
["T6-3",0,1,4072,0,0x0,0x0,99],
["T6-C",0,1,4284,0,0x0,0x0,99],
["T6-4",0,3,4347,0,0x0,0x0,99],
["T6-5",0,4,4579,0,0x0,0x0,99],
["T6-D",0,2,4323,0,0x0,0x0,99],
["T6-E",0,3,4343,0,0x0,0x0,99],
["T6-F",0,4,100,0,0x0,0x0,99],
["T6-Ex1",0,4,100,0,0x0,0x0,99],
["T6-Ex2",0,4,100,0,0x0,0x0,99],
["T6-Ex3",0,4,100,0,0x0,0x0,99],
["T6-J",0,4,100,0,0x0,0x0,99],
["T6-K",0,4,100,0,0x0,0x0,99],

["H6-1",43,2,8008,5370,0x11,0x8,13],
["H6-A",43,1,7914,5360,0x60,0x0,13],
["H6-E",43,0,8046,5350,0x40,0x20,13],
["H6-2",43,0,7999,5390,0x8,0x10,13],
["H6-B",43,2,8048,5390,0x48,0x0,13],
["H6-3",43,1,8025,5330,0x0,0x20,13],
["H6-C",43,0,8104,5370,0x11,0x8,13],
["H6-4",43,3,8184,5360,0x9,0x40,13],
["H6-D",44,2,8294,5470,0x20,0x10,13],
["H6-5",44,3,8354,5500,0x10,0x1,13],
["H6-F",0,4,100,0,0x0,0x0,13],
["H6-Ex1",55,1,12067,0,0x8,0x40,18],
["H6-Ex2",0,4,100,0,0x0,0x0,18],
["H6-Ex3",0,4,100,0,0x0,0x0,18],
["H6-J",0,4,100,0,0x0,0x0,13],
["H6-K",0,4,100,0,0x0,0x0,13],

["N6-1",27,3,4842,3190,0x9,0x40,12],
["N6-A",27,3,4915,3270,0x20,0x10,12],
["N6-E",27,1,4935,3430,0x60,0x0,12],
["N6-2",27,0,4965,3410,0x50,0x1,12],
["N6-B",27,0,4887,3210,0x1,0x20,12],
["N6-3",27,2,5009,3400,0x20,0x0,12],
["N6-C",27,1,5032,3390,0x8,0x40,12],
["N6-4",27,2,5059,3200,0x40,0x0,12],
["N6-D",27,1,5190,3550,0x18,0x1,12],
["N6-5",28,1,5290,3420,0x11,0x8,12],
["N6-F",0,4,100,0,0x0,0x0,12],
["N6-Ex1",35,1,7503,0,0x1,0x0,18],
["N6-Ex2",0,4,100,0,0x0,0x0,18],
["N6-Ex3",0,4,100,0,0x0,0x0,18],
["N6-J",0,4,100,0,0x0,0x0,12],
["N6-K",0,4,100,0,0x0,0x0,12],

["T5-1",0,0,3920,0,0x0,0x0,99],
["T5-A",0,2,4018,0,0x0,0x0,99],
["T5-2",0,1,3914,0,0x0,0x0,99],
["T5-B",0,0,4157,0,0x0,0x0,99],
["T5-3",0,1,4072,0,0x0,0x0,99],
["T5-C",0,1,4284,0,0x0,0x0,99],
["T5-4",0,3,4347,0,0x0,0x0,99],
["T5-5",0,4,4579,0,0x0,0x0,99],
["T5-D",0,2,4323,0,0x0,0x0,99],
["T5-E",0,3,4343,0,0x0,0x0,99],
["T5-F",0,4,100,0,0x0,0x0,99],
["T5-G",0,4,100,0,0x0,0x0,99],
["T5-H",0,4,100,0,0x0,0x0,99],
["T5-I",0,4,100,0,0x0,0x0,99],
["T5-J",0,4,100,0,0x0,0x0,99],
["T5-K",0,4,100,0,0x0,0x0,99],

["H5-1",42,1,7641,5300,0x50,0x0,11],
["H5-A",42,2,7658,5300,0x10,0x1,11],
["H5-E",42,2,7666,5060,0x20,0x10,11],
["H5-2",42,3,7702,5050,0x1,0x8,11],
["H5-B",42,0,7809,5200,0x60,0x0,11],
["H5-3",42,1,7783,5110,0x1,0x10,11],
["H5-C",42,2,7786,5000,0x48,0x0,11],
["H5-4",42,0,7849,5300,0x8,0x20,11],
["H5-D",43,0,8106,5330,0x11,0x8,11],
["H5-5",43,3,8139,5270,0x28,0x40,11],
["H5-F",0,4,100,0,0x0,0x0,11],
["H5-G",0,4,100,0,0x0,0x0,11],
["H5-H",0,4,100,0,0x0,0x0,11],
["H5-I",0,4,100,0,0x0,0x0,11],
["H5-J",0,4,100,0,0x0,0x0,11],
["H5-K",0,4,100,0,0x0,0x0,11],

["N5-1",26,1,4544,3120,0x1,0x20,10],
["N5-A",26,2,4499,3040,0x1,0x8,10],
["N5-E",26,0,4552,3130,0x50,0x1,10],
["N5-2",26,0,4646,3130,0x28,0x40,10],
["N5-B",27,0,4808,3140,0x1,0x10,10],
["N5-3",27,3,4779,3150,0x50,0x1,10],
["N5-C",27,3,4899,3130,0x0,0x20,10],
["N5-4",27,2,4874,3110,0x28,0x0,10],
["N5-D",27,1,4892,3110,0x28,0x40,10],
["N5-5",27,1,4908,3090,0x40,0x0,10],
["N5-F",0,4,100,0,0x0,0x0,10],
["N5-G",0,4,100,0,0x0,0x0,10],
["N5-H",0,4,100,0,0x0,0x0,10],
["N5-I",0,4,100,0,0x0,0x0,10],
["N5-J",0,4,100,0,0x0,0x0,10],
["N5-K",0,4,100,0,0x0,0x0,10],

["T4-1",0,0,3920,0,0x0,0x0,99],
["T4-A",0,2,4018,0,0x0,0x0,99],
["T4-E",0,3,4343,0,0x0,0x0,99],
["T4-2",0,1,3914,0,0x0,0x0,99],
["T4-B",0,0,4157,0,0x0,0x0,99],
["T4-3",0,1,4072,0,0x0,0x0,99],
["T4-C",0,1,4284,0,0x0,0x0,99],
["T4-4",0,3,4347,0,0x0,0x0,99],
["T4-D",0,2,4323,0,0x0,0x0,99],
["T4-5",0,4,4579,0,0x0,0x0,99],
["T4-F",0,4,100,0,0x0,0x0,99],
["T4-G",0,4,100,0,0x0,0x0,99],
["T4-H",0,4,100,0,0x0,0x0,99],
["T4-I",0,4,100,0,0x0,0x0,99],
["T4-J",0,4,100,0,0x0,0x0,99],
["T4-K",0,4,100,0,0x0,0x0,99],

["H4-1",41,1,7208,4790,0x60,0x0,8],
["H4-A",41,1,7275,4780,0x8,0x40,8],
["H4-E",41,3,7253,4840,0x11,0x8,8],
["H4-2",41,0,7278,4840,0x41,0x0,8],
["H4-B",41,2,7268,4900,0x30,0x1,8],
["H4-F",41,1,7294,4820,0x1,0x10,8],
["H4-3",41,2,7297,4740,0x1,0x8,8],
["H4-C",41,3,7328,4770,0x60,0x0,8],
["H4-G",41,0,7367,0,0x20,0x10,8],
["H4-4",41,0,7439,4750,0x48,0x0,8],
["H4-D",42,2,7581,4770,0x0,0x20,8],
["H4-H",42,1,7607,0,0x8,0x20,8],
["H4-5",42,3,7678,4830,0x18,0x40,8],
["H4-I",0,4,100,0,0x0,0x0,8],
["H4-J",0,4,100,0,0x0,0x0,8],
["H4-K",0,4,100,0,0x0,0x0,8],

["N4-1",25,2,4211,2740,0x0,0x10,6],
["N4-A",25,0,4218,2790,0x60,0x0,6],
["N4-E",25,1,4234,2720,0x8,0x40,6],
["N4-2",25,0,4265,2760,0x0,0x20,6],
["N4-B",25,3,4319,2820,0x41,0x8,6],
["N4-F",25,1,4331,5500,0x10,0x1,6],
["N4-3",25,1,4348,2770,0x9,0x40,6],
["N4-C",26,3,4535,2890,0x8,0x10,6],
["N4-G",26,3,4551,0,0x50,0x1,6],
["N4-4",26,1,4609,2860,0x10,0x20,6],
["N4-D",26,0,4559,2950,0x31,0x0,6],
["N4-H",26,0,4596,0,0x20,0x0,6],
["N4-5",26,2,4616,2860,0x48,0x0,6],
["N4-I",0,4,100,0,0x0,0x0,6],
["N4-J",0,4,100,0,0x0,0x0,6],
["N4-K",0,4,100,0,0x0,0x0,6],

["T3-1",41,0,7090,4600,0x20,0x10,9],
["T3-F",41,0,7184,4780,0x40,0x1,9],
["T3-2",41,1,7281,4640,0x48,0x20,9],
["T3-A",41,2,7152,4570,0x11,0x0,9],
["T3-3",0,1,4072,0,0x0,0x0,9],
["T3-B",0,0,4157,0,0x0,0x0,9],
["T3-C",0,1,4284,0,0x0,0x0,9],
["T3-G",0,4,100,0,0x0,0x0,9],
["T3-4",0,3,4347,0,0x0,0x0,9],
["T3-D",0,2,4323,0,0x0,0x0,9],
["T3-E",0,3,4343,0,0x0,0x0,9],
["T3-5",0,4,4579,0,0x0,0x0,9],
["T3-H",0,4,100,0,0x0,0x0,9],
["T3-I",0,4,100,0,0x0,0x0,9],
["T3-J",0,4,100,0,0x0,0x0,9],
["T3-K",0,4,100,0,0x0,0x0,9],

["H3-1",37,0,6334,4070,0x28,0x0,5],
["H3-F",37,0,6346,4250,0x40,0x20,5],
["H3-H",37,0,6357,4110,0x10,0x1,5],
["H3-2",37,1,6325,4080,0x11,0x0,5],
["H3-A",38,2,6493,4210,0x20,0x8,5],
["H3-3",38,1,6580,4190,0x40,0x10,5],
["H3-B",39,0,6716,4370,0x1,0x20,5],
["H3-C",40,1,6924,4480,0x20,0x40,5],
["H3-G",40,2,6959,4450,0x11,0x40,5],
["H3-I",40,0,6988,4390,0x8,0x0,5],
["H3-4",40,3,7027,4370,0x8,0x1,5],
["H3-D",40,2,6985,4350,0x48,0x0,5],
["H3-E",40,3,7018,4540,0x11,0x8,5],
["H3-5",41,3,7397,4460,0x60,0x10,5],
["N3-J",0,4,100,0,0x0,0x0,5],
["N3-K",0,4,100,0,0x0,0x0,5],

["N3-1",19,1,3114,1940,0x1,0x20,4],
["N3-H",19,0,3137,1980,0x20,0x0,4],
["N3-F",19,3,3127,2000,0x48,0x0,4],
["N3-2",19,0,3141,1960,0x10,0x40,4],
["N3-A",19,2,3158,2560,0x0,0x0,4],
["N3-3",20,3,3344,2050,0x28,0x0,4],
["N3-B",20,0,3398,2670,0x11,0x0,4],
["N3-C",21,1,3553,2200,0x60,0x8,4],
["N3-G",21,1,3599,2170,0x11,0x0,4],
["N3-I",21,0,3584,2220,0x48,0x18,4],
["N3-4",22,2,3737,2300,0x48,0x10,4],
["N3-D",22,3,3752,2200,0x11,0x20,4],
["N3-E",23,1,3949,2420,0x0,0x40,4],
["N3-5",24,2,4238,2530,0x20,0x1,4],
["N3-J",0,4,100,0,0x0,0x0,4],
["N3-K",0,4,100,0,0x0,0x0,4],

["T2-1",37,3,6121,4130,0x40,0x20,7],
["T2-F",37,2,6072,3980,0x8,0x1,7],
["T2-G",37,0,6284,3950,0x20,0x0,7],
["T2-H",38,1,6598,4060,0x48,0x0,7],
["T2-2",38,1,6494,4220,0x1,0x40,7],
["T2-A",38,0,6400,4250,0x8,0x1,7],
["T2-3",39,0,6897,4210,0x1,0x0,7],
["T2-B",40,3,6870,4500,0x18,0x0,7],
["T2-C",40,0,6940,4440,0x50,0x8,7],
["T2-I",40,2,6892,4260,0x30,0x8,7],
["T2-4",40,1,6996,4320,0x20,0x10,7],
["T2-D",40,2,7035,4430,0x40,0x20,7],
["T2-E",40,1,7051,4290,0x11,0x40,7],
["T2-J",40,3,7019,4350,0x21,0x10,7],
["T2-K",40,3,7302,4450,0x40,0x20,7],
["T2-5",41,2,7360,4390,0x1,0x40,7],

["H2-1",22,3,3690,1730,0x21,0x8,3],
["H2-F",28,1,4720,2480,0x1,0x0,3],
["H2-G",28,0,4771,2540,0x20,0x0,3],
["H2-H",28,3,4785,2480,0x41,0x8,3],
["H2-2",23,1,3814,1800,0x40,0x10,3],
["H2-A",24,0,4057,2830,0x0,0x20,3],
["H2-3",28,2,4612,2900,0x8,0x40,3],
["H2-B",29,1,4820,3070,0x10,0x1,3],
["H2-C",29,4,4861,2140,0x28,0x0,3],
["H2-I",29,2,4947,2600,0x10,0x0,3],
["H2-4",31,0,5318,2210,0x50,0x0,3],
["H2-D",36,3,6011,4280,0x1,0x0,3],
["H2-E",36,2,6086,1860,0x9,0x10,3],
["H2-J",34,1,5792,3020,0x28,0x0,3],
["H2-K",35,0,5980,3210,0x48,0x0,3],
["H2-5",36,2,6105,2430,0x50,0x20,3],

["N2-1",12,2,668,630,0x20,0x10,2],
["N2-F",12,2,815,580,0x28,0x0,2],
["N2-G",12,1,843,490,0x10,0x0,2],
["N2-H",13,0,906,550,0x21,0x8,2],
["N2-2",12,1,747,630,0x8,0x20,2],
["N2-A",13,3,877,890,0x9,0x40,2],
["N2-3",13,0,899,900,0x50,0x1,2],
["N2-B",14,2,1085,950,0x20,0x0,2],
["N2-C",15,4,1143,810,0x40,0x0,2],
["N2-I",13,3,1076,670,0x48,0x10,2],
["N2-4",16,1,1301,870,0x21,0x8,2],
["N2-D",17,0,1431,1590,0x0,0x0,2],
["N2-E",18,3,1486,800,0x10,0x20,2],
["N2-J",17,2,1489,1140,0x11,0x20,2],
["N2-K",17,2,1510,1100,0x40,0x1,2],
["N2-5",20,4,1904,1110,0x9,0x40,2],

["T1-1",0,2,523,0,0x0,0x0,99],
["T1-2",0,1,589,0,0x0,0x0,99],
["T1-A",0,0,664,0,0x0,0x0,99],
["T1-3",0,3,748,0,0x0,0x0,99],
["T1-B",0,1,950,0,0x0,0x0,99],
["T1-C",0,0,1142,0,0x0,0x0,99],
["T1-D",0,3,1436,0,0x0,0x0,99],
["T1-4",0,2,1215,0,0x0,0x0,99],
["T1-5",0,4,1292,0,0x0,0x0,99],
["T1-E",0,4,100,0,0x0,0x0,99],
["T1-F",0,4,100,0,0x0,0x0,99],
["T1-G",0,4,100,0,0x0,0x0,99],
["T1-H",0,4,100,0,0x0,0x0,99],
["T1-I",0,4,100,0,0x0,0x0,99],
["T1-J",0,4,100,0,0x0,0x0,99],
["T1-K",0,4,100,0,0x0,0x0,99],

["H1-1",12,2,980,990,0x0,0x0,1],
["H1-2",13,1,1367,1050,0x48,0x0,1],
["H1-A",14,0,1764,1160,0x41,0x8,1],
["H1-3",15,3,1984,1230,0x20,0x10,1],
["H1-B",19,1,2514,1650,0x10,0x20,1],
["H1-C",22,0,2945,1410,0x8,0x40,1],
["H1-D",24,3,3243,1350,0x11,0x8,1],
["H1-4",23,2,3166,1540,0x20,0x1,1],
["H1-5",24,4,3379,1660,0x41,0x0,1],
["H1-E",0,4,100,0,0x0,0x0,1],
["H1-F",0,4,100,0,0x0,0x0,1],
["H1-G",0,4,100,0,0x0,0x0,1],
["H1-H",0,4,100,0,0x0,0x0,1],
["H1-I",0,4,100,0,0x0,0x0,1],
["H1-J",0,4,100,0,0x0,0x0,1],
["H1-K",0,4,100,0,0x0,0x0,1],

["N1-1",6,0,180,300,0x0,0x0,0],
["N1-2",6,1,390,300,0x0,0x10,0],
["N1-A",7,2,620,350,0x8,0x20,0],
["N1-3",7,3,950,350,0x18,0x40,0],
["N1-B",8,0,782,560,0x30,0x1,0],
["N1-C",9,1,1079,460,0x60,0x0,0],
["N1-D",11,3,1419,510,0x0,0x8,0],
["N1-4",9,2,1181,460,0x41,0x0,0],
["N1-5",11,4,1478,570,0x1,0x0,0],
["N1-E",0,4,100,0,0x0,0x0,0],
["N1-F",0,4,100,0,0x0,0x0,0],
["N1-G",0,4,100,0,0x0,0x0,0],
["N1-H",0,4,100,0,0x0,0x0,0],
["N1-I",0,4,100,0,0x0,0x0,0],
["N1-J",0,4,100,0,0x0,0x0,0],
["N1-K",0,4,100,0,0x0,0x0,0],

	];

	var titleText =["戦挙区","消費","職業","EXP","Gold","EXP/M","Gold/M"];
	var typeText=["近接","射撃","魔法","重装","なし"];
	var rows=[];
	var cnt=0;
	var colorCode=["#B0C4DE","#E0E0E0","#C0C0FF","#E0E0FF","#C0FFC0","#E0FFE0", "#FF4040", "#4040FF", "#FF8080", "#FFC0C0","#C0C0FF","#C0FFC0","#FFC0C0","#FFFFC0"];
	var colorChange=[6, 0, 2];

function setTableData( inTbl, inDate, inDay ){
	var selectrare = document.inputform.srare.value;
	var selectstage = document.inputform.stagesel.value;
    inDay = 1 << inDay;

	for(var i=0;i<chrTable.length;i++){
		if(( selectrare==1 ) & ( chrTable[i][4] != "N" ) ) {
			continue;
		}
		if(( selectrare==2 ) & ( chrTable[i][4] != "R" ) ) {
			continue;
		}
		if(( selectrare==3 ) & ( chrTable[i][4] != "SR" ) ) {
			continue;
		}
		
		if( (chrTable[i][0] == inDate) || (chrTable[i][1] == inDate) ) {
			// 行の追加
			rows.push(inTbl.insertRow(-1));
			
			// キャラ情報の追加
			{
				var celchr=rows[cnt].insertCell(-1);
				var imgTag = document.createElement("img");
				imgTag.src = "icon/" + chrTable[i][5];
				imgTag.width = 90;
				imgTag.height = 90;
				celchr.setAttribute("rowSpan", 6);
				celchr.appendChild(imgTag);

				var cell=rows[cnt].insertCell(-1);
				var chtxt = chrTable[i][2] + '  ' + typeText[chrTable[i][3]] + '  ' + chrTable[i][4];
				cell.appendChild(document.createTextNode(chtxt));
				cell.setAttribute("colSpan", 3);
				if( chrTable[i][3] == 0) {
					cell.style.backgroundColor=colorCode[10];
				}
				if( chrTable[i][3] == 1) {
					cell.style.backgroundColor=colorCode[11];
				}
				if( chrTable[i][3] == 2) {
					cell.style.backgroundColor=colorCode[12];
				}
				if( chrTable[i][3] == 3) {
					cell.style.backgroundColor=colorCode[13];
				}
				cell.style.color=colorCode[7];
				cell.style.fontWeight="bold";
			}

			var wktbl=[[0,"N0-0"]];
			
			for( var j=0; j<stageTable.length;j++){
				// EXP/M
				var subtbl=[[0,"",0,0]];
				var work = 0;
				var gold = 0;
				
				if( selectstage <= stageTable[j][7]) {
					continue;
				}
				if( stageTable[j][1]!=0){
					if(stageTable[j][5]&inDay){
						work = stageTable[j][3]*13;
						work = Math.round(work / 10);
					}
					else {
						work = stageTable[j][3];
					}
					if( stageTable[j][6]&inDay) {
						gold = stageTable[j][4]*13;
						gold = Math.round(gold / 10);
					}
					else {
						gold = stageTable[j][4];
					}
					if( chrTable[i][3]==stageTable[j][2]){
						work = work*13;
						work = Math.round(work / 10);
					}
					work = work / stageTable[j][1]*100;
					work = Math.round( work );
					work = work / 100;
					gold = gold / stageTable[j][1]*100;
					gold = Math.round( gold );
					gold = gold / 100;
					
					subtbl[0] = work;
					subtbl[1] = stageTable[j][0];
					subtbl[2] = gold;
					subtbl[3] = j;
					wktbl.push(subtbl);
				}
			}
			wktbl.sort(function(a, b){return b[0]-a[0];});
			cnt++;			
			// 行の追加
			rows.push(inTbl.insertRow(-1));
			{
				var pcolor = colorChange[ Math.floor(wktbl[0][3] / 16 ) % 3 ] + 2;
				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[0][1]));
				cell.style.backgroundColor=colorCode[pcolor ];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";

				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[0][0] + 'exp'));
				cell.style.backgroundColor=colorCode[3];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";

				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[0][2] + 'G'));
				cell.style.backgroundColor=colorCode[3];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";
			}
			cnt++;
			// 行の追加
			rows.push(inTbl.insertRow(-1));
			{
				var pcolor = colorChange[ Math.floor(wktbl[1][3] / 16 ) % 3 ] + 2;
				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[1][1]));
				cell.style.backgroundColor=colorCode[pcolor];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";

				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[1][0] + 'exp'));
				cell.style.backgroundColor=colorCode[3];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";

				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[1][2] + 'G'));
				cell.style.backgroundColor=colorCode[3];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";
			}
			cnt++;
			// 行の追加
			rows.push(inTbl.insertRow(-1));
			{
				var pcolor = colorChange[ Math.floor(wktbl[2][3] / 16 ) % 3 ] + 2;
				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[2][1]));
				cell.style.backgroundColor=colorCode[pcolor];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";

				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[2][0] + 'exp'));
				cell.style.backgroundColor=colorCode[3];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";

				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[2][2] + 'G'));
				cell.style.backgroundColor=colorCode[3];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";
			}
			cnt++;
			// 行の追加
			rows.push(inTbl.insertRow(-1));
			{
				var pcolor = colorChange[ Math.floor(wktbl[3][3] / 16 ) % 3 ] + 2;
				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[3][1]));
				cell.style.backgroundColor=colorCode[pcolor];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";

				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[3][0] + 'exp'));
				cell.style.backgroundColor=colorCode[3];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";

				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[3][2] + 'G'));
				cell.style.backgroundColor=colorCode[3];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";
			}
			cnt++;
			// 行の追加
			rows.push(inTbl.insertRow(-1));
			{
				var pcolor = colorChange[ Math.floor(wktbl[4][3] / 16 ) % 3 ] + 2;
				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[4][1]));
				cell.style.backgroundColor=colorCode[pcolor];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";

				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[4][0] + 'exp'));
				cell.style.backgroundColor=colorCode[3];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";

				var cell=rows[cnt].insertCell(-1);
				cell.appendChild(document.createTextNode(wktbl[4][2] + 'G'));
				cell.style.backgroundColor=colorCode[3];
				cell.style.textAlign="center";
				cell.style.fontWeight="bold";
			}
			cnt++;
		}
	}
}

function ResetTable(){
	"use strict";
	// 日付と曜日の取得
	var nowTime = new Date();
	var newTime = new Date();
	
	var offsetday = document.inputform.dayplus.value;
	var offTime = 1000*60*60*24*offsetday;
	
	nowTime.setTime(nowTime.getTime()+offTime);
	newTime.setTime(newTime.getTime()+offTime);

	var nowDate = nowTime.getDate();
	var nowDay = nowTime.getDay();
	var oldDate = nowDate;
	var nowHours = nowTime.getHours();
	var nowMonth = nowTime.getMonth()+1;
	var oldMonth = nowMonth;

	cnt = 0;
	rows.length = 0;
	
	// 4時より前の場合、前日の日付を取得
	if( nowHours < 4 ) {
		nowTime.setHours(-1);
		oldDate = nowTime.getDate(); 
		oldMonth = nowTime.getMonth()+1;
	}

	// 既存のテーブルを削除
	var delexptable = document.getElementById("exp-table");
	if(delexptable != null ) {
		delexptable.parentNode.removeChild( delexptable );
	}

// ここで表用のデータを作成する
// ここで日替わりテーブルの内容を作成する
	var exptable= document.createElement( 'table' );
	exptable.id = "exp-table";
	// 当日の0:00～3:59分
	if( nowHours < 4 ) {
		rows.push(exptable.insertRow(-1));
		{
			var cell=rows[cnt].insertCell(-1);
			var chtxt = nowMonth + '/' + nowDate + ' 0:00～3:59';
			cell.appendChild(document.createTextNode(chtxt));
			cell.setAttribute("colSpan", 4);
			cell.style.backgroundColor=colorCode[4];
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
		cell.setAttribute("colSpan", 4);
			cell.style.backgroundColor=colorCode[4];
			cell.style.fontWeight="bold";
	}
	cnt++;
	
	setTableData( exptable, nowDate, nowDay);

	// 翌日の0:00～3:59分
	// 翌日の日付を取得する
	newTime.setTime(newTime.getTime() +60*1000*60*24);
	var newDay=newTime.getDay();
	var newDate=newTime.getDate();
	var newMonth=newTime.getMonth()+1;

	rows.push(exptable.insertRow(-1));
	{
		var cell=rows[cnt].insertCell(-1);
		var chtxt = newMonth + '/' + newDate + ' 0:00～03:59';
		cell.appendChild(document.createTextNode(chtxt));
		cell.setAttribute("colSpan", 4);
		cell.style.backgroundColor=colorCode[4];
		cell.style.fontWeight="bold";
	}
	cnt++;
	
	setTableData( exptable, nowDate, newDay);

	// 翌日の4:00～23:59分
	rows.push(exptable.insertRow(-1));
	{
		var cell=rows[cnt].insertCell(-1);
		var chtxt = newMonth + '/' + newDate + ' 4:00～23:59';
		cell.appendChild(document.createTextNode(chtxt));
		cell.setAttribute("colSpan", 4);
		cell.style.backgroundColor=colorCode[4];
		cell.style.fontWeight="bold";
	}
	cnt++;

	setTableData( exptable, newDate, newDay);

	// テーブルへの登録
	document.getElementById("exp-info").appendChild(exptable);

	var delalltable = document.getElementById("stage-table");
	if(delalltable != null ) {
		delalltable.parentNode.removeChild( delalltable );
	}
// ここでステージ一覧テーブルの内容を作成する
	var alltable= document.createElement( 'table' );
	var allrows=[];
	cnt=0;
	var offcol=0;
	alltable.id = "stage-table";

	// タイトル行の追加
	allrows.push(alltable.insertRow(-1));
	for(var j=0;j<titleText.length;j++){
		// 追加した行にセルを追加してテキストを書き込む
		var cell=allrows[0].insertCell(-1);
		cell.appendChild(document.createTextNode(titleText[j]));
		cell.style.backgroundColor=colorCode[0];
	}

	// ドロップダウンリストからステージ制限を読み出す。
	var selectstage = document.inputform.stagesel.value;

	// 曜日をビットフラグに更新
	nowDay = 1 << nowDay;
		
	for(var i=0;i<stageTable.length;i++){
		var chk = Math.floor(i / 16) % 3;

		// イベント中は色指定を入れ替えてみる
		if( chk == 0 ){
			offcol=6;
		} else if( chk == 1 ){
			offcol=0;
		} else {
			offcol=2;
		}
		
		//	指定制限より難しいステージは表示対象外にする
		if( selectstage <= stageTable[i][7]) {
			continue;
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
				if(stageTable[i][5]&nowDay) {
					work = stageTable[i][3]*13;
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
				if( stageTable[i][6]&nowDay) {
					work = stageTable[i][4]*13;
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
				if( stageTable[i][5]&nowDay) {
					work = stageTable[i][3]*13;
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
				if( stageTable[i][6]&nowDay) {
					work = stageTable[i][4]*13;
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


};

(function(){
	ResetTable();
	})();
