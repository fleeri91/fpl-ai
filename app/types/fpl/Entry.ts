export interface EntryRoot {
  id: number
  joined_time: string
  started_event: number
  favourite_team: number
  player_first_name: string
  player_last_name: string
  player_region_id: number
  player_region_name: string
  player_region_iso_code_short: string
  player_region_iso_code_long: string
  years_active: number
  summary_overall_points: number
  summary_overall_rank: number
  summary_event_points: number
  summary_event_rank: number
  current_event: number
  leagues: Leagues
  name: string
  name_change_blocked: boolean
  entered_events: number[]
  kit: any
  last_deadline_bank: number
  last_deadline_value: number
  last_deadline_total_transfers: number
  club_badge_src: string
}

export interface Leagues {
  classic: Classic[]
  h2h: any[]
  cup: Cup
  cup_matches: CupMatch[]
}

export interface Classic {
  id: number
  name: string
  short_name?: string
  created: string
  closed: boolean
  rank: any
  max_entries: any
  league_type: string
  scoring: string
  admin_entry?: number
  start_event: number
  entry_can_leave: boolean
  entry_can_admin: boolean
  entry_can_invite: boolean
  has_cup: boolean
  cup_league?: number
  cup_qualified?: boolean
  rank_count?: number
  entry_percentile_rank?: number
  active_phases: ActivePhase[]
  entry_rank: number
  entry_last_rank: number
}

export interface ActivePhase {
  phase: number
  rank: number
  last_rank: number
  rank_sort: number
  total: number
  league_id: number
  rank_count?: number
  entry_percentile_rank?: number
}

export interface Cup {
  matches: any[]
  status: Status
  cup_league: any
}

export interface Status {
  qualification_event: any
  qualification_numbers: any
  qualification_rank: any
  qualification_state: any
}

export interface CupMatch {
  id: number
  entry_1_entry: number
  entry_1_name: string
  entry_1_player_name: string
  entry_1_points: number
  entry_1_win: number
  entry_1_draw: number
  entry_1_loss: number
  entry_1_total: number
  entry_2_entry: any
  entry_2_name: string
  entry_2_player_name: string
  entry_2_points: number
  entry_2_win: number
  entry_2_draw: number
  entry_2_loss: number
  entry_2_total: number
  is_knockout: boolean
  league: number
  winner: number
  seed_value: any
  event: number
  tiebreak: any
  is_bye: boolean
  knockout_name: string
}
