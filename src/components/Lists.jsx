import React from 'react';
import './Lists.css';

function Lists() {
	const list = [
		{
			title: 'React',
			url: 'https://reactjs.org/',
			author: 'Jordan Walke',
			num_comments: 3,
			points: 4,
			objectID: 0,
		},
		{
			title: 'Redux',
			url: 'https://redux.js.org/',
			author: 'Dan Abramov, Andrew Clark',
			num_comments: 2,
			points: 5,
			object_ID: 1,
		},
	];

	return list.map((i) => {
        return (<h4>Title: {i.title}</h4>;
        
    )});
}

export default Lists;
