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
import Library from '../assets/library.json';
import router from "@/router";

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
        value: 'organization.address.fullAddress',
        filterable: true
      }
    ],
    filters: {
      fat: [],
      carbs: [],
      iron: [],
    },
    search: '',
    libraries: Library
  }),
  created() {
    this.libraries = this.libraries.map((item) => {
      return {
        desc: item.data.general.description.replace(/<\/?[^>]+(>|$)/g, ""),
        ...item.data.general
      }
    })

  },
  computed: {
    filteredLibrary() {
      console.log(this.libraries)
      return this.libraries.filter(d => {
        return Object.keys(this.filters).every(f => {
          return this.filters[f].length < 1 || this.filters[f].includes(d[f])
        })
      })
    }
  },
  methods: {
    rowClick(item) {
      console.log(item)
      router.push({ name: 'details', params: { id: item.id } })
    }
  }
}
</script>

<style scoped>
  .elevation-1 td {
    padding-top: 5px;
    padding-bottom: 5px;
  }
</style>