import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';

import { OrbitControls, useHelper, Bounds } from '@react-three/drei';
import { angleToRadians } from './utils/angle';
import { useControls } from 'leva';

import Basement from './Basement';
import { SpotLight, SpotLightHelper } from 'three';

function App() {
	return (
		<React.Fragment>
			<spotLight
				color={'#3588FF'}
				position={[ 0, 5, 0 ]}
				distance={10}
				intensity={10}
				angle={0.25}
				penumbra={1}
			/>
			<Suspense fallback={null}>
				<Bounds fit clip observe>
					<Basement position={[ 0, -1, 0 ]} />
					<mesh position={[ 0, -1, 0 ]} rotation={[ -angleToRadians(90), 0, 0 ]} receiveShadow>
						<planeGeometry args={[ 100, 100 ]} />
						<meshStandardMaterial color={'#000000'} />
					</mesh>
				</Bounds>
			</Suspense>
			<OrbitControls maxPolarAngle={Math.PI / 2} maxDistance={100} />
			<color attach="background" args={[ '#000000' ]} />
		</React.Fragment>
	);
}

export default App;
