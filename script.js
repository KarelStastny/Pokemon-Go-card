
let pokeContainer = document.querySelector(".pokemon-list")
const url = "https://pokeapi.co/api/v2/pokemon"
let requiredNumber = document.querySelector("form")
let number = ""
let array = []


// Vyhledávací políčko pro filtrování výsledků
const search = document.querySelector(".search")
search.addEventListener("input", (e) => {
    // Na text v políčku zavolána vyhledávací funkce a výsledky budou vytřízeny
    filter(e.target.value)
})


// Celá funkce pro výpis pokemonu po stisknutí tlačíka Find
requiredNumber.addEventListener("submit", (e) => {
    e.preventDefault()
    number = e.target.elements.searchNumber.value
  
    // Získání všech pokemonu
    const getAllPokemon = async () =>{
        
    // Promazání listu pokemonu při dalším vyhledávání
        pokeContainer.innerHTML = ""



    // Cyklus na projetí všech pokemonu za lomítkem
    for (let x = 1; x <= number; x++ ){
        
        const res = await fetch (`${url}/${x}`)
        const pokemon = await res.json()

        // Zhodnocení zda je fotografie od 650 nejsou fotky
        let photo = ""
        
        if( x <= 649){
            photo = pokemon.sprites.other.dream_world.front_default
        } else{
            photo = pokemon.sprites.front_default
        }
        


        // Výpis do stránky
        const poke = document.createElement("div")
        poke.innerHTML = `
        <div class="card" id="${pokemon.id} " >
            <p>${pokemon.id}</p>
            <img class="img1 active" src="${photo}" alt="${pokemon.name}">
            <img class="img2" src="${pokemon.sprites.other.home.front_shiny}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
        </div>
        `


        pokeContainer.appendChild(poke)
        array.push(poke)
    }}
// spuštění funce
getAllPokemon()
    })


    // Filtrování pomocí přidání classy hide + CSS
filter = (inputText) => {
    array.forEach( (onePokemon) => {
        if(onePokemon.innerHTML.toLowerCase().includes(inputText.toLowerCase())){
            onePokemon.classList.remove("hide")
        }else{
            onePokemon.classList.add("hide")
        }
    })
}


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


// Při otevření zobrazit pokyny
window.onload = () => {
let pharagrap = document.createElement("p")
    pharagrap.classList.add("instructions")
    pharagrap.textContent = "Jako první zadedejte počet pokemonu k generování !!!"
    
pokeContainer.appendChild(pharagrap)

}
