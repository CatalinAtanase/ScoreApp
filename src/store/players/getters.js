export function allPlayers ( state ) {
    return state.players
}

export function getPlayer (state) {
    return function(id) {
        return state.players[id]
    }
}