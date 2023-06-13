

const pokeContainer = document.querySelector(".pokemon-list")
const url = "https://pokeapi.co/api/v2/pokemon"
let requiredNumber = document.querySelector(".number")
let number = ""


// Zjištění čísla z políčka pro počet pokemonů
    requiredNumber.addEventListener("input", (e) => {
        number = e.target.value

    // Získání všech pokemonu
    const getAllPokemon = async () =>{

    // Cyklus na projetí všech pokemonu za lomítkem
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
        </div>
        `
        pokeContainer.appendChild(poke)
    }

}

getAllPokemon()

    })

   
    







// Změna obrázku za shiny form
const changeImg = () => {

    // Změny obrázků
    let imgDefault = document.querySelectorAll(".img1")
    let imgShiny = document.querySelectorAll(".img2")

    imgDefault.forEach( (oneDefault) =>{
        oneDefault.classList.toggle("active")
    })

    imgShiny.forEach( (oneShiny) =>{
        oneShiny.classList.toggle("active")
    })

    // Změna hodnoty Tlačítka

    let button = document.querySelector(".changeButton")

    button.classList.toggle("activeButton")

    console.log(button.classList.value.includes("activeButton"));

    if(button.classList.value.includes("activeButton")){
        button.textContent = "Shine Form"
    }else{
        button.textContent = "Default Form"
    }


}