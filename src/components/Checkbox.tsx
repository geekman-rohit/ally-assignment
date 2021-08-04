import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import CheckSvg from "bootstrap-icons/icons/check.svg"

type Props = {
  name: string,
  onChange: (status: boolean) => void | boolean,
  value: boolean
}
console.log(CheckSvg)
const Label = styled.label`
  position: relative;
  padding: 1rem 1rem 1rem 0;
  cursor: pointer;
  font-size: 0.9rem;
  text-transform: capitalize;
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`
const Unchecked = styled.span`
  height: 1rem;
  width: 1rem;
  background-color: transparent;
  border: 1px solid #aaa;
  box-sizing: border-box;
  margin-right: 0.5rem;
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background:url(${CheckSvg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    display: none;
  }
`
const Checked = styled(Unchecked)`
  &::after {
    display: block;
  }
`
export function Checkbox({name, value, onChange}: Props) {
  const _onChange = (e: ChangeEvent<HTMLInputElement>)=>{
    const target = e.target
    onChange(target.checked)
  }
  return (
    <Label>
      <input onChange={_onChange} checked={value} type="checkbox" name={name} value={name} />
      {
        value 
        ? <Checked role="presentation"></Checked> 
        : <Unchecked role="presentation"></Unchecked> 
      }
      <span>{name}</span>
    </Label>
  );
}