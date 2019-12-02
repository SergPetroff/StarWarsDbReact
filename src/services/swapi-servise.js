export default class SwapiService {

    _prourl = "https://cors-anywhere.herokuapp.com/";
    _apibase = "https://swapi.co/api";
    
 async getRescource(url){
     const res = await fetch(`${this._prourl}${this._apibase}${url}`);
     if(!res.ok){
         throw new Error(`Could not fetch ${url}`+`, received ${res.status}`)
     }
     return await res.json();
 }

 async getAllPeople(){
    const res = await this.getRescource(`/people/`);

    return res.results.map(this._trancformPerson);
 }
 async getPerson(id){
     const person = await this.getRescource(`/people/${id}`);
     return this._trancformPerson(person);
 }

 async getAllPLanets(){
    const res = await this.getRescource(`/planets/`);

    return res.results.map(this._transformPlanet);
 }
async getPlanet(id){
   const planet = await this.getRescource(`/planets/${id}`);

   return this._transformPlanet(planet)
}

async getAllStarships(){
    const res = await this.getRescource(`/starships/`);

    return res.results.map(this._transformStarship);
 }

 async getStarships(id){
    const starship = await this.getRescource(`/starships/${id}`);
    return this._transformStarship(starship);
}

_extractId(item){
    const idRegExp = /\/([0-9]*)\/$/;
    return  item.url.match(idRegExp)[1]
}
_transformPlanet(planet){

    return {
        id:this._extractId(planet),
        name:planet.name,
        population:planet.population,
        rotationPeriod:planet.rotation_period,
        diameter:planet.diameter
      }
}

_transformStarship(starship){
    return {
        id:this._extractId(starship),
        name:starship.name,
        model:starship.model,
        manufactured:starship.manufactured,
        costInCredits:starship.costInCredits,
        lenght:starship.lenght,
        crew:starship.crew,
        passengers:starship.passengers,
        cargoCapacity:starship.cargoCapacity
    }
}

_trancformPerson(person){
    return {
        id:this._extractId(person),
        name:person.name,
        gender:person.gender,
        birthYear:person.birthYear,
        eyeColor:person.eyeColor
    }
}
}

const swapi = new SwapiService();
swapi.getPerson(5).then((body)=>{
    console.log(body)
})
