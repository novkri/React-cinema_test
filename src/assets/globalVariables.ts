export const enum Types {
    twod = '2D',
    threed = '3D',
    unset = '',
}

export interface Place {
    id: string
    row: string
}

export interface TicketData {
    time: string
    type: Types
    date: string
    placeId: number
    placeRow: number
}