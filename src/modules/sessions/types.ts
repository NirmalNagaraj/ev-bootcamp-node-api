export interface Session {
    transaction_id: number
    session_started: Date
    session_stopped: Date | null
    charge_point_id: number
    user_id: number
    connector_id: number
    start_meter_value: number
    stop_meter_value: number | null
    bill_amount: number | null
    currency: string
    is_completed: boolean
    tariff_id: number
  }
  
  