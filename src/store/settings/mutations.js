import { LocalStorage } from "quasar";


export function addScoreValue(state, payload) {
  state.scoreValues.push(payload);
  state.scoreValues = state.scoreValues.sort((a, b) => a.value - b.value);
  LocalStorage.set('scoreValues', JSON.stringify(state.scoreValues))
}

export function changeScoreValueStatus(state, scoreValue) {
  let el = state.scoreValues.find(o => o.value == scoreValue.value);
  el.checked = !el.checked;
  LocalStorage.set('scoreValues', JSON.stringify(state.scoreValues))
}

export function deleteScoreValues(state, payload) {
  state.scoreValues = state.scoreValues.filter(sv => {
    return !payload.includes(sv.value)
  })
  LocalStorage.set('scoreValues', JSON.stringify(state.scoreValues))
}
