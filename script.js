function testAPI()
{
    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
        .then(function(response){
            console.log(response)
        })
    
}

$(function(){
    
})