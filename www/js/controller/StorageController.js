var StorageController = {};

StorageController.setParameter = function(key, value){
	window.localStorage[key] = value;
};

StorageController.getParameter = function(key){
	return window.localStorage[key];
};