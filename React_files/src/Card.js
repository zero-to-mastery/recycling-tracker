import React from 'react';

const Card= ({waste,measure,Result})=> {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
		   <h1 className='f2 i green'>Dumb Your Trash Here</h1>
		   <input className='pa3 ba b--green bg-lightest-blue w-50' type='search' placeholder='Name of the Waste' />
		   <input className='pa3 ba b--green bg-lightest-blue w-50' type='search' placeholder='Weight in kg' />
           <input className='pa3 ma3 ba b--green bg-lightest-blue grow' type="submit" value="Submit" onClick={ResultBox} />
		</div>
		);
}

export default Card;