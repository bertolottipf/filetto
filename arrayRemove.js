Array.prototype.remove = function(num) {
	this[num] = null;
	return this;
};
