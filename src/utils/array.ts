export const shuffle = <T>(arr: Array<T>) => (arr.sort(() => (Math.random() - 0.5)))
export const deduplicate = <T>(arr: Array<T>) => (Array.from<T>(new Set<T>(arr)))
