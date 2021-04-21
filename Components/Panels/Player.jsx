import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { PlayersModule, PrizeModule, WinnersModule, RecentActivity, NumbersPanel } from '../../modules';
import app from '../../utils/firebase';

const Player = () => {

    const handleClaimPrize = () => {
        console.log('claim prize');
    };

    return (
        <Grid container justify="space-between" className="h-screen">
            <Grid item md={3}>
                <WinnersModule />
                <PrizeModule />
            </Grid>
            <Grid item md={6} className="h-screen flex flex-col justify-center text-center p-4">
                <p>Welcome user</p>
                <div className="w-8/12 border border-gray-300 shadow-md rounded-md p-4 m-auto">
                    <NumbersPanel />
                </div>
            </Grid>
            <Grid item md={3}>
                <RecentActivity />
                <div className="p-4 h-3/6 flex justify-center align-middle shadow-xl m-3 rounded-md border border-gray-300">
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => handleClaimPrize()}
                        >
                            Claim prize
                        </Button>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};
export default Player;
