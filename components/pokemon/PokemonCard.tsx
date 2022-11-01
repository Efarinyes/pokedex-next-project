import { FC } from 'react';
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { SmallPokemons } from '../../interfaces';

interface Props {
    pokemon: SmallPokemons
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const { img, name, id } = pokemon;
    const router = useRouter()
    const onPokemonClick = () => {
        router.push(`/pokemon/${id}`)
    }




    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card 
                isHoverable 
                isPressable
                onClick={onPokemonClick}
            >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={img}
                        width='100%'
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'> {name} </Text>
                        <Text> # {id} </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )

}
