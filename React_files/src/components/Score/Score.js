import React from 'react';

const Score = ({ waste, weight, recycling }) => {
  if (!recycling.includes(waste)) {
    return (
      <div>
        <h2 class='result_level1'>Yikes, you can't recycle that!</h2>
        <h3 class='result_level2'>Find out what you can recycle <a href='https://www.recyclenow.com/what-to-do-with' target="_blank" rel="noopener noreferrer">here.</a></h3>
      </div>
    );
    } else {
      if (waste.length && weight >= 100) {
        return (
          <div>
            <h2>Congrats! You are a Recycling King</h2>
            <h3>
              Recycled {weight}kg of {waste}
            </h3>
          </div>
        );
      } else if (waste.length && weight >= 50 && waste.length && weight < 100) {
        return (
          <div>
            <h2>Congrats! You are a good Recycler</h2>
            <h3>
              Recycled {weight}kg of {waste}
            </h3>
          </div>
        );
      } else if (waste.length && weight < 50 && waste.length && weight > 0) {
        return (
          <div>
            <h2>Congrats! You did good but you can do better next time</h2>
            <h3>
              Recycled {weight}kg of {waste}
            </h3>
          </div>
        );
      }
    }
  }

export default Score;
