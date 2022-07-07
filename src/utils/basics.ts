/**
 * @param cls if not provided the return class would be ***active***
 * @returns cls if condition is true **ELSE** empty string
 * ```js
 * !!condition ? ` ${cls || 'active'} ` : ""
 * ```
 */
const C = (condition: unknown, cls?: string) =>
    !!condition ? ` ${cls || 'active'} ` : ''

const Empty = (o: Object) => Object.keys(o).length === 0

const NFormatter = Intl.NumberFormat('en', { notation: 'compact' })

type DN = (number: number, min?: number, max?: number) => string
const DisplayNumbers: DN = (n, mn = 1_000, mx) => {
    if (!mx) mx = mn * 10
    let mx_display = NFormatter.format(mx)

    mx.toString().length - 1
    if (mx < mn) throw Error('max cant be smaller that min')
    const s = (_: number) => _.toString()

    if (n <= mn) return s(n)
    if (n >= mx) return '+' + mx_display

    return NFormatter.format(n)
}

export { C, Empty, DisplayNumbers }
