export type User = {
    token: any,
    id: any,
    name: any,
    role: any
}

export function getEmptyUser(): User {
    return {
        token: null,
        id: null,
        name: null,
        role: null
    }
}