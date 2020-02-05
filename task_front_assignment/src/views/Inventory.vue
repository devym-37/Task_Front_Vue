<template>
  <div class="inventory">
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase">
        <div class="subheading grey--text mt-8">Inventory List</div>
        <span>Filter : </span>
        <span class="font-weight-light"
          >Filter by Model, Make, YEAR, etc..</span
        >
        <v-btn flat color="grey--text ml-12">
          <span>Update Filter</span>
        </v-btn>
      </v-toolbar-title>
    </v-toolbar>
    <v-container class="my-5">
      <v-card class="pa-5">
        <v-layout row wrap>
          <v-flex xs3 md1>
            <div class="grey--text">No</div>
          </v-flex>
          <v-flex xs3 md2>
            <div class="grey--text">Vin#</div>
          </v-flex>
          <v-flex xs3 md2>
            <div class="grey--text">Model</div>
          </v-flex>
          <v-flex xs3 md1>
            <div class="grey--text">Make</div>
          </v-flex>
          <v-flex xs3 md2>
            <div class="grey--text">Year</div>
          </v-flex>
          <v-flex xs3 md1>
            <div class="grey--text">MSRP</div>
          </v-flex>
          <v-flex xs3 md1>
            <div class="grey--text">Status</div>
          </v-flex>
          <v-flex xs3 md1>
            <div class="grey--text">Booked</div>
          </v-flex>
          <v-flex xs3 md1>
            <div class="grey--text">Listed</div>
          </v-flex>
        </v-layout>
      </v-card>
      <fakeDataChart />
    </v-container>
    <Popup />
  </div>
</template>

<script>
import fakeDataChart from "@/components/FakeDataChart";
import Popup from "@/components/Popup";

export default {
  components: { fakeDataChart, Popup },
  data: () => {
    return {
      fakeDatas: [
        {
          No: "1",
          Vin: "MNBUMF050FW496402",
          Model: "320i",
          Make: "BMW",
          Year: "2014",
          MSRP: "147,000",
          Status: "ordered",
          Booked: "y",
          Listed: "n"
        },
        {
          No: "2",
          Vin: "4JDBLMF080FW468775",
          Model: "Camry",
          Make: "Toyota",
          Year: "2015",
          MSRP: "120,000",
          Status: "in stock",
          Booked: "y",
          Listed: "n"
        },
        {
          No: "3",
          Vin: "TFBAXXMAWAFS71274",
          Model: "Focus",
          Make: "Ford",
          Year: "2016",
          MSRP: "130,000",
          Status: "ordered",
          Booked: "n",
          Listed: "y"
        },
        {
          No: "4",
          Vin: "G3SBUMF080FW470449",
          Model: "Civic",
          Make: "Honda",
          Year: "2016",
          MSRP: "140,000",
          Status: "sold",
          Booked: "n",
          Listed: "n"
        }
      ]
    };
  }
};
</script>
