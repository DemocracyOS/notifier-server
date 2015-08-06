module.exports = {
	start: function (port, callback) {
		this._server.listen(port, callback);
	}
};