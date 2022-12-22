import styled from "styled-components"
import {styled as Style} from '@stitches/react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from '@radix-ui/react-select'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

// style modal radixUI

export const  DialogOverlay = Style(Dialog.Overlay, {
  backgroundColor: 'rgba(0,0,0,.6)',
  inset: 0,
  position: 'fixed',
})

export const DialogContent = Style(Dialog.Content,{
  maxWidth: '488px',
  width: '100%',
  backgroundColor: '#2A2634',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  color: '#fff',
  borderRadius: '8px',
  padding: '2rem 2.5rem',
  fontSize: '1rem'
})

export const DialogTitle = Style(Dialog.Title,{
  fontSize: '2rem',
  fontWeight: 'bold'
})

export const Form = styled.form`
  margin-top: 2.5rem;
`

export const InputLabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

// style select RadixUI

export const SelectTrigger = Style(Select.Trigger,{
  color: '#a1a1aa',
  backgroundColor: '#18181a',
  border: '0',
  padding: '1rem',
  width: '100%',
  borderRadius: '4px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const SelectContent = Style(Select.Content, {
  backgroundColor: '#18181a',
  padding: '1rem',
  color: '#a1a1aa',
  borderRadius: '4px',
  boxShadow: '2px 2px 3px rgba(0,0,0,.5)',

})

export const SelectViewport = Style(Select.Viewport, {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  cursor: 'pointer',

})

// style toggleGroup RadixUI

export const ToggleGroupRoot = Style(ToggleGroup.Root, {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '.25rem',
})

export const ToggleGroupItem = Style(ToggleGroup.Item,{
  width: '2rem',
  height: '2rem',
  backgroundColor: '#18181a',
  borderRadius: '4px',
  fontWeight: 'bold',
  color: '#a1a1aa',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .25rem;

  &:hover{
      cursor: pointer;
  }

`

export const Day = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #18181B;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  font-weight: bold;
`

export const CheckboxGroup = styled.div`
  color: #fff;

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 500;

  input{
      margin-right: 8px ;
  }
`

// style checkbox RadixUI

export const CheckboxRoot = Style(Checkbox.Root, {
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '4px',
  backgroundColor: '#18181b'
})

export const CheckboxIndicator = Style(Checkbox.Indicator, {
  width: '1rem',
  height: '1rem',
  color: '#34D399'
})

export const ButtonGroup = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: end;
  margin-top: 1.5rem;


  button{
      padding: 0.75rem 1.25rem;
      border-radius: 6px;
      font-weight: 600;
      color: #fff;
      background-color: #71717A;

      display: flex;
      align-items: center;

      height: 100%;

      svg{
          margin-right: 8px;
      }
  }

  button > button{
      background-color: #8B5CF6;
  }
`
