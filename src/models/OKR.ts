export type OKRModel = {
  id: string,
  category: string,
  title: string,
  metric_name: string,
  metric_start: string,
  metric_target: string,
  parent_objective_id: string,
  archived: string
}

export type OKR = {
  id: string,
  category: string,
  title: string,
  metric_name: string,
  metric_start: string,
  metric_target: string,
  children: OKR[],
  archived: string,
  parent: OKR | undefined
}
