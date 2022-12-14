import { useEffect, useState } from 'react';

import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import confetti from 'canvas-confetti';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces';

import { getPokemonInfo, localPreferits } from '../../utilitats';
import { PokemonListResponse } from '../../interfaces/pokemon-list';



interface Props {
  pokemon: Pokemon
}

const PokemonByNamePage: NextPage<Props> = ({pokemon}) => {
  

const [esAPreferits, setEsAPreferits] = useState(false)

  const onTogglePreferits = () => {
    localPreferits.introPreferits( pokemon.id)
    setEsAPreferits(!esAPreferits);
    if (esAPreferits) return
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 0.8,
        y: 0  
      }
    })
  }

  useEffect(() => {
    setEsAPreferits(localPreferits.esPreferit(pokemon.id))
  }, [pokemon.id]) 

  // console.log('Adeu mon', localStorage.getItem('preferits'))
  return (
    <Layout title = { pokemon.name }>
        <Grid.Container css ={{ marginTop: '5px'}} gap={ 2 }>
          <Grid xs= {12} sm = {4} >
            <Card isHoverable css ={{
              padding: '30px'
            }}>
              <Card.Body>
                <Card.Image 
                  src = {pokemon.sprites.other?.dream_world.front_default || '/no-image.png' } 
                  alt={pokemon.name }
                  width = '100%'
                  height={ 200 }
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm= { 8 }>
            <Card>
              <Card.Header css = {{ display:'flex', justifyContent: 'space-between'}}>
                <Text h2 transform='capitalize'>  { pokemon.name } </Text>
                <Button 
                  color='gradient'
                  ghost = { !esAPreferits }
                  onClick={ onTogglePreferits } 
                >
                  { esAPreferits ? 'Elimina de preferits':'Arxiva a preferits'}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={25}>Sprites:</Text>
                <Container display='flex' direction='row' gap = { 2 }>
                  <Image 
                    src= { pokemon.sprites.front_default } 
                    alt= { pokemon.name }
                    width = {125 } 
                    height = { 125 }
                  />
                  <Image 
                    src= { pokemon.sprites.back_default } 
                    alt= { pokemon.name }
                    width = {125 } 
                    height = { 125 }
                  />
                  <Image 
                    src= { pokemon.sprites.front_shiny } 
                    alt= { pokemon.name }
                    width = {125 } 
                    height = { 125 }
                  />
                  <Image 
                    src= { pokemon.sprites.back_shiny } 
                    alt= { pokemon.name }
                    width = {125 } 
                    height = { 125 }
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>

        </Grid.Container>
    </Layout>
  )
}
// You should use getStaticPaths if you???re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemonsName: string[] = data.results.map( pokemon => pokemon.name )
  return {
    paths: pokemonsName.map(name => ( {
      params: { name }
    })),
    fallback: 'blocking'
  }
}
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user???s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast ??? getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async ({ params}) => {

  const { name } = params as { name: string }
  const pokemon = await getPokemonInfo(name)

  if(!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  // console.log(data);
  // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"

  return {
    props: {
      pokemon
    },
    revalidate: 86400 //Temps en segons * un dia
  }
}

export default PokemonByNamePage