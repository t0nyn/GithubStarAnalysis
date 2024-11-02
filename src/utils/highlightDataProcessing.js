export function getFirstUsers(data) {
    const firstUsers = [...data]
        .sort((a, b) => new Date(a.starred_at) - new Date(b.starred_at))
        .slice(0, 5);

    return firstUsers?.map(entry => ({
        name: entry.user.name,
        handle: `@${entry.user.login}`,
    }))

}

export function getRecentUsers(data) {
    const recentUsers = [...data]
        .sort((a, b) => new Date(b.starred_at) - new Date(a.starred_at))
        .slice(0, 5);

    return recentUsers?.map(entry => ({
        name: entry.user.name || entry.user.login,
        handle: `@${entry.user.login}`,
    }))
}

export function getPopularUsers(data) {
    const popularUsers = [...data]
        .sort((a, b) => b.user.followers - a.user.followers)
        .slice(0, 5);

    return popularUsers?.map(entry => ({
        name: entry.user.name || entry.user.login,
        handle: `@${entry.user.login}`,
        followers: entry.user.followers,
    }))
}