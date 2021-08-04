import React from 'react';
import styled from 'styled-components';
import { Checkbox } from './Checkbox';
type Props = {
  keys:  Iterable<string>,
  label: string,
  value: string[]
  onChange: (value: string[]) => void
}
const Container = styled.div`
  border: 1px solid #ccc;
  background: #fff;
  padding: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`
const Heading = styled.h4`
  font-weigtht: 600;
  padding: 0;
  margin: 0 0 1rem;
`
export function MultiSelectCheckbox({keys, label, onChange, value}: Props) {
  const filters = Array.from(keys);
  const selected = value;

  const onSelectionChange = (key: string) => {
    return (status: boolean)=>{
      const index = selected.indexOf(key);
      if(status && index === -1) {
        onChange([...selected, key])
      } else if(!status && index > -1) {
        onChange([...selected.slice(0,index), ...selected.slice(index+1)])
      }
    }
  }
  const isChecked = (key: string) => selected.indexOf(key) > -1

  return(
    <Container>
      <Heading>{label}</Heading>
      <div>
        {
          filters.map(
            (filter) => <Checkbox key={filter} onChange={onSelectionChange(filter)} name={filter} value={isChecked(filter)} />
          )
        }
      </div>
    </Container>
  )
}