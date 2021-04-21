import React, { useEffect } from 'react';
import app from '../../utils/firebase';
import { useRouter } from 'next/router';

const PlayersModule = () => {

    const router = useRouter();

    // const fetchPlayers = (id) => {
    //     const id = router.query.id;
    //     const dbRef = app.database().ref("games").child(id).child("players");
    // };

    return (
        <div className="h-2/4 m-3 border border-gray-300 rounded-md shadow-xl overflow-scroll">
            <div className="bg-gray-900 p-2">
                <p className="text-white">Players</p>
            </div>
            <hr />
            <div className="p-4 overflow-scroll">
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                    <li>Four</li>
                </ul>
            </div>
        </div>
    );
};
export default PlayersModule;
