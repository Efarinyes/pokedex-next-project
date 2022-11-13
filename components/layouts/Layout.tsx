

import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Navbar } from '../ui';


interface Props extends PropsWithChildren {
    title?: string
}
const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ title, children }) => {
    
    return (
        <>
            <Head>
                <title> {title || 'Pokenom App'} </title>
                <meta name='author' content='Eduard Farinyes' />
                <meta name='description' content={`Informació sobre el Pokemon ${title}`} />
                <meta name='keywords' content={` ${title}, pokemon, pokedex`} />

                <meta property="og:title" content= {`Informació de ${title}`} />
                <meta property="og:description" content= {`Aquesta és la pàgina de ${title}`} />
                <meta property="og:image" content={`${origin}/_next/image?url=%2Fimg%2Fbanner.png&w=256&q=75`} />
                <meta property="og:image:widht" content="250" />
                <meta property='og;image:height' content="200" />
            </Head>

            <Navbar />

            <main style={{
                padding: '0 20px'
            }}>
                {children}
            </main>
        </>
    )
}
