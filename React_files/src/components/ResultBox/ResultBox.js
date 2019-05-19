import React from 'react';
import Score from '../Score/Score'

const ResultBox= ({waste, weight}) => {

	return(
		<div className='result tc pa3 ma2 bw2 shadow-5 results-card'>
		   <h1 className='f2 black'>RESULT</h1>
           <div><Score waste={waste} weight={weight} /></div>
		</div>
		);
}

export default ResultBox;
