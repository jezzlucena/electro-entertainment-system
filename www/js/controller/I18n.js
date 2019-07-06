var I18n = {};

I18n.init = function(opt){
	I18n.languageCode = opt.languageCode;

	I18nDAO.findLanguageByCode({
		languageCode: I18n.languageCode,
		successCallback: function(data){
			I18n.list = data;
		},
		errorCallback: function(){},
	});
};