<template>
  <v-app class="grey lighten-4">
    <v-content class="mx-4 mb-4">
      <!-- <v-toolbar flat app>
        <v-toolbar-title class="text-uppercase">
          <span>Inventory </span>
          <span class="font-weight-light"> List</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="grey">
          <span>Sign Out</span>
        </v-btn>
      </v-toolbar> -->
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
