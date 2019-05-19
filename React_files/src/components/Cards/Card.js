import React from 'react';

const Card= ({onWaste, onWeight})=> {
	return(
		<div className='tc pa3 ma2 bw2 shadow-5 trash-dump-card'>
		   <h1 className='f2 black dump-trash'>What are you recycling?</h1>
		   <input className='pa3 w-30 waste-name' type='text' placeholder='Name of the Waste' onChange={onWaste} />
		   <input className='pa3 w-30 weight-in-kg' type='number' placeholder='Weight in kg' onChange={onWeight} />
		</div>
		);
}

export default Card;
