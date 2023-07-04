import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router' //^ Method to redirect a user
import React from 'react'

export default function NotFound() {
	const router = useRouter();

	const [timer, setTimer] = useState(3)
	
	useEffect(() => {
		//^ After three seconds the user will be redirected to the home page.
		setTimeout(() => {
			router.push('/')

			
		}, 3000)
		
	},[])
	
	setInterval(() => {
		setTimer(timer - 1)
	}, 1000)

	return (
		<div className="not-found">
			<h1>Oops...</h1>
			<h2>Page cannot be found</h2>
			<p>Go back to the <Link href="/">Homepage</Link></p>
			<p>You will be redirected in: {timer} seconds</p>
			
		</div>
  	)
}
