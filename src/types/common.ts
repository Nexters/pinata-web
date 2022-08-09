export type ValueList<T extends unknown> = readonly T[]

export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer E)[] ? E : never
