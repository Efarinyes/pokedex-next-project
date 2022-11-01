

import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Navbar } from '../ui';

interface Props extends PropsWithChildren {
    title?: string
}

export const Layout: FC<Props> = ( { title, children } ) => {
  return (
    <>
        <Head>
            <title> { title || 'Pokenom App'} </title>
            <meta name ='author' content = 'Eduard Farinyes' />
            <meta name = 'description' content = { `Informació sobre el Pokemon ${ title }`} />
            <meta name = 'keywords' content = {` ${title}, pokemon, pokedex` } />
        </Head>

       <Navbar />

        <main style = {{
            padding: '0 20px'
        }}>
            { children }
        </main>
    </>
  )
}
