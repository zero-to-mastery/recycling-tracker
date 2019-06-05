import React from 'react';

const Score = ({ waste, weight }) => {
  if (waste.length && weight >= 100) {
    return (
      <div>
        <h1>Congrats! You are a Recycling King</h1>
        <h1>
          Recycled {weight}kg of {waste}
        </h1>
      </div>
    );
  } else if (waste.length && weight >= 50 && waste.length && weight < 100) {
    return (
      <div>
        <h1>Congrats! You are a good Recycler</h1>
        <h1>
          Recycled {weight}kg of {waste}
        </h1>
      </div>
    );
  } else if (waste.length && weight < 50 && waste.length && weight > 0) {
    return (
      <div>
        <h1>Congrats! You did good but you can do better next time</h1>
        <h1>
          Recycled {weight}kg of {waste}
        </h1>
      </div>
    );
  }
};

export default Score;
