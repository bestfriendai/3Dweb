import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Canvas } from '@react-three/fiber';

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Canvas
			style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}
			camera={{ position: [ -40, 15, -40 ], fov: 3 }}
		>
			<App />
		</Canvas>
	</React.StrictMode>
);

reportWebVitals();
