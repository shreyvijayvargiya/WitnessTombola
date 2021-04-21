import React, { useEffect } from 'react';
import app from '../../utils/firebase';
import { useRouter } from 'next/router';

const NumbersPanel = () => {

    const router = useRouter();

    // const fetchPlayers = (id) => {
    //     const id = router.query.id;
    //     const dbRef = app.database().ref("games").child(id).child("players");
    // };

    return (
        <div className="border m-3 border-gray-300 rounded-md shadow-sm p-4">
            <p>Numbers</p>
        </div>
    );
};
export default NumbersPanel;
