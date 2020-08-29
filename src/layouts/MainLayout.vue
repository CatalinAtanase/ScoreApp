<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          class="menu-btn"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg" />
          </q-avatar>
          <div class="absolute-center">
            Awesome Score
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="200"
      :breakpoint="767"
    >
      <div class="text-h5 q-py-md q-px-md">Navigation</div>
      <!-- drawer content -->
      <q-list>
        <q-item
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          exact
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon color="primary" :name="link.icon" />
          </q-item-section>
          <q-item-section>{{ link.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-tabs dense class="bg-primary text-white">
        <!-- <q-tab
          name="Go Back"
          icon="arrow_back"
          label="Go back"
          v-go-back.single
          
        /> -->
        <q-route-tab
          v-for="(link, index) in links"
          :key="index"
          :name="link.name"
          :icon="link.icon"
          :to="link.to"
          :label="link.name"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: "MainLayout",
  // components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      links: [
        {
          name: "Players",
          to: "/",
          icon: "emoji_people"
        },
        {
          name: "Help",
          to: "/help",
          icon: "help"
        },
        {
          name: "Settings",
          to: "/settings",
          icon: "settings"
        }
      ]
      // essentialLinks: linksData
    };
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 768px) {
  .menu-btn {
    display: none;
  }
}
</style>
