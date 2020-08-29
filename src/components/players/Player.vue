<template>
  <div>
    <q-slide-item  @right="onRight" right-color="grey-2" >
      <template class="bg-negative" v-slot:right>
        <q-icon color="red" name="delete"  />
      </template>
     <q-item
        @click="$emit('score-modal')"
        clickable
        v-ripple>
        <q-item-section class="col text-center">
          <q-avatar
            size="md"
            color="primary"
            text-color="white"
            icon="create"
            @click.stop="$refs.nameInput.$el.focus()"
          />
        </q-item-section>
        <q-item-section class="col-6">
          <q-form @submit.prevent="updatePlayer({ id: id, name: player.name })">
            <q-input
              @blur="updatePlayer({ id: id, name: player.name })"
              borderless
              v-model.lazy="playerName"
              class="no-pointer-events"
              ref="nameInput"
              @keyup.enter="$event.target.blur()"
            />
          </q-form>
        </q-item-section>
        <q-item-section class="col text-center">
          <q-avatar
            size="md"
            color="primary"
            text-color="white"
            icon="remove"
            @click.stop="updateScore({ id, value: -1 })"
          />
        </q-item-section>
        <q-item-section class="col text-center q-ma-none">
          <div class="">
            {{ player.score }}
          </div>
        </q-item-section>
        <q-item-section class="col text-center">
          <q-avatar
            size="md"
            color="primary"
            text-color="white"
            icon="add"
            @click.stop="updateScore({ id, value: 1 })"
          />
        </q-item-section>
      </q-item>
    </q-slide-item>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import { updatePlayer } from "src/store/players/mutations";

export default {
  name: "Players",
  props: ["player", "id"],
  data() {
    return {};
  },
  computed: {
    playerName: {
      get() {
        return this.$store.state.players.players[this.id].name;
      },
      set(value) {
        this.updatePlayer({ id: this.id, name: value });
      }
    }
  },
  methods: {
    ...mapActions("players", ["updatePlayer", "updateScore", "changeScore", "removePlayer"]),
    onRight({ reset }) {
      this.$q.notify({
        message: `${this.player.name} has been removed.`,
        progress: true,
        color: 'red',
        timeout: 2000,
        actions: [
          { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
        ]
      })
      reset()
      setTimeout(() => {
        this.removePlayer(this.id)
      }, 500)

    },
  }
};
</script>

<style>
.input-number {
  margin: 0;
  padding: 0;
  width: 40px;
  text-align: center;
  border: none;
}
</style>
