export interface User {
  user_id: number
  full_name: string
  email: string
  phone?: string
  rfid_tag?: string
  car_brand?: string
  car_model?: string
  created_at: Date
}

