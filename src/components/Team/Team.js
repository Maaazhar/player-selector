import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faCoins } from '@fortawesome/free-solid-svg-icons';


const Team = (props) => {
    // console.log(props.team[0].name);
    const players = props.team;
    // console.log(players);
    // const [name] = players
    // console.log(name);

    // const totalPrice = players.reduce((total, player) => player.price, 0);

    let totalPrice = 0;
    for (let i = 0; i < players.length; i++) 
    {
        totalPrice += players[i].price;   
    }

    let name = [];
    let price = [];
    let i = 0;
    players.map(player =>
        {
            name[i] = player.name;
            console.log(name[i]);
            price[i] = player.price;
            console.log(player.name);
            i++;
        }
        )
        console.log(name, price);


    
    return (
        <div>
            <div style={{position: "fixed", width: "32rem"}} className="card bordered mt-1  pl-2 pr-2 pt-1 pb-1">
                    <div className="card-header text-center ">
                        <h4>Team Insight</h4>
                        <h6 className="text-center text-danger"> <FontAwesomeIcon icon={faExclamationTriangle} /> Select only 11 player for the team <FontAwesomeIcon icon={faExclamationTriangle} /></h6>
                    </div>
                    <div>
                        <h5 className="text-center"><u><i> Total {players.length} player selected for the team.</i></u></h5>
                        <ol>
                            <li>{name[0]} ==== {price[0]} </li>
                            <li>{name[1]} ==== {price[1]} </li>
                            <li>{name[2]} ==== {price[2]} </li>
                            <li>{name[3]} ==== {price[3]} </li>
                            <li>{name[4]} ==== {price[4]} </li>
                            <li>{name[5]} ==== {price[5]} </li>
                            <li>{name[6]} ==== {price[6]} </li>
                            <li>{name[7]} ==== {price[7]} </li>
                            <li>{name[8]} ==== {price[8]} </li>
                            <li>{name[9]} ==== {price[9]} </li>
                            <li>{name[10]} ==== {price[10]} </li>
                        </ol>                        
                        <h4 style={{marginTop:"-1rem"}}><FontAwesomeIcon className="text-danger" icon={faCoins} /> Total budget for the team: ৳ <span className="text-danger" >{totalPrice}</span></h4>     
                    </div>
                    <button className="btn btn-info">CONFIRM</button>

            </div>
        </div>
    );
};


export default Team;