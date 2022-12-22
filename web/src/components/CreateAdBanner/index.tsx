import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'
import { Box, TopGradient } from "./style";


export function CreateAdBanner(){
  return(
    <TopGradient>
        <Box>
          <div>
            <h2>Não encontrou seu duo?</h2>
            <p>Publique um anúncio para encontrar novos players!</p>
          </div>

          <Dialog.Trigger> <MagnifyingGlassPlus size={24}/> Publicar anúncio</Dialog.Trigger>
        </Box>
      </TopGradient>
  )
}