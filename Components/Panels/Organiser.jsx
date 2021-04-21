import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { PlayersModule, PrizeModule, WinnersModule, RecentActivity } from '../../modules';

const Organiser = () => {
    
    const ticketArray = new Array(9);
    const createArray = (arr)=>{
        for(let i=0; i<9; i++){
            arr[i]=new Array(10)
        };
    };
    const fillArray  = () => {
        for(let i=0; i< ticketArray.length ; i++){
            for(let j=i; j=(i+1)*10;j++){
                ticketArray[i][j] = j;
            }
        }
    }
    useEffect(() => {
        createArray(ticketArray)
        // fillArray()
    }, []);
    console.log(ticketArray);
   
    return (
        <Grid container justify="space-between" className="h-screen">
            <Grid item md={3}>
                <PlayersModule />
                <RecentActivity />
            </Grid>
            <Grid item md={6} className="h-screen flex flex-col justify-center text-center p-4">
                <p>Welcome Organiser</p>
                <div className="w-8/12 border border-gray-300 shadow-md rounded-md p-4 m-auto">
                    <p>Numbers</p>
                </div>
            </Grid>
            <Grid item md={3}>
                <PrizeModule />
                <WinnersModule />
            </Grid>
        </Grid>
    )
};
export default Organiser;
