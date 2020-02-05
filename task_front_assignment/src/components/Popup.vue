<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="grey" dark v-on="on">Upload File</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Add Inventory</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="VIN#" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Model" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Make" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Year" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="MSRP" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Booked" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Listed" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => {
    return {
      dialog: false
    };
  }
};
</script>
