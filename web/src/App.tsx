import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { Gamebanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreatedAdModal } from './components/CreatedAdModal';

import { api } from './services/api';

import logo from './assets/logo-nlw-esports.svg'

import { Container, H2, GameList} from './styles'

interface Game {
  id: string;
  name: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    api('/games').then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <Container>
      <img src={logo} alt="logo nlw eSports" />
      <H2>Seu <span>duo</span> está aqui.</H2>

      <GameList>
        {
          games.map(game => (
            <Gamebanner key={game.id} bannerUrl={game.bannerUrl} title={game.name} adsCount={game._count.ads} />
          ))
        }
      </GameList>

      <Dialog.Root>
        <CreateAdBanner />
        <CreatedAdModal/>

      </Dialog.Root>

    </Container>
  )
}

export default App
