import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';

import { OrbitControls, useHelper, Bounds, PerspectiveCamera } from '@react-three/drei';
import { angleToRadians } from './utils/angle';
import { useControls } from 'leva';

import Basement from './Basement';
import { SpotLight, SpotLightHelper } from 'three';

function App() {
	return (
		<React.Fragment>
			<spotLight
				color={'#3588FF'}
				position={[ 0, 2000, 0 ]}
				distance={3500}
				intensity={10}
				angle={10}
				penumbra={1}
			/>
			<Suspense fallback={null}>
				<Bounds fit clip observe>
					<Basement position={[ 0, -20, 0 ]} />
					<mesh position={[ 0, -20, 0 ]} rotation={[ -angleToRadians(90), 0, 0 ]} receiveShadow>
						<planeGeometry args={[ 10000, 10000 ]} />
						<meshStandardMaterial color={'#000000'} />
					</mesh>
				</Bounds>
			</Suspense>
			<OrbitControls
				makeDefault
				maxPolarAngle={Math.PI / 2}
				enablePan={false}
				enableDamping={true}
				zoomSpeed={2}
			/>
			<color attach="background" args={[ '#000000' ]} />
		</React.Fragment>
	);
}

export default App;
