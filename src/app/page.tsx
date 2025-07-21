'use client';
export const dynamic = 'force-static';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Home() {
	const boxRef = useRef(null);

	useEffect(() => {
		gsap.to(boxRef.current, { rotation: 360, duration: 2, yoyo: true, repeat: -1 });
	}, []);

	return (
		<main className='h-screen flex items-center justify-center'>
			<div ref={boxRef} className='w-32 h-32 bg-blue-500 text-white flex items-center justify-center'>
				GSAP TEST
			</div>
		</main>
	)
}
