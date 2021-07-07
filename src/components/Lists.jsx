import React from 'react';

import { stories } from '../Data';

const Lists = () => {
	return stories.map((i) => {
		return <Item key={i.objectID} item={i}></Item>;
	});
};

const Item = ({ item }) => {
	return (
		<div>
			<hr />

			<h4>
				<a href={item.url}>Title: {item.title}</a>
			</h4>
			<h4>Author: {item.author}</h4>
			<h4>Points_Scored: {item.points}</h4>

			<hr />
		</div>
	);
};

export default Lists;
