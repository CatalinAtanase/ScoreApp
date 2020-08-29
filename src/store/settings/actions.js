import { LocalStorage } from 'quasar'
export function addScoreValue({ commit }, payload) {
    commit('addScoreValue', payload)
}

export function changeScoreValueStatus({ commit }, payload) {
    commit('changeScoreValueStatus', payload)
}

export function setScoreValues({ commit }) {
  let scoreValues = [
    { value: 3, label: "3", checked: true },
    { value: 5, label: "5", checked: true },
    { value: 8, label: "8", checked: true },
    { value: 10, label: "10", checked: true },
    { value: 25, label: "25", checked: false },
    { value: 50, label: "50", checked: false },
    { value: 100, label: "100", checked: false },
  ];

  LocalStorage.set("scoreValues", JSON.stringify(scoreValues));
}

export function deleteScoreValues({commit}, payload) {
  commit('deleteScoreValues', payload)
}