import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
