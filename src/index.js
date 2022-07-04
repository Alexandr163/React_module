import React from 'react';
import { createRoot as reactDom } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

const App = () => {
	return <Counter />;
};

const root = reactDom(document.querySelector('#root'));
root.render(<App />);
