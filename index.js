//api https://rickandmortyapi.com/api/character
const searchName = document.getElementById('searchname').value
const actualPage = ''
let _info = {}
let pageNumber = 1
const nextPage = () =>{
    document.getElementById('cards').innerHTML = ''
    _info.next != null ? buildPage(_info.next) : alert('No hay pagina siguiente')
}
const prevPage = () =>{
    document.getElementById('cards').innerHTML = ''
    _info.prev != null ? buildPage(_info.prev) : alert('No hay pagina anterior')
}


const searchWithFilters = () =>{

}

// hacer function que se llame get y tenga fetch, que tenga un return de data
const start = async (url) => {
    try{
    const response = await fetch(url);
    const {info, results} = await response.json();
    console.log({info,results});
    _info = info
    return results
    }
    catch(err){
        console.error(err);
    }
}


const buildCards = async (results) =>{
    console.log(results)
    results.forEach((character) => {
        const card = `
            <div class = "col-4 mt-4">
            <div class="card" style="width: 18rem;">
            <img src="${character.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">Origen : ${character.origin.name}.</p>
              <p class="card-text">Estado : ${character.status}.</p>
              <p class="card-text">Especie : ${character.species}.</p>
            </div>
            </div>
            </div>`;
        document.getElementById('cards').insertAdjacentHTML('beforeend', card);
    })
}

const buildPage = (page) =>{
    start(page).then((res)=>{
        
        buildCards(res)
        console.log(_info)
    })
}

window.onload = buildPage('https://rickandmortyapi.com/api/character?page=1') ;
