import { Card, Grid } from '@nextui-org/react'
import { FC } from 'react'
import { PreferitCardPokemon } from './'

interface Props {
    pokemons: number[]
}

export const PreferitPokemon: FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start' >
            {
                pokemons.map(id => (
                    <PreferitCardPokemon key={id} pokemonId = {id}/>
                ))
            }

        </Grid.Container>
    )
}
