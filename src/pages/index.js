import Head from 'next/head'
import Link from 'next/link'
import Footer from '@/comps/Footer'
import Navbar from '@/comps/Navbar'
import React from 'react'
import styles from '../styles/home.module.css'

export default function Home() {
  return (

	<>
	
		<Head>
			<title>Ninja List | Home</title>
			<meta name="keywords" content="ninja"/>
		</Head>
		<div>
			<h1 className={styles.title}>Home Page</h1>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet consectetur, 
				adipisicing elit. Aut sunt quia neque recusandae error. Accusamus consequuntur debitis similique 
				facilis nam iste veritatis sapiente ullam omnis reprehenderit ea, quos temporibus eligendi impedit 
				repudiandae voluptates animi delectus itaque! Cum blanditiis soluta consequatur ex voluptate molestias 
				quidem fugiat, dolorum commodi architecto nobis, cupiditate similique veniam quae, necessitatibus ipsum 
				ducimus error maxime alias? Soluta aperiam necessitatibus quo rem. Quasi eligendi suscipit alias, expedita 
				consequatur quibusdam natus reiciendis nihil et, veniam sequi ab mollitia ut modi enim velit dignissimos maxime 
				nesciunt omnis explicabo minima nulla laudantium. Quibusdam dolores amet voluptatibus minus officiis iste enim id,
				dolor sed suscipit ea facilis sit possimus alias velit numquam laboriosam. Laudantium amet fuga, pariatur ullam 
				facilis nobis eum voluptatibus rerum sequi molestiae repellat saepe. Sint quia asperiores fugit. Molestiae animi 
				ipsum asperiores mollitia, eum placeat obcaecati quam quas delectus adipisci veritatis, suscipit aliquid, tempore 
				consequuntur dolor atque. Omnis necessitatibus aut fugiat quam vero fugit et architecto ipsum maxime, suscipit culpa 
				molestias! Voluptate facilis, autem aliquid sequi, enim voluptatibus suscipit consequatur, aspernatur perspiciatis 
				debitis excepturi ipsam est labore? Vero, porro sunt, ducimus eum soluta saepe veritatis labore magnam consectetur 
				dolores illo voluptatum tempora ex perferendis amet cumque. Quos eum iure libero nobis laboriosam quod earum quia modi
				beatae, atque possimus, commodi similique, sint enim itaque. Explicabo soluta minus numquam veritatis
				neque doloremque cum tempora optio, a quisquam, adipisci est saepe debitis ipsam eius.
			</p>

			<Link href="/ninjas">
				<div className={styles.btn}>See All Ninjas</div>
			</Link>

		</div>
	</>

  )
}
