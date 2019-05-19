import React from 'react';

const Card= ({onWaste, onWeight})=> {
	return(
		<div className='tc bg-light-green  pa3 ma2 bw2 shadow-5 trash-dump-card'>
		   <h1 className='f2 black dump-trash'>Dump Your Trash Here</h1>
		   <input className='pa3 ba b--green bg-lightest-blue w-50' type='text' placeholder='Name of the Waste' onChange={onWaste} />
		   <input className='pa3 ba b--green bg-lightest-blue w-50' type='number' placeholder='Weight in kg' onChange={onWeight} />
		</div>
		);
}

export default Card;
