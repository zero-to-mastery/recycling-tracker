import React from 'react';

const ResultBox= ({waste,measure}) => {
	return(
		<div>
           <h1>{waste}</h1>
           <h1>{measure}</h1>
		</div>
		);
}

export default ResultBox;