;(function ($, window, document, undefined) {
    var endpoint = 'http://skybettechtestapi.herokuapp.com';

    BettingService = {
        placeBet: function (data, onSuccess, context) {
            $.ajax(endpoint + '/bets', {
                contentType: 'application/json',
                context: context,
                data: JSON.stringify(data),
                type: 'POST',
                success: onSuccess
            });
        },
        getAvailableBets: function (onSuccess, context) {
            $.ajax(endpoint + '/available', {
                context: context,
                type: 'GET',
                success: onSuccess
            });
        }
    };
})(jQuery, window, document);