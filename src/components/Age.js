import React from 'react';

const Age = ({ onClick }) => {
	onClick = () => {
		return 'age';
	};
	return (
		<button className='btn btn-primary age' name='age' onClick={this.onClick}>
			Age
		</button>
	);
};

export default Age;
