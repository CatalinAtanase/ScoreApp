export function updatePlayer(state, payload) {
  state.players[payload.id].name = payload.name;
}

export function updateScore(state, payload) {
  state.players[payload.id].score += payload.value;
}

export function addPlayer(state, player) {
  state.players.push(player);
}

export function removePlayer(state, id) {
  state.players.splice(id, 1);
}
