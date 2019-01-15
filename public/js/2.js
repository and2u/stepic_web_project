var height=0;
var width=0;
if (self.screen) { // for NN4 and IE4
	width = screen.width;
	height = screen.height;
}
else if (self.java) { // for NN3 with enabled Java
	var jkit = java.awt.Toolkit.getDefaultToolkit();
	var scrsize = jkit.getScreenSize();       
	width = scrsize.width; 
	height = scrsize.height; 
}
if (width <=0 || height <=0) { width = 640; height = 480; } 
function openwin (url) {
	var w=width-40;
	var h=height-80;
	window.open(url,'Galery','scrollbars,resizable,width='+w+',height='+h+',left=20,top=20');
}