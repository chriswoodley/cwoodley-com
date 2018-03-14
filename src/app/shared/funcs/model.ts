export const model = <T>(defaults: T) =>
  (props: Partial<T>): Readonly<T> => Object.assign(Object.create(null), defaults, props);
