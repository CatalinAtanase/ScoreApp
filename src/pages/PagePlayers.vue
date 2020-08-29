<template>
  <q-page class="q-px-md q-py-xl">
    <q-dialog v-model="showAddPlayer">
      <add-player />
    </q-dialog>
    <q-list class="column q-pb-lg">
      <Player
        v-for="(player, index) in allPlayers"
        :key="index"
        :id="index"
        :player="player"
        @score-modal="openScoreModal(player, index)"
      />
    </q-list>

    <q-responsive v-if="allPlayers.length == 0" :ratio="1 / 1.2">
      <div
        class="rounded-borders column  justify-start items-center content-center"
      >
        <div class="">
          <q-avatar
            square
            size="250px"
            text-color="primary"
            icon="emoji_people"
          />
        </div>
        <div class="text-h6">Add some players</div>
        <div class="">
          <q-avatar
            square
            size="100px"
            text-color="primary"
            icon="arrow_downward"
          />
        </div>
      </div>
    </q-responsive>

    <q-page-sticky elevated position="bottom" :offset="[0, 0]" class="bg-white q-pb-md ">
      <div class="col text-center">
        <q-btn @click="openPlayerModal" fab icon="add" color="primary" />
      </div>
    </q-page-sticky>

    <q-dialog v-model="dialog" position="bottom">
      <Score :id="playerId" :player="player" />
    </q-dialog>
  </q-page>
</template>

<script>
import Player from "components/players/Player.vue";
import AddPlayer from "components/players/AddPlayer.vue";
import Score from "components/players/ScoreTable.vue";
import { mapGetters } from "vuex";

export default {
  name: "Players",
  data() {
    return {
      addBtn: true,
      showAddPlayer: false,
      scoreModal: false,
      dialog: false,
      position: "bottom",
      player: "",
      playerId: ""
    };
  },
  components: {
    Player,
    "add-player": AddPlayer,
    Score
  },
  computed: {
    ...mapGetters("players", ["allPlayers"])
    //   return this.$store.getters['players/players']
  },
  methods: {
    openPlayerModal() {
      this.showAddPlayer = true;
    },
    openScoreModal(player, id) {
      // this.scoreModal = true;
      this.dialog = true;
      this.player = player;
      this.playerId = id;
    }
  }
};
</script>

<style lang="scss" scoped>
.list-complete-item {
  transition: all 0.5s;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  /*   position: absolute; */
}
</style>
