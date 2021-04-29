import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faPlusSquare,  } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const {img, name, price, matchPlayed, category} = props.player;
    return (
        <div style={{marginLeft: "11rem"}}>
            <div className="card p-2 mt-1 " style={{width: "28rem"}}>
                <img className="border   card-img-top" src={img} alt=""/>
                <div className="card-body">
                    <h2>{name}</h2>
                    <h4 className="card-title">{category}</h4>
                    <h5>Total <span className="text-info">{matchPlayed}</span> Match Played</h5>
                    <h4><FontAwesomeIcon className="text-danger" icon={faCoins} /> Auction Price: ৳ <span class="text-danger"> {price}</span></h4>
                    <button 
                    onClick={() => props.playerAddHandler(props.player)}
                    class="btn btn-info w-100">
                        <h5> <FontAwesomeIcon className="text-warning" icon={faPlusSquare} /> Add <span class="text-warning">{name}</span> to the team</h5>
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Player;
