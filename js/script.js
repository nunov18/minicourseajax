
/* function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');

    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $body.append('<img class="bgimg" src="' + streetviewUrl +'">');

    // Your NYTimes AJAX request goes HERE

    var nytimesUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '?sort=newest&api-key=6f6fc6b6e8a8445686b80e7809caed8e';
    $.getJSON(nytimesUrl, function(data){
      $nytHeaderElem.text('New York Times Articles About ' + cityStr);

      articles = data.response.docs;
      for (var i = 0; i < articles.lenght; i++) {
        var article = articles[i];
        $nytElem.append('<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'<p>' + article.snippet + '</p>'+'</li>');
      };

    })


    return false;
};

$('#form-container').submit(loadData);


//6f6fc6b6e8a8445686b80e7809caed8e

*/

function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    var $street = $("#street").val();
    var $city = $("#city").val();
    var $address = $street + ', ' + $city;

    $greeting.text("So you want to live at " + $address + '?');

    var streetviewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + $address + '';
    $body.append('<img class="bgimg" src="' + streetviewURL + '">');

    // Your NYTimes AJAX request goes here

    var nyURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + $city +
    "&sort=newest&api-key=6f6fc6b6e8a8445686b80e7809caed8e";
                $.getJSON(nyURL, function(data) {
                    $nytHeaderElem.text('Articles About ' + $city);

                    articles = data.response.docs;
                    for (var i = 0; i < articles.length; i++) {
                        var article = articles[i];
                        $nytElem.append('<li class="article">' + '<a href="' + article.web_url + '">' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '</li>');


                    };
                       return false;

                })
}


$('#form-container').submit(loadData);
