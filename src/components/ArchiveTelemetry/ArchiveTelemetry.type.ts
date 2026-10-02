export type ArchiveTelemetryProps = {
    speciesCount?: number
    favoriteCount: number
    typeCount?: number
    apiStatus: 'SYNCING' | 'ONLINE' | 'PARTIAL' | 'OFFLINE'
}
