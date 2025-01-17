// types/global.d.ts
interface DataLayerEvent {
  event: string
  [key: string]: any
}

interface Window {
  dataLayer: DataLayerEvent[]
}
