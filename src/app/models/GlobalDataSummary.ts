export interface GlobalDataSummary{
    state ?: string,
    total ?: {
        confirmed ?: number,
        deceased ?: number,
        recovered ?: number,
        tested ?: number
    }
    
}