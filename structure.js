/*
Javascript Data Structures
structure.js

Author: Will Potter


*/

// Vector Implementation
var Vector = function() {
    this.data = Array();
};
Vector.prototype = {
    constructor: Vector,
    get: function(i) {
        return this.data[i];
    },
    set: function(i, val) {
        this.data[i] = val;
    },
    add: function(i) {
        this.data[this.data.length] = i;
    },
    remove: function(i) {
        val = this.data[i];
        for (var j = i; j < this.data.length - 1; j++) {
            this.data[j] = this.data[j + 1];
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
};

// Stack Implementation
var Stack = function() {
    this.data = Array()
    this.size = 0;
};
Stack.prototype = {
    constructor: Stack,
    push: function(val) {
        this.data[this.size] = val;
        this.size++;
    },
    pop: function() {
        this.size--;
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
};

// Queue Implementation
var Queue = function() {
    this.data = Array();
    this.start = 0;
    this.end = 0;
};
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
};

// SinglyLinkedList
var SinglyLinkedList = function(val, next) {
    this.val = val;
    this.next = next || null;
};
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
};

// DoublyLinkedList
var DoublyLinkedList = function(val, prev, next) {
    this.val = val;
    this.prev = prev || null;
    this.next = next || null;
};
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
};

var BinarySearchTree = function(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
};
BinarySearchTree.prototype = {
    constructor: BinarySearchTree,

    leaf: function() {
        if(this.left == null && this.right == null) {
            return true;
        } else {
            return false;
        }
    },
    insert: function(val) {
        if(val > this.val) {
            if(this.right == null) {
                this.right = new BinarySearchTree(this.val, null, null);
            } else {
                this.right.insert(val);
            }
        } else {
            if(this.left == null) {
                this.left = new BinarySearchTree(this.val, null, null);
            } else {
                this.left.insert(val);
            }
        }
    },
    search: function(val) {
        if(this.val == val) {
            return true;
        } else if(val > this.val) {
            if(this.right) {
                return this.right.search(val);
            } else {
                return false;
            }
        } else if(val <= this.val) {
            if(this.left) {
                return this.left.search(val);
            } else {
                return false;
            }
        }
    }

};








