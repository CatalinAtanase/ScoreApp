<template>
  <q-card class="q-px-md q-py-md">
    <q-card-section>
      <div class="text-h6">Remove Values</div>
    </q-card-section>

    <q-card-section
      class="q-pt-none scroll"
      style="height: 30vh; min-height: 200px;"
    >
      <div class="row" style="width: 50vw; max-width: 300px;">
        <div
          v-for="sv in scoreValues"
          :key="sv.value"
          class="q-gutter-sm col-6 q-ma-none q-my-xs"
        >
          <q-checkbox
            @click.native="clickScoreValues(sv)"
            v-model="optionsToDelete"
            :val="sv.value"
            :label="sv.label"
            color="primary"
            class="q-ma-none"
          />
        </div>
      </div>
    </q-card-section>
    <q-card-actions align="right" class="q-mt-md">
      <q-btn label="Delete" color="negative" v-close-popup @click="onSubmit" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["scoreValues"],
  data() {
    return {
      toDelete: [],
      optionsToDelete: []
    };
  },
  methods: {
    ...mapActions("settings", ["deleteScoreValues"]),
    clickScoreValues(sv) {
      this.toDelete.push(sv.value);
    },
    onSubmit() {
      this.$q.notify({
        message: `Removing ${this.optionsToDelete}.`,
        progress: true,
        color: "info",
        timeout: 2000,
        actions: [
          {
            label: "Dismiss",
            color: "white",
            handler: () => {
              /* ... */
            }
          }
        ]
      });
      this.deleteScoreValues(this.toDelete);
    },
    onReset() {}
  },
  computed: {}
};
</script>

<style></style>
