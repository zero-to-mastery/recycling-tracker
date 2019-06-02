import React from 'react';

const Score = ({waste, weight}) => {
          if(weight !== null && waste !== null) {
               if((waste.length)&&weight>=100){
                    return (
                         <div>
                           <h1>Congrats</h1>
                           <h1>You are a Recycling King</h1>
                         </div>
                         );
               }
               else if(((waste.length)&&weight>=50) && (waste.length)&&weight<100){
                    return(
                         <div>
                           <h1>Congrats</h1>
                           <h1>You are a good Recycler</h1>
                         </div>
                         );
               }
               else if(((waste.length)&&weight<50) && (waste.length)&&weight>0){
                    return(
                         <div>
                           <h1>Congrats</h1>
                           <h1>You did good but do better next time.</h1>
                         </div>
                         );
               }
          } else {
               return (
                    <div>
                      <h1>Fill out the form above</h1>
                    </div>
                    );
          }
	}

export default Score;
