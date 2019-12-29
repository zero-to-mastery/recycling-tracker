import React from 'react';

const Score = ({ type, weight, recycling }) => {
  if (!recycling.includes(type)) {
    return (
      <div>
        <h2 
// @ts-ignore
        class='result_level1'>Yikes, you can't recycle that!</h2>
        <h3 
// @ts-ignore
        class='result_level2'>Find out what you can recycle <a href='https://www.recyclenow.com/what-to-do-with' target="_blank" rel="noopener noreferrer">here.</a></h3>
      </div>
    );
    } else {
      if (type.length && weight >= 100) {
        return (
          <div>
            <h2>Congrats! You are a Recycling King</h2>
            <h3>
              Recycled {weight}kg of {type}
            </h3>
          </div>
        );
      } else if (type.length && weight >= 50 && type.length && weight < 100) {
        return (
          <div>
            <h2>Congrats! You are a good Recycler</h2>
            <h3>
              Recycled {weight}kg of {type}
            </h3>
          </div>
        );
      } else if (type.length && weight < 50 && type.length && weight > 0) {
        return (
          <div>
            <h2>Congrats! You did good but you can do better next time</h2>
            <h3>
              Recycled {weight}kg of {type}
            </h3>
          </div>
        );
      }
    }
  }

export default Score;
