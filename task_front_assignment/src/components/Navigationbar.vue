<template>
  <nav>
    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-img :aspect-ratio="3 / 1" src="../assets/logo.png" />
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      drawer: true,
      links: [
        { text: "Inventory", route: "/inventory" },
        { text: "Commission", route: "/commission" },
        { text: "Manage Market", route: "/managemarket" },
        { text: "Manage Customer", route: "/managecustomer" },
        { text: "Report Setting", route: "/reportsetting" },
        { text: "Sign Out", route: "/" }
      ]
    };
  }
};
</script>
