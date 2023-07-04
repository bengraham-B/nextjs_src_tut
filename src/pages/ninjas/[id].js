import React from 'react'

//^ Function is related to generating dynamic routes for the ninjas 
export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false //^ If the user vists a route with an ID which does not exsit it will show the 404 page.
    }
}

//~ https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props
export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
    const data = await res.json()

    return {
        props: {ninja: data}
    }

}

export default function Details({ninja}) {
  return (
    <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
    </div>
  )
}
