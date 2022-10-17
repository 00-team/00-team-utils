const OO_UID_COUNTER: { [k: string]: number } = {}

function UniqueID(prefix = 'default') {
    if (!OO_UID_COUNTER[prefix]) {
        OO_UID_COUNTER[prefix] = 0
    }

    const id = ++OO_UID_COUNTER[prefix]

    if (prefix === 'default') {
        return `${id}`
    }

    return `${prefix}${id}`
}

export { UniqueID }
