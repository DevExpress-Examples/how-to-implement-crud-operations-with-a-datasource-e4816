(function ($, DX) {
    var dbImpl = {
        url: 'http://localhost:59611/Categories',
        _sendRequest: function (type, params) {
            var deferred = new $.Deferred();
            var requestSettings = {
                url: $.trim(dbImpl.url),
                type: type,
                dataType: 'json',
                success: function (data) {
                    deferred.resolve(data);
                }
            };
            if (params) {
                if (type == 'DELETE') {
                    if (requestSettings.url[requestSettings.url.length - 1] != '/')
                        requestSettings.url += '/';
                    requestSettings.url += params.toString();
                }
                else
                    requestSettings.data = params;
            }
            $.ajax(requestSettings);
            return deferred;
        },
        load: function (loadOptions) {
			return dbImpl._sendRequest('GET');
        },
        insert: function (params) {
            return dbImpl._sendRequest('POST', params);
        },
        update: function (params) {
            return dbImpl._sendRequest('PUT', params);
        },
        remove: function (params) {
            return dbImpl._sendRequest('DELETE', params);
        }
    };
    Application1.db = new DevExpress.data.CustomStore(dbImpl);
})(jQuery, DevExpress);