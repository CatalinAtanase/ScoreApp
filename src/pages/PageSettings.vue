<template>
  <q-page class="q-px-md q-py-xl">
    <div class="text-h5 text-center q-mb-md">Settings</div>
    <q-list bordered class="">
     <q-item
       clickable
       v-ripple
       to="/settings/values"
       exact>
        <q-item-section class="text-h6">Values </q-item-section>
        <q-item-section avatar>
          <q-icon color="primary" name="keyboard_arrow_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "Settings"
};
</script>
