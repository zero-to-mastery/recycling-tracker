import React from 'react';

const Card= ({searchChange})=> {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
		   <h1 className='f2 i green'>Dumb Your Trash Here</h1>
		   <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Name of the Waste' onChange={searchChange} />
		   <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Weight in kg' onChange={searchChange} />

		</div>
		);
}

export default Card;