tabris.ui.myPages["launcher"] = function() {
var page = tabris.create("Page", {
	title: "ZegAppDemo",
	topLevel: true,
	image: "res/images/inditoikon.png",
});

var pageHeight = tabris.ui.pageCreateSurrounds(page);

var icons = [
	{
		label: "Info",
		image: "res/images/info.png",
		opener: tabris.ui.myPages["freetime"],
	},
	{
		label: "Turizmus",
		image: "res/images/turizmus.png",
		opener: tabris.ui.myPages["freetime"],
	},

	{
		label: "Programok",
		image: "res/images/programok.png",
		opener: tabris.ui.myPages["freetime"],
	},
	{
		label: "Szabadidő",
		image: "res/images/szabadido.png",
		opener: tabris.ui.myPages["freetime"],
	},

	{
		label: "E-bejelentés",
		image: "res/images/ebejelentes.png",
		opener: tabris.ui.myPages["ereport"],
	},
	{
		label: "Szavazás",
		image: "res/images/chart.png",
		opener: tabris.ui.myPages["freetime"],
	},
	
];

page.set("iconStructure", {icons: icons, pageHeight: pageHeight, columns: 2, rows: 3, top: 7, left: 10});
tabris.ui.openMyPage(page);
}
