tabris.ui.myPages["freetime"] = function() {
var page = tabris.create("Page", {
	title: "Szabadidő",
	topLevel: false,
	image: "res/images/szabadido.png",
});

var pageHeight = tabris.ui.pageCreateSurrounds(page);

var icons = [
	{
		label: "Mozi",
		image: "res/images/mozi.png",
		opener: tabris.ui.myPages["freetime"],
	},
	{
		label: "Színház",
		image: "res/images/szinhaz.png",
		opener: tabris.ui.myPages["freetime"],
	},
	{
		label: "Sportlehetőségek",
		image: "res/images/sportolasilehetoseg.png",
		opener: tabris.ui.myPages["freetime"],
	},

	{
		label: "Szórakozóhelyek",
		image: "res/images/szorakozohelyek.png",
		opener: tabris.ui.myPages["freetime"],
	},
	{
		label: "Bevásárlás",
		image: "res/images/shop.png",
		opener: tabris.ui.myPages["freetime"],
	},
	{
		label: "Felüdülés",
		image: "res/images/vendeglatas.png",
		opener: tabris.ui.myPages["freetime"],
	},

	{
		label: "Múzeumok",
		image: "res/images/muzeum.png",
		opener: tabris.ui.myPages["freetime"],
	},
	{
		label: "Kiállítóhelyek",
		image: "res/images/kiallitohelyek.png",
		opener: tabris.ui.myPages["freetime"],
	},
	{
		label: "Építészet",
		image: "res/images/epiteszetilatnivalok.png",
		opener: tabris.ui.myPages["freetime"],
	},
	
	{
		label: "Természeti érték",
		image: "res/images/latnivalok.png",
		opener: tabris.ui.myPages["freetime"],
	},
	
];

page.set("iconStructure", {icons: icons, pageHeight: pageHeight, columns: 3, rows: 4, top: 3, left: 3});
tabris.ui.openMyPage(page);
}
