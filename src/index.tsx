import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Canvas } from '@react-three/fiber';
import LoadingScreen from './LoadingScreen';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Canvas
			style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
			camera={{ position: [ -100, 50, 200 ], zoom: 1.25 }}
		>
			<App />
		</Canvas>
		<LoadingScreen />
	</React.StrictMode>
);

reportWebVitals();
