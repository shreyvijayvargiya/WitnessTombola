import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { PlayersModule, PrizeModule, WinnersModule, RecentActivity } from '../../modules';

const Organiser = () => {
    
    const ticketArray = new Array(9);
    const createArray = ()=>{
        for(let i=0; i<9; i++){
            ticketArray[i]=new Array(10)
        };
        for(let i=0; i< ticketArray.length;i++){
            fillNumber(i)
        }
    };
    function fillNumber(index){
        for(let j=index*10 + 1; j<=(index+1)*10; j++){
            ticketArray[index][j]=j
        };
    };
    const[allArray, setAllArray] = useState(new Array(90));
    function fillArray(){
        for(let i=0; i<90; i++){
            allArray[i]=i+1; 
            setAllArray(allArray)
        };
    }
    
    useEffect(() => {
        createArray()
        fillArray()
    }, []);
    
    console.log(allArray.slice(0, 9), 'jnrf')
   
    return (
        <Grid container justify="space-between" className="h-screen">
            <Grid item md={3}>
                <PlayersModule />
                <RecentActivity />
            </Grid>
            <Grid item md={6} className="h-screen flex flex-col justify-center text-center p-4">
                <p>Welcome Organiser</p>
                {allArray.length>0 && <div className="flex w-11/12 justify-around items-start border border-gray-300 shadow-md rounded-md p-4 m-auto">
                    <div className="flex flex-col">
                        {allArray.slice(0, 10).map(item => (
                            <span className="border border-gray-200 p-3 m-1 rounded-md">{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(10, 20).map(item => (
                            <span className="border border-gray-200 p-3 m-1 rounded-md">{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(20, 30).map(item => (
                            <span className="border border-gray-200 p-3 m-1 rounded-md">{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(30, 40).map(item => (
                            <span className="border border-gray-200 p-3 m-1 rounded-md">{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(40, 50).map(item => (
                            <span className="border border-gray-200 p-3 m-1 rounded-md">{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(50, 60).map(item => (
                            <span className="border border-gray-200 p-3 m-1 rounded-md">{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(60, 70).map(item => (
                            <span className="border border-gray-200 p-3 m-1 rounded-md">{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(70, 80).map(item => (
                            <span className="border border-gray-200 p-3 m-1 rounded-md">{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {allArray.slice(80, 90).map(item => (
                            <span className="border border-gray-200 p-3 m-1 rounded-md">{item}</span>
                        ))}
                    </div>
                </div>}
            </Grid>
            <Grid item md={3}>
                <PrizeModule />
                <WinnersModule />
            </Grid>
        </Grid>
    )
};
export default Organiser;
