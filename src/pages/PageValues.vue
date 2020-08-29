<template>
  <q-page class="q-px-md q-py-xl">
    <div class="text-h5 text-center q-mb-md">Shortcut score values</div>

    <q-dialog v-model="addValues">
      <AddScoreValue :scoreValues="scoreValues" />
    </q-dialog>

    <q-dialog v-model="removeValues">
      <RemoveScoreValues :scoreValues="scoreValues" />
    </q-dialog>

    <div class="row">
      <div
        v-for="sv in scoreValues"
        :key="sv.value"
        class="q-gutter-sm col-4 q-ma-none"
      >
        <q-checkbox
          @click.native="clickScoreValues(sv)"
          v-model="checkedOptions"
          :val="sv.value"
          :label="sv.label"
          color="primary"
          class="q-ma-xs"
        />
      </div>
    </div>
    <q-page-sticky position="bottom" :offset="[0, 10]">
      <div class="col text-center">
        <q-btn @click="openAddValuesModal" fab icon="add" color="primary" class="q-mx-md" />
        <q-btn @click="openRemoveValuesModal" fab icon="remove" color="negative" class="q-mx-md" />
      </div>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddScoreValue from "components/settings/AddScoreValue.vue";
import RemoveScoreValues from "components/settings/RemoveScoreValues.vue";

export default {
  name: "Values",
  components: {
    AddScoreValue,
    RemoveScoreValues,
  },
  data() {
    return {
      addValues: false,
      removeValues: false,
      checkedOptions: []
    };
  },
  computed: {
    ...mapGetters("settings", ["scoreValues"])
  },
  methods: {
    ...mapActions("settings", ["setScoreValues", "changeScoreValueStatus"]),

    openAddValuesModal() {
      this.addValues = true;
    },
    openRemoveValuesModal() {
      this.removeValues = true
    },
    clickScoreValues(sv) {
      this.changeScoreValueStatus(sv);
    }
  },
  created() {
    if (!this.$q.localStorage.getItem("scoreValues")) {
      this.setScoreValues();
    }

    this.checkedOptions = this.scoreValues.reduce(
      (a, o) => (o.checked && a.push(o.value), a),
      []
    );
  }
};
</script>
