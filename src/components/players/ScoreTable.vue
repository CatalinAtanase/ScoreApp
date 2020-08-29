<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h5">{{ player.name }}</div>
      <div class="text-subtitle2">{{ player.score }}</div>
    </q-card-section>

    <q-separator />
    <div class="row justify-center">
      <q-card-actions
        v-for="option in options"
        :key="option"
        vertical
        class="text-center q-px-sm q-my-sm"
      >
        <q-btn
          @click="changeScore(option)"
          push
          rounded
          color="positive"
          icon="add"
        />
        <q-avatar size="lg" color="primary" text-color="white" class="q-my-sm"
          >{{option}}</q-avatar
        >
        <q-btn
          @click="changeScore(-option)"
          rounded
          push
          color="negative"
          icon="remove" />
      </q-card-actions>
    </div>
  </q-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["player", "id"],
  data() {
    return {
      dialog: false,
      position: "bottom"
    };
  },
  computed: {
    ...mapGetters("settings", ["scoreValues"]),
    options() {
      return this.scoreValues.reduce(
        (a, o) => (o.checked && a.push(o.value), a),
        []
      );
    }
  },
  methods: {
    ...mapActions("players", ["updateScore"]),
    open(position) {
      this.position = position;
      this.dialog = true;
    },
    changeScore(value) {
      this.updateScore({ id: this.id, value: parseInt(value) });
    }
  }
};
</script>

<style></style>
