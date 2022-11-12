import { Card, Grid } from "@nextui-org/react"

import { FC } from "react"
import { useRouter } from 'next/router';

interface Props {
    pokemonId: number
}

export const PreferitCardPokemon: FC<Props> = ({pokemonId}) => {

    const router = useRouter()

    const onPreferitClick = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick = { onPreferitClick } >
            <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    width={'100%'}
                    height={140}
                />

            </Card>
        </Grid>
    )
}
