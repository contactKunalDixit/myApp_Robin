import React, { useState } from 'react';
import './App.css';
import Lists from './components/Lists';
import Search from './components/Search';

let App = () => {
	const welcome = {
		greeting: 'Hey',
		title: 'React',
	};
	const funcName = (title) => title;

	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = (e) => {
		console.log(e.target.value);
		setSearchTerm(e.target.value);
	};

	return (
		<div>
			<h1>
				Hello, {welcome.greeting} {welcome.title}!, my name is
				{funcName(' Kunal')}
			</h1>
			<Search onSearch={handleChange} searchTerm={searchTerm} />
			<Lists />
		</div>
	);
};

export default App;

/*
   NOTE: Always manage the state at the highest possible level so that the state variable and the function can be passed through to all the children through Props.
 
  for resetting the value of state, define and implement the function in the parent component but pass the function as a prop and get that executed in the child component where the event gets triggered
 
  If a component below needs to update the state, pass a callback handler down to it so that it gets executed there but implemented at parents function signature. If a compoenent needs to use the state (e.g. displaying it), pass it down as props.
 
 */
