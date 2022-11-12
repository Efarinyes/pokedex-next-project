

const introPreferits = (id: number) => {
    

    let preferits: number[] = JSON.parse( localStorage.getItem('preferits') || '[]')

    if (preferits.includes(id)) {
        preferits = preferits.filter( pokeId => pokeId !== id )
    } else {
        preferits.push(id);
    }
    localStorage.setItem('preferits', JSON.stringify(preferits))
}

const esPreferit = (id: number): boolean => {

    // if (typeof window === 'undefined') return false;

    const preferits: number[] = JSON.parse( localStorage.getItem('preferits') || '[]')
    return preferits.includes(id);
}

const pokePreferits = ():number[] => JSON.parse(localStorage.getItem('preferits') || '[]')

const exportFuction = { introPreferits, esPreferit, pokePreferits };

export default exportFuction;