import React from 'react';
import Score from './Score.js'

const ResultBox= ({waste, weight}) => {

	return(
		<div className='result tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 '>
		   <h1 className='f2 i green'>RESULT</h1>
           <div><Score waste={waste} weight={weight} /></div>
		</div>
		);
}

export default ResultBox;