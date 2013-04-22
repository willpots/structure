/*
Javascript Data Structures
structure.js

Author: Will Potter


*/

// Vector Implementation
var Vector = function() {
	this.data = [];
}
Vector.prototype = {
	get: function(i) {
		return this.data[i];
	},
	set: function(i, val) {
		this.data[i] = val;
	},
	remove: function(i) {
		val = this.data[i];
		for (var j = i; j < this.data.length - 1; j++) {
			this.data[j] = this.data.[j + 1];
		}
		this.data[this.data.length - 1] = undefined;
	},
	size: function() {
		return this.data.length;
	}
}

var Stack = function() {
	this.data = []
	this.last = 0;
}
