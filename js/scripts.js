// scripts.js

function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
}

	var $phoneList = $('<ul class="phone-list"></ul>');

Phone.prototype.printInfo = function() {

	var listElement = "The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".";

	$phoneList.append('<li>'+ listElement +'</li>');

	$('h1').after($phoneList);
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var GalaxyS8 = new Phone("Samsung", 2000, "black");
var MotoZ = new Phone("Motorola", 1500, "red");

var pageHeader = document.getElementsByTagName('h1');
	pageHeader[0].innerHTML ="Phone's list: "

iPhone6S.printInfo();
MotoZ.printInfo();
GalaxyS8.printInfo();

var liStyle = $("li");
    liStyle.each(function(index, element) {

      $("li").css({"marign-left": "100px", "text-align": "left"});
});


function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function () {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		this.$element.appendTo($('body'));
	}
}

var btn1 = new Button('Hello!');

btn1.create();
