import { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { OKR } from "../models/OKR";
import { ReactComponent as ChecklistSvg } from "bootstrap-icons/icons/person-lines-fill.svg"
import { ReactComponent as ExapndSvg } from "bootstrap-icons/icons/caret-down-fill.svg"
import { ReactComponent as CheckSvg } from "bootstrap-icons/icons/check.svg"
import { ModalContext } from "./Modal";


type Props = {
  objective: OKR
}
const List = styled.ul`
  display: block;
  margin: 0 2rem 1.5rem;
  padding: 0;
  border: 1px solid #eee;
`
const ListItem = styled.li`
  display: block;
  margin: 0;
  border-bottom: 1px solid #ddd;
  font-size: 1em;
  line-height: 1.5;
  box-sizing: border-box;
  &:last-child {
    border-bottom: 0;
  }
  transition: background 0.5s;
`

const ChildListItem = styled(ListItem)`
  border: 0;
  padding: 1.25rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: 0;
  }
  font-size: 0.95rem;

`
const ChecklistIcon = styled(ChecklistSvg)`
  color: #777;
  width: 18px;
  min-width: 18px;
  height: auto;
  viewbox: auto;
  margin-right: 1rem;
  display: block;
  box-sizing: border-box;

`

const UnselectedListTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1.5rem 1.5rem;
`
const SelectedListTitleWrapper = styled(UnselectedListTitleWrapper)`
  font-weight: 600;
  .icon {
    transform: rotate(180deg);
    transform-origin: center;
  }
`
const ExpandButton = styled.button`
  border: 0;
  padding: 0.5rem;
  text-align: center;
  background: none;
  &: hover {
    background: #f1f1f1;

  }
  span {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  cursor: pointer;
`
const ExpandIcon = styled(ExapndSvg)`
  color: #777;
  height: 0.75rem;
  width: auto;
`
const CheckIcon = styled(CheckSvg)`
  color: #777;
  margin-right: 0.5rem;
  height: 1.25rem;
  width: auto;
`
const ListTitle = styled.span`
  flex-grow: 1;
`
const Link = styled.a`
  color: #0A4A94;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export function CollapsibleListItem({ objective }: Props) {
  const [expanded, setExpanded] = useState(false)
  const {setSelectedObjective} = useContext(ModalContext)
  const toggleHandler = useCallback((event) => {
    event.preventDefault()
    event.stopPropagation()
    setExpanded(!expanded)

  }, [expanded])

  const onTitleClick = (objective: OKR) => {
    return (event: any) => {
      event.preventDefault()
      event.stopPropagation()
      setSelectedObjective(objective)
    }
  }

  const ListTitleWrapper =  expanded ? SelectedListTitleWrapper : UnselectedListTitleWrapper
  return (
    <ListItem key={objective.id}>
      <ListTitleWrapper onClick={toggleHandler}>
        <ChecklistIcon role="presentation" />
        <ListTitle><Link onClick={onTitleClick(objective)} href="#">{objective.title}</Link></ListTitle>
        <ExpandButton onClick={toggleHandler} aria-pressed={expanded}><ExpandIcon className="icon" />
        <span>Expand</span>
        </ExpandButton>
      </ListTitleWrapper>
      {
        objective.children.length > 0 && expanded &&
        <List>
          {
            objective.children.map((child) => {
              return (
                <ChildListItem key={child.id}>
                  <CheckIcon role="presentation" />
                  <ListTitle><Link onClick={onTitleClick(child)}  href="#">{child.title}</Link></ListTitle>
                </ChildListItem>
              )
            })

          }
        </List>
      }
    </ListItem>
  )
}