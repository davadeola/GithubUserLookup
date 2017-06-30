var getRepos = require('./../js/lookup.js').getRepos;
var apikey = require('./../.env').apikey;
$(document).ready(function(){

  $('form').submit(function(event){
    event.preventDefault();
    $("div#asd").text(" ");
    var userName = $('#userName').val();
    getRepos = function(){
      $.get('https://api.github.com/users/'+ userName+'?access_token='+ apikey).then(function(response){
        console.log(response.login);
        $("div#asd").append(
          `<div class="col-md-4">
          <div class="profile-pic">
          <img src="`+ response.avatar_url+`" alt="">
          </div>
          </div>
          <div class="col-md-8">
          <h1>`+response.login+`</h1>
          <a href="`+response.html_url+`">Github Account</a>
          <h2>Repositories</h2>
          </div>`

      );
    });

    };
    getRepos();
});
  });
