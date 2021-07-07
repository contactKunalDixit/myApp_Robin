import React from 'react';

const Search = (props) => {
	return (
		<div>
			<label htmlFor='search'>Search: </label>
			<input
				type='text'
				id='search'
				onChange={props.onSearch}
				value={props.searchTerm}
			/>
			<h3>Output: {props.searchTerm}</h3>
		</div>
	);
};

export default Search;
