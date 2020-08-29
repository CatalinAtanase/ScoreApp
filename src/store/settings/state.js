import { LocalStorage } from "quasar";
import { setScoreValues } from "./actions";

const scoreValues = [
  { value: 3, label: "3", checked: true },
  { value: 5, label: "5", checked: true },
  { value: 8, label: "8", checked: true },
  { value: 10, label: "10", checked: true }
];

export default function() {
  return {
    scoreValues: JSON.parse(LocalStorage.getItem("scoreValues")) || scoreValues
  };
}
