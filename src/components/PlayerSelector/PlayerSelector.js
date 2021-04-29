import React, { useEffect, useState } from 'react';
import playerData from '../../data/playerData.json';
import Player from '../Player/Player';
import Team from '../Team/Team';

const PlayerSelector = () => {
    const [players, setPlayer] = useState([]);

    useEffect(() => 
    {
        setPlayer(playerData);
    },[])

    const [team, setTeam] = useState([]);
    const playerAddHandler = (player) => 
    {
        if (team.length <11) 
        {
            console.log("player Added", player);
            const newTeam = [...team, player];
            setTeam(newTeam);    
        }  
    }
    return (
        <div className="row">
            <div className="col-7 border  mr-2">   
                <div className="row">
                    <div className="col-5 ">
                        {
                            players.map(player =>
                                <Player
                                playerAddHandler = {playerAddHandler} 
                                player = {player}
                                >
                                </Player>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="col border  mr-2">
                <Team team={team}></Team>
            </div>
        </div>
    );
};

export default PlayerSelector;