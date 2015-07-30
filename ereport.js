tabris.ui.openPageEreport = function() {

var page = tabris.create("Page", {
	title: "E-bejelentés",
	topLevel: false,
	image: "res/images/ebejelentes.png",
});
// tabris.ui.pageCreateSurrounds(page);

var watchID = "";
var pickedIndex = 0;
var pos = {
	lat: "?",
	lng: "?",
	alt: "?",
}

page.on("appear", function(widget) {
	tabris.ui.getLocation(function(position) {
		pos.lat = position.coords.latitude;
		pos.lng = position.coords.longitude;
		pos.alt = position.coords.altitude;
		textPosition.set("text", pos.lat + "," + pos.lng);
	});
	/*
	watchID = tabris.ui.startLocationWatch(function(location) {
		pos = location;
		tabris.ui.stopLocationWatch(watchID);
		watchID = "";
		textPosition.set("text", pos.x + "," + pos.y);
	});
	*/
});
/*
page.on("disappear", function(widget) {
	tabris.ui.stopLocationWatch(watchID);
});
*/


var picker = tabris.create("Picker", {
  layoutData: {left: "15%", top: "3%", right: "15%"},
  items: ["Bejelentés típusa...",
		"Illegálisan lerakott hulladék",
        "Parlagfű",
        "Roncsautó",
        "Közúton levő kátyú",
        "Utcanév tábla",
        "Kóbor/elhullott és veszélyes állat",
        "Illegális építkezés",
        "Egyéb, lakosságot érintő közügy",
	],
  selection: "Bejelentés típusa..."
}).on("change:selectionIndex", function(picker, itemindex) {
	pickedIndex = itemindex;
}).appendTo(page);

var inputReport = tabris.create("TextInput", {
	layoutData: {left: "15%", top: [picker, 5], right: "15%", bottom: "60%"},
	alignment: "left",
	message: "A bejelentés szövege...",
	type: "multiline",
}).appendTo(page);

var textPhoto = tabris.create("TextView", {
	layoutData: {left: 0, top: [inputReport, 10], right: 0},
	alignment: "center",
	markupEnabled: true,
	text: "<i>Fotó mellékelése</i>",
	maxLines: 1,
}).appendTo(page);

var imagePhoto = tabris.create("ImageView", {
	image: {src: "res/images/camera.png"},
	layoutData: {left: "15%", right: "15%", top: [textPhoto, 3], bottom: "20%"},
	highlightOnTouch: true,
	scaleMode: "fit", // "auto" "stretch",
}).appendTo(page)
.on("tap", function() { tabris.ui.takePicture(imagePhoto); });

var textPosition = tabris.create("TextView", {
	layoutData: {left: 0, top: [imagePhoto, 3], right: 0},
	alignment: "center",
	text: pos.lat + "," + pos.lng,
	maxLines: 1,
}).appendTo(page);

tabris.create("Button", {
    text: "Bejelentés küldés...",
    layoutData: {centerX: 0, top: [textPosition, 5]},
}).appendTo(page)
.on("select", function() {
	tabris.ui.showMessage({
		title: "Bejelentés küldés..",
		message: "Valóban elküldi a bejelentést?",
		buttons: ["OK", "Mégse"],
		callback: function(buttonIndex) {
			if (buttonIndex == 1) {
				tabris.ui.showMessage({message: "Köszönjük. Bejelentését továbbítottuk..."});
				console.log(picker.get("items")[pickedIndex]);
				console.log(inputReport.get("text"));
				console.log(pos.x + "," + pos.y);
			} else
				directions.navigateTo("51.50722", "-0.12750");
		},
	});
});



page.open();

}
