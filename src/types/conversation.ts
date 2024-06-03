export type HistoryType = {
    role:  'user' | 'model';
    parts: PartsType[]
}

type PartsType = {
    text: string
}