/* global axios */
/* global $ */

const api_url = "https://pokeapi.co/api/v2/";

// This is for testing only!
function testAPI()
{
    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
        .then(function(response){
            console.log(response);
            console.log(response.data.abilities);
            console.log(response.data.abilities[0]);
            console.log(response.data.abilities[0].ability);
        })
    
}

$(function(){
    $("#find-button").click(function(){
        let searchTerms = $("#search").val();
    
        axios.get(api_url + "pokemon/" + searchTerms).
        then(function(response){
            let pokemon = response.data;
            $("#pokemon-name").text(pokemon.name);
            $("#pokemon-image").attr('src', pokemon.sprites.front_shiny);
            $("#experience").text(pokemon.base_experience);
            
            $("#abilities").empty();
            let abilities = response.data.abilities;
            for (let a of abilities)
            {
                console.log(a);
                $("#abilities").append($("<li>" + a.ability.name + "</li>"));
            }
        });
    })
})