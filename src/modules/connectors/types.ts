export interface Connector {
  connector_id: number
  charge_point_id: number
  capacity: number
  type: "AC" | "DC"
  status: "Active" | "Faulty" | "Occupied"
}

