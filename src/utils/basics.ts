const C = (condition: unknown, cls: string) => (!!condition ? ` ${cls} ` : '')

const Empty = (o: Object) => Object.keys(o).length === 0

export { C, Empty }
