export function updatePlayer ({ commit }, payload) {
    commit('updatePlayer', payload)
}

export function updateScore ({ commit }, payload) {
    commit('updateScore', payload)
}

export function addPlayer ({ commit }, player) {
    commit('addPlayer', player)
}

export function removePlayer ({ commit }, id) {
    commit('removePlayer', id)
}