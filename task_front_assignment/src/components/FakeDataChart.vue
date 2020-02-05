<template>
  <div>
    <v-card
      class="mx-0 pa-4"
      v-for="fakeData in fakeDatas"
      :key="fakeData.No"
      selectable
      selected-color="red"
    >
      <v-layout row wrap>
        <v-checkbox v-model="checkbox1"></v-checkbox>
        <v-flex class="mt-5">
          <div>{{ fakeData.No }}</div>
        </v-flex>
        <v-flex xs3 md2 class="mt-5">
          <div>{{ fakeData.Vin }}</div>
        </v-flex>
        <v-flex xs3 md2 class="mt-5">
          <div>{{ fakeData.Model }}</div>
        </v-flex>
        <v-flex xs3 md1 class="mt-5">
          <div>{{ fakeData.Make }}</div>
        </v-flex>
        <v-flex xs3 md2 class="mt-5">
          <div>{{ fakeData.Year }}</div>
        </v-flex>
        <v-flex xs3 md1 class="mt-5">
          <div>{{ fakeData.MSRP }}</div>
        </v-flex>
        <v-flex xs3 md1 class="mt-5">
          <div>{{ fakeData.Status }}</div>
        </v-flex>
        <v-flex xs3 md1 class="mt-5">
          <div>{{ fakeData.Booked }}</div>
        </v-flex>
        <v-flex xs3 md1 class="mt-5">
          <div>{{ fakeData.Listed }}</div>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
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
