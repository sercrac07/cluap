export function toCamelCase(str: string) {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase())
}

export type ToCamelCase<T extends string> = T extends `${infer F}_${infer R}` ? `${F}${Capitalize<ToCamelCase<R>>}` : T
