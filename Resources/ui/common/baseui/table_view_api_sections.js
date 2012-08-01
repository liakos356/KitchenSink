function tv_api_sections() {
	var isBlackberry = Titanium.Platform.name === 'blackberry';
	var win = Ti.UI.createWindow();
	
	//Seems Ti.UI.createTableViewSection() doesn't working for BB
	var section1 = Ti.UI.createTableViewSection({
		headerTitle:'Header 1'
	});
	for (var i=0; i < 4; i++) {
		var row = {title:'Row '+i};
		if (!isBlackberry) {
			row = Ti.UI.createTableViewRow({
				title:'Row '+i
			});
		}
		section1.add(row);
	}
	
	var section2 = Ti.UI.createTableViewSection();
	for (var i=4; i < 10; i++) {
		var row = {title:'Row '+i};
		if (!isBlackberry) {
			row = Ti.UI.createTableViewRow({
				title:'Row '+i
			});
		}
		section2.add(row);
	}
	
	var tv = Ti.UI.createTableView({
		data:[section1,section2]
	});
	win.add(tv);
	return win;
};

module.exports = tv_api_sections;