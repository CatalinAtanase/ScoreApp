<template>
  <q-card class="q-px-md q-py-md">
    <q-card-section>
      <div class="text-h6">Add player</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          outlined
          v-model="newPlayer.name"
          label="Player's name"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please add a name']"
          ref="inputAddPlayer"
        />
        <div class="text-right">
          <q-btn type="submit" label="Add" color="primary" v-close-popup />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["showModal"],
  data() {
    return {
      newPlayer: {
        name: "",
        score: 0
      }
    };
  },
  methods: {
    ...mapActions("players", ["addPlayer"]),
    onSubmit() {
      if (this.newPlayer.name.trim() == "") {
        this.$q.notify({
          message: `Name is required.`,
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
        message: `${this.newPlayer.name} has been added.`,
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
      this.addPlayer(this.newPlayer);
    },
    onReset() {}
  },
  mounted() {
    this.$refs.inputAddPlayer.$el.focus();
  },
  computed: {}
};
</script>

<style></style>
