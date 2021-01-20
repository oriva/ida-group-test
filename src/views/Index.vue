<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="filteredLibrary"
          item-key="id"
          :search="search"
          class="elevation-1"
          @click:row="rowClick"
      >
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import router from "@/router";
import {mapGetters} from "vuex";

export default {
  name: 'Index',
  data: () => ({
    selected: [],
    headers: [
      {
        text: 'Название',
        align: 'left',
        value: 'name',
        filterable: true
      },
      {
        text: 'Описание',
        value: 'desc',
        filterable: false
      },
      {
        text: 'Адрес',
        value: 'address.address',
        filterable: true
      }
    ],
    filters: {
      fat: [],
      carbs: [],
      iron: [],
    },
    search: '',
  }),
  computed: {
    ...mapGetters(['getLibraries']),
    filteredLibrary() {
      return this.getLibraries.filter(d => {
        return Object.keys(this.filters).every(f => {
          return this.filters[f].length < 1 || this.filters[f].includes(d[f])
        })
      })
    }
  },
  methods: {
    rowClick(item) {
      router.push({name: 'details', params: {id: item.id}})
    }
  }
}
</script>

<style lang="scss">
.elevation-1.v-data-table > .v-data-table__wrapper > table > tbody > tr {
  cursor: pointer;

  & > td {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>