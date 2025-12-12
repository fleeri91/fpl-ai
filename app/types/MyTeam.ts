import type { Pick, EntryHistory } from '@/types/fpl/Picks'

export interface MyTeamRoot {
  ok: boolean
  gameweek: number
  picks: EnrichedPick[]
  entryHistory: EntryHistory
}

export interface EnrichedPlayer {
  id: number
  first_name: string
  second_name: string
  web_name: string
  team: string | undefined
  position: string | undefined
  now_cost: number
  total_points: number
  selected_by_percent: string
  minutes: number
  goals_scored: number
  assists: number
  clean_sheets: number
  goals_conceded: number
  own_goals: number
  penalties_saved: number
  penalties_missed: number
  yellow_cards: number
  red_cards: number
  bonus: number
  bps: number
  influence: string
  creativity: string
  threat: string
  ict_index: string
  form: string
}

export interface EnrichedPick extends Pick {
  player: EnrichedPlayer
}
