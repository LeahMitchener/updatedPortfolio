var topics [
    'kurt cobain',
'mario kart',
'designing women',
'boy meets world',
'frasier',
'tommy pickles',
'pizza',
'law & order',
'toy story',
'friends',
'michael jordan',
'rockos modern life',
'angry beavers',
'waynes world',
'spice girls',
'pulp fiction',
'butterfly clips',
'fresh prince',
'3rd rock from the sun',
'ninja turtles'
]


ajaxFunction = function(){
var queryURL =
"https://api.giphy.com/v1/gifs/search?api_key=66wbvYjm2iQHjK8EGsW6aLelLl0jNEqG&q="+topics+"limit=10&offset=0&rating=PG-13&lang=en";
$.ajax({url:queryURL,method:"GET"})
.done(function(response)))
console.log(response);
}
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

searchText - $(tis)Attr("name");