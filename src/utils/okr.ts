import { OKRModel, OKR } from "../models/OKR";


function processSingleOKR(data: OKRModel): OKR {
  const okr: OKR = {
    id: data.id,
    category: data.category,
    title: data.title,
    metric_name: data.metric_name,
    metric_start: data.metric_start,
    metric_target: data.metric_target,
    children: [],
    archived: data.archived,
    parent: undefined
  }
  return okr
}
export function processOKRs(data: OKRModel[]): OKR[] {
  const cache = new Map<string, OKR>()
  data.forEach((entry: OKRModel) => {
    const okr = processSingleOKR(entry)
    if(entry.parent_objective_id && cache.has(entry.parent_objective_id)){
      const parent = cache.get(entry.parent_objective_id)
      okr.parent = parent
      cache.get(entry.parent_objective_id)?.children.push(okr)
    } else {
      cache.set(okr.id, okr)
    }
  })
  return Array.from(cache.values())
}