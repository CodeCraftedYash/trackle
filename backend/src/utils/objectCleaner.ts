export function objectCleaner<T extends object>(obj: Partial<T>): Partial<T> {
  const cleaned: Partial<T> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== '' && value !== null && value !== undefined && key !== 'id') {
      cleaned[key as keyof T] = value as T[keyof T];
    }
  }
  return cleaned;
}
