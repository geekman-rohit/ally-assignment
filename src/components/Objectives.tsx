import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { OKRModel, OKR } from '../models/OKR';
import { processOKRs } from '../utils/okr';
import { CollapsibleListItem } from './CollapsibleListItem';
import { Modal, ModalContext } from './Modal';
import { MultiSelectCheckbox } from './MultiSelectCheckBox';
const OKR_URL = "https://okrcentral.github.io/sample-okrs/db.json"

const List = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Container = styled.main`
  max-width: 1024px;
  margin: 4rem auto;

`
export function Objectives() {
  const [objectives, setObjectives] = useState<OKR[]>([])
  const [categories, setCategories] = useState<Iterable<string>>([])
  const [categoryFilters, setCategoryFilters] = useState<string[]>([])
  const [selectedObjective, setSelectedObjective] = useState<OKR | null>(null)


  const onFilterChange = useCallback((value) => {
    setCategoryFilters(value)
  },[])

  useEffect(()=>{
    (async function fetchData() {
      const response = await fetch(OKR_URL).then(response => response.json())
      const processedokrs = processOKRs(response.data as unknown as OKRModel[])
      setObjectives(processedokrs)
      setCategories(new Set(processedokrs.map((item)=>item.category)))
    })();
  },[])

  const filteredObjectives = categoryFilters.length === 0 ? objectives: objectives.filter((item)=> categoryFilters.indexOf(item.category) > -1)
  console.log({categoryFilters, filteredObjectives})
  return(
    <ModalContext.Provider value={{selectedObjective, setSelectedObjective}}>
      <>
        <Container>
          <MultiSelectCheckbox value={categoryFilters} onChange={onFilterChange} keys={categories} label="Filter By Category" />
          <List>
            {
              filteredObjectives.map((objective)=>{
                return (
                  <CollapsibleListItem key={objective.id} objective={objective} />
                )
              })
            }
          </List>
        </Container>
        <Modal />
      </>
    </ModalContext.Provider>
  )
}