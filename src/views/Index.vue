<template>
  <v-container>
    <v-app id="inspire">
      <v-data-table
          :headers="headers"
          :items="filteredLibrary"
          item-key="name"
          class="elevation-1"
      >
        <template #item.name="{ item }">
          <router-link :to="{ name: 'details', params: { id: item.id } }">
            {{ item.name }}
          </router-link>
        </template>
      </v-data-table>
    </v-app>
  </v-container>
</template>

<script>
import Library from '../assets/library.json';

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
        value: 'description'
      }
    ],
    filters: {
      fat: [],
      carbs: [],
      iron: [],
    },
    libraries: Library
  }),
  computed: {
    filteredLibrary() {
      console.log(this.libraries)
      return this.libraries.map((item) => {
        return {
          ...item.data.general
        }
      })
      // return this.libraries.filter(d => {
      //   return Object.keys(this.filters).every(f => {
      //     return this.filters[f].length < 1 || this.filters[f].includes(d[f])
      //   })
      // })
    }
  }
}
</script>