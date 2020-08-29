<template>
  <q-card class="q-px-md q-py-md">
    <q-card-section>
      <div class="text-h6">Add Score Value</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          outlined
          v-model="newValue.value"
          label="Value"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
          ref="inputAddValue"
        />
        <div class="text-right">
          <q-btn
            type="submit"
            label="Add"
            color="primary"
            v-close-popup />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["scoreValues"],
  data() {
    return {
      newValue: {
        label: "",
        value: "",
        checked: ""
      }
    };
  },
  methods: {
    ...mapActions("settings", ["addScoreValue"]),
    onSubmit() {
      if (this.newValue.value.trim() == "") {
        this.$q.notify({
          message: `Value is required.`,
          progress: true,
          color: "negative",
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
        return;
      }

      if (this.scoreValues.some(el => el.value == this.newValue.value)) {
        this.$q.notify({
          message: `Value already exists.`,
          progress: true,
          color: "negative",
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
        return;
      }

      this.$q.notify({
          message: `${this.newValue.value} has been added.`,
          progress: true,
          color: "positive",
          timeout: 1000,
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
      this.newValue.label = this.newValue.value;
      this.newValue.checked = false;
      this.addScoreValue(this.newValue);
    },
    onReset() {}
  },
  mounted() {
    this.$refs.inputAddValue.$el.focus();
  },
  computed: {}
};
</script>

<style></style>
