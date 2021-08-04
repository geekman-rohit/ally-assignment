import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import { OKR } from '../models/OKR';
import CloseSvg from "bootstrap-icons/icons/x.svg"


const Backdrop = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.7);
  z-index: 3;
  width: 100%;
  height: 100%;
  padding: 10rem 2rem;

`
const Container = styled.div`
  max-width: 800px;
  z-index: 4;
  background: white;
  border-radius: 4px;
  position: relative;
  padding-bottom: 1rem;
  margin: 0 auto;
`
const Header = styled.header`
  border-radius: 4px;
  padding: 1rem;
  margin: 0;
  background: #eee;
  font-size: 1.25rem;
  position: relative;
  
`
export const Data = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);

  }
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-right: 0;
  border-bottom: 0;
  margin: 1rem;
  dt, dd {
    padding: 1rem;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;

    margin: 0;
    font-size: 0.9rem;
  }
  dt {
    background-color: #f4f4f4;
  }
`
const CloseButton = styled.button`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  background: url(${CloseSvg});
  border: 0;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  background-size: 1.5rem 1.5rem;
  border: 0;
  padding: 0.5rem;
  background-color: none;
  background-repeat: no-repeat;
  background-position: center;
  &: hover {
    background-color: #ccc;

  }
  box-sizing: border-box;

`
export type SelectedObjectiveContext = {
  selectedObjective: OKR | null,
  setSelectedObjective: (value: OKR | null) => void
}
const defaultValue = {
  selectedObjective: null,
  setSelectedObjective: (value: OKR | null) => {}
}
export const ModalContext = React.createContext<SelectedObjectiveContext>(defaultValue);


export function Modal() {
  const {selectedObjective, setSelectedObjective} = useContext(ModalContext)
  console.log(selectedObjective)

  const onCloseClick = useCallback(()=>{
    setSelectedObjective(null)
  }, [setSelectedObjective])


  if(!selectedObjective) {
    return null
  }
  return (
    <Backdrop>
      <Container>
        <Header><CloseButton onClick={onCloseClick} aria-label="close"></CloseButton>{selectedObjective.title}</Header>
        <Data>
          <dt>id</dt>
          <dd>{selectedObjective.id}</dd>
          <dt>Category</dt>
          <dd>{selectedObjective.category}</dd>
          <dt>Metric Name</dt>
          <dd>{selectedObjective.metric_name}</dd>
          <dt>Metric Start</dt>
          <dd>{selectedObjective.metric_start}</dd>
          <dt>Metric Target</dt>
          <dd>{selectedObjective.metric_target}</dd>
          <dt>Archived</dt>
          <dd>{selectedObjective.archived}</dd>
          {
            selectedObjective.parent &&
            <>
              <dt>Parent</dt>
              <dd>{selectedObjective.parent.title}</dd>
            </>
          }



        </Data>
      </Container>
    </Backdrop>
  );
}
