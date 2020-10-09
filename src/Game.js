class Game{
    
    constructor(countries){
        this.countries = countries;
        this.isOk = false; // Va a avalirdar si el resultado es correcto o no
        this.selectedCountries = [];
        this.winner = null;
    }

    // Getters
    generateRandomNumber(length){
        //Va agenerar un numero random
        return Math.floor(Math.random()*length)
    }

    get oneCountry(){ 
        //Devuelve un pais
        const random = this.generateRandomNumber(this.countries.length);
        return this.countries[random];
    }

    choiceCountries(){
        // regresa los tres paises que vana  estar en el juego
        for(var i=0; i < 3; i++){ // va a generar mis tres paises aleatorios
            const pais = this.oneCountry //Aqui se manda a llamar mi getter
            this.selectedCountries.push(pais)
        }
        return this.selectedCountries;
    }

    get choiceWinner(){
        //este me va a devolver el pais correcto o ganador
        const random = this.generateRandomNumber(this.selectedCountries.length)
        return this.selectedCountries[random]
    }

    buildFlag(cb,info){
        // Info es la informacion del pais
        // cb es un callback el cual me va a yudar a ejecutar el listener de las imagenes
        const img = document.createElement('img');
        img.setAttribute('src',info.flag)
        img.setAttribute('id',info.name)
        img.addEventListener('click',cb)
        return img;
    }

    start(){
        //Se va a encargar de cargar todo el juego
        this.choiceCountries();
        this.winner = this.choiceWinner;
        const banderas = document.querySelector('.flags');
        const respuesta = document.getElementById('answer');
        const poblacion = document.getElementById('population');
        const capital = document.getElementById('capital');
        const textoPais = document.getElementById('country-name');
        banderas.innerHTML = '';
        respuesta.innerHTML = '';
        poblacion.innerHTML = '';
        capital.innerHTML = '';
        textoPais.innerHTML = this.winner.translations.es;
        
        const clickFlag = (event) =>{
            // El scope es diferente entre un function normal y un arrow function
            if(this.winner.name === event.target.id){
                // Aqui el usuario dio click a la bandera ganadora
                respuesta.innerHTML = "¡Correcto!"
                poblacion.innerHTML = "Poblacion: "+this.winner.population
                capital.innerHTML = "Capital: "+this.winner.capital
            } else {
                respuesta.innerHTML = "¡Incorrecto!"
            }
        }

        this.selectedCountries.forEach(country => {
            const flag = this.buildFlag(clickFlag,country)
            banderas.appendChild(flag)
        })
        buildFlag
    }

}

export default Game;
