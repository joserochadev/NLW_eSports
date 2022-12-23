import { useEffect, useState, FormEvent } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'
import { Check, GameController, CaretDown } from 'phosphor-react'

import { Input } from '../Form/Input'

import { api } from '../../services/api'

import { DialogOverlay, DialogContent, DialogTitle, Form, InputLabelGroup, CheckboxGroup, ButtonGroup, Day, Week, CheckboxRoot, CheckboxIndicator, SelectTrigger, SelectContent, SelectViewport, ToggleGroupRoot, ToggleGroupItem } from './styles'

interface Game {
  id: string;
  name: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

export function CreatedAdModal() {
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)
  const [idGameSelected, setIdGameSelected] = useState('')


  useEffect(() => {
    api('/games').then(response => {
      setGames(response.data)
    })
  }, [])


  async function handleCreateAd(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    console.log(data)

    if (!data.name) {
      return
    }

    try {
      await api.post(`/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hoursStart: data.hoursStart,
        hoursEnd: data.hoursEnd,
        useVoiceChannel: useVoiceChannel
      })

      alert('Anúncio criado com sucesso!')
    } catch (err) {
      alert('Erro Ao criar anúncio')
    }

  }


  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Publique um anúncio</DialogTitle>

        <Form onSubmit={handleCreateAd}>
          <InputLabelGroup>
            <label htmlFor="game">Qual o game?</label>
            <Select.Root name='game' >
              <SelectTrigger>
                <Select.Value  placeholder='Selecione o game que deseja jogar?' />
                <Select.Icon>
                  <CaretDown size={16} />
                </Select.Icon>
              </SelectTrigger>

              <Select.Portal>
                <SelectContent>
                  <Select.ScrollUpButton />
                  <SelectViewport>
                    {games.map(game => {
                      return (
                        <Select.Item key={game.id} value={game.id}>
                          <Select.ItemText>{game.name}</Select.ItemText>
                          <Select.ItemIndicator>
                            <Check />
                          </Select.ItemIndicator>
                        </Select.Item>

                      )
                    })}

                  </SelectViewport>
                  <Select.ScrollDownButton />
                </SelectContent>

              </Select.Portal>

            </Select.Root>
          </InputLabelGroup>

          <InputLabelGroup>
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input name='name' id='name' placeholder='Como te chamam dentro do game?' />
          </InputLabelGroup>


          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center', }}>
            <InputLabelGroup>
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input name='yearsPlaying' id='yearsPlaying' placeholder='Tudo bem ser ZERO' />
            </InputLabelGroup>

            <InputLabelGroup>
              <label htmlFor="discord">Qual seu Discord?</label>
              <Input name='discord' id='discord' placeholder='Usuario#0000' />
            </InputLabelGroup>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center', }}>
            <InputLabelGroup>
              <label htmlFor="yearsPlaying">Quando costuma jogar?</label>

              <ToggleGroupRoot type='multiple' value={weekDays} onValueChange={setWeekDays}>
                <ToggleGroupItem style={{ backgroundColor: `${weekDays.includes('0') ? '#8b56f6' : '#18181a'}` }} value='0' title='domingo'>D</ToggleGroupItem>

                <ToggleGroupItem style={{ backgroundColor: `${weekDays.includes('1') ? '#8b56f6' : '#18181a'}` }} value='1' title='segunda'>S</ToggleGroupItem>

                <ToggleGroupItem style={{ backgroundColor: `${weekDays.includes('2') ? '#8b56f6' : '#18181a'}` }} value='2' title='terca'>T</ToggleGroupItem>

                <ToggleGroupItem style={{ backgroundColor: `${weekDays.includes('3') ? '#8b56f6' : '#18181a'}` }} value='3' title='quarta'>Q</ToggleGroupItem>

                <ToggleGroupItem style={{ backgroundColor: `${weekDays.includes('4') ? '#8b56f6' : '#18181a'}` }} value='4' title='quinta'>Q</ToggleGroupItem>

                <ToggleGroupItem style={{ backgroundColor: `${weekDays.includes('5') ? '#8b56f6' : '#18181a'}` }} value='5' title='sexta'>S</ToggleGroupItem>

                <ToggleGroupItem style={{ backgroundColor: `${weekDays.includes('6') ? '#8b56f6' : '#18181a'}` }} value='6' title='sabado'>S</ToggleGroupItem>
              </ToggleGroupRoot>


            </InputLabelGroup>

            <InputLabelGroup>
              <label htmlFor="hoursStart">Qual horário do dia?</label>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center', }}>
                <Input name='hoursStart' id='hoursStart' type='time' placeholder='De' />
                <Input name='hoursEnd' id='hoursEnd' type='time' placeholder='Até' />
              </div>
            </InputLabelGroup>
          </div>

          <CheckboxGroup>
            <CheckboxRoot checked={useVoiceChannel} onCheckedChange={(checked) => {
              if (checked === true) {
                setUseVoiceChannel(true)
              } else {
                setUseVoiceChannel(false)
              }
            }}>
              <CheckboxIndicator >
                <Check size={20} />
              </CheckboxIndicator>
            </CheckboxRoot>
            <span>Costumo me conectar ao chat de voz</span>
          </CheckboxGroup>

          <ButtonGroup>
            <Dialog.Close type='button'>Cancelar</Dialog.Close>
            <button type='submit' style={{ backgroundColor: '#8B5CF6' }}> <GameController size={24} /> Encontrar Duo </button>
          </ButtonGroup>

        </Form>

      </DialogContent>
    </Dialog.Portal>
  )
}