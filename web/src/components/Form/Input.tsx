import {InputHTMLAttributes} from 'react'
import styled from 'styled-components'

const StyleInput = styled.input`
  color: #A1A1AA;
  background-color: #18181B;
  border: 0;
  padding: 1rem;
  width: 100%;
  border-radius: 4px;

  ::placeholder{
    color: #A1A1AA;
  }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
  return(
    <StyleInput {...props} />
  )
}