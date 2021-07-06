import './App.css';
import Lists from './components/Lists';

function App() {
	const welcome = {
		greeting: 'Hey',
		title: 'React',
	};

	const funcName = (title) => {
		return title;
	};

	return (
		<div>
			<h1>
				Hello, {welcome.greeting} {welcome.title}!, my name is
				{funcName(' Kunal')}
			</h1>

			<label htmlFor='search'>Search: </label>
			<input type='text' id='search'></input>

			<Lists></Lists>
		</div>
	);
}

export default App;
