import axios from 'axios'; // axios es similar a request(callbacks), pero axios usa promesas
import Game from './Game';
import './styles/main.scss';

function init(){
    //API Data get

    axios.get('https://restcountries.eu/rest/v2/all')
        .then((response) =>{
            // get countries
            console.log(response.status);
            console.log(response.data); //Data is the info i look for
            const game = new Game(response.data)
            game.start()
        })
        .catch((error) => {
            // error while getting countries
            // console.log('Aca esta el error', error.response.data);
        })
}

init();