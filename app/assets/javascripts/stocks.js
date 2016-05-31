var init_stock_lookup;

init_stock_lookup = function() {
    $('#stock-lookup-form').on('ajax:before', function(event, data, status) {
        show_spinner(); //Show spinner while the site looks up user's ticker symbol.
    });
    
    $('#stock-lookup-form').on('ajax:after', function(event, data, status) {
        hide_spinner(); //Hide spinner after the symbol has been found.
    });
    
    $('#stock-lookup-form').on('ajax:success', function(event, data, status) {
        $('#stock-lookup').replaceWith(data); //Display stock data in the stock-lookup div.
        init_stock_lookup();
    });

    $('#stock-lookup-form').on('ajax:error', function(event, xhr, status) {
        hide_spinner(); //Hide spinner in case of an invalid stock symbol.
        $('#stock-lookup-results').replaceWith('  ');
        $('#stock-lookup-errors').replaceWith('Stock was not found.'); //Display error to user.
    });
}

$(document).ready(function() {
    init_stock_lookup();
});