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
	constructor: Vector,
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
	},
	empty: function() {
		if (this.size == 0) {
			return true;
		} else {
			return false;
		}
	}
}

// Stack Implementation
var Stack = function() {
	this.data = []
	this.size = 0;
}
Stack.prototype = {
	constructor: Stack,
	push: function(val) {
		this.data[this.size] = val;
		this.size++;
	},
	pop: function() {
]		this.size--;
 		return this.data[this.size]
	},
	size: function() {
		return this.size;
	},
	empty: function() {
		if (this.size == 0) {
			return true;
		} else {
			return false;
		}
	}
}

// Queue Implementation
var Queue = function() {
	this.data = [];
	this.start = 0;
	this.end = 0;
}
Queue.prototype = {
	constructor: Queue,
	enqueue: function(val) {
		this.data[this.end] = val;
		this.end++;
	},
	dequeue: function() {
		val = this.data[this.start];
		this.start++;
		return val;
	},
	size: function() {
		return this.end - this.start;
	}
}

var SinglyLinkedList = function(val, next) {
	this.val = val;
	this.next = next || null;
}
SinglyLinkedList.prototype = {
	constructor:SinglyLinkedList,

	insert: function(val) {
		return new SinglyLinkedList(val, this);
	},
	search: function(val) {
		if (val == this.val) {
			return this;
		} else if (this.next == null) {
			return null;
		} else {
			return this.next.search(val);
		}
	},
	remove: function(val) {
		if (this.val == val) {
			return this.next;
		} else {
			return new SinglyLinkedList(this.val, this.next.remove(val));
		}
	}
}

var DoublyLinkedList = function(val, prev, next) {
	this.val = val;
	this.prev = prev || null;
	this.next = next || null;
}
DoublyLinkedList.prototype = {
	constructor:DoublyLinkedList,

	insert: function(val) {
		var prev = this.prev;
		this.prev = null;
		return new DoublyLinkedList(val, prev, this);
	},
	search: function(val) {
		if (val == this.val) {
			return this;
		} else if (this.next == null) {
			return null;
		} else {
			return this.next.search(val);
		}
	},
	remove: function(val) {
		if (this.val == val) {
			this.next.prev = this.prev;
			return this.next;
		} else {
			return new DoublyLinkedList(this.val, this.prev, this.next.remove(val));
		}
	}
}