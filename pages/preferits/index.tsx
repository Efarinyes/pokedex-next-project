
import { useState, useEffect } from 'react';


import { Layout } from '../../components/layouts'
import { NoPreferits } from '../../components/ui'
import { localPreferits } from '../../utilitats';
import { PreferitPokemon } from '../../components/pokemon';


const PreferitsPage = () => {

  const  [ preferitsPokemon, setPreferitsPokemon] = useState<number[]>([])

  useEffect(() => {
    setPreferitsPokemon(localPreferits.pokePreferits())
  }, [])
  

  return (
    <Layout title = 'Pokémons - Preferits'>

        {
          preferitsPokemon.length === 0 
          ? (
            <NoPreferits />
          ) :
          (
            <PreferitPokemon pokemons = { preferitsPokemon } />
          )

        }

    </Layout>
  )
}

export default PreferitsPage