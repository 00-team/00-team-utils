const C = (condition: unknown, cls: string) => (!!condition ? ` ${cls} ` : '')

export { C }
