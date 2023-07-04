/*
 * Fetching Data in Next
 * The webapp is rendered on the server, so use NextJS function to fetch data
 * The function runs at build time. Code in the function does not run in the browser
 * THe function runs before the component is rendered
 */
export const getStaticProps = async () => {

	const response = await fetch("https://jsonplaceholder.typicode.com/users")

	const data = await response.json() //^ Returns an array of objects

	return {
		//^ These are the properties you make accessible inside the component as a prop.
		props: { ninjas: data }
	}
}



import React from 'react'
import styles from '../../styles/ninjas.module.css'
import Link from 'next/link'



export default function Ninjas( {ninjas}) {
  return (
    <div>
        <h1>All Ninjas</h1>
		{ninjas.map(ninja => (
			//& This below is dynamic routes 
			<Link href={'/ninjas/' + ninja.id} key={ninja.id}>
				<div className={styles.single}> 
					<h3>{ninja.name}</h3>
				</div>
			</Link>
		))}
    </div>
  )
}
