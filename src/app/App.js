import React, { useState, useEffect } from 'react';

import AppPage from './AppPage';


const App = () => {
	const [phrase, setPhrase] = useState({});
	useEffect(() => {
		consultApi();
	}, []);

	const consultApi = async () => {
		const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
		const phrase = await api.json()
		setPhrase(phrase[0]);
	}
	return (
		<AppPage  consultApi={consultApi} phrase={phrase}/>
	);
}

export default App;
