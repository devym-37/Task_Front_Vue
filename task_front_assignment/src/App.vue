<template>
  <v-app class="grey lighten-4">
    <v-content class="mx-4 mb-4">
      <Navigationbar />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigationbar from "@/components/Navigationbar";

export default {
  name: "App",
  components: { Navigationbar },
  data: () => ({
    //
  })
};
</script>
