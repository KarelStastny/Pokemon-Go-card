// Nové pole pro uložen pokemonu
let pokemons = []

const pokeContainer = document.querySelector(".pokemon-list")
const url = "https://pokeapi.co/api/v2/pokemon"
const number = 2
const form = document.querySelector("form")
const search = document.querySelector(".search")

let check = document.querySelector(".checkbox")





// Change Img
const changeImg = () => {
    // let allCard = document.querySelectorAll(".card")

    // console.log(allCard);

    let imgDefault = document.querySelectorAll(".img1")
    let imgShiny = document.querySelectorAll(".img2")

    imgDefault.forEach( (oneDefault) =>{
        oneDefault.classList.toggle("active")
    })

    imgShiny.forEach( (oneShiny) =>{
        oneShiny.classList.toggle("active")
    })


}





// Cyklem se zova spustí výše uvedená funkce na získání pokemonu do konečného čísla


const getAllPokemon = async () =>{
    for (let x = 1; x <= number; x++ ){
        
        const res = await fetch (`${url}/${x}`)
        const pokemon = await res.json()

 



        // Výpis do stránky
        const poke = document.createElement("div")

        poke.innerHTML = `
        <div class="card" id="${pokemon.id} " >
            <h2>${pokemon.name}</h2>
            <p>${pokemon.id}</p>
        

            <img class="img1 active" src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            <img class="img2" src="${pokemon.sprites.other.home.front_shiny}" alt="${pokemon.name}">

   
            
            <p></p>

            
        </div>
        `


        pokeContainer.appendChild(poke)

      
    }

}



getAllPokemon()



