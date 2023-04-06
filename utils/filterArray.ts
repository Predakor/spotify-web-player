export default function filterArray<T>(tracks: Array<T | null | undefined>) {
  return tracks.filter((track) => track) as T[];
}
