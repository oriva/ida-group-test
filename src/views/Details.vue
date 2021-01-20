<template>
  <v-container>
    <v-breadcrumbs
        :items="breadItems"
        divider=">"
    ></v-breadcrumbs>
    {{ library }}
    <v-card
        class="mx-auto my-12"
        max-width="374"
    >

      <v-img
          height="250"
          :src="library.image.url"
      ></v-img>

      <v-card-title>{{ library.name }}</v-card-title>

      <v-card-text>
        <v-chip-group
            active-class="deep-purple accent-4 white--text"
            column
        >
          <v-chip v-for="item in library.tags" :key="item.id">
            #{{ item.name }}
          </v-chip>
        </v-chip-group>

        <div class="my-4 subtitle-1">{{ library.desc }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>
        {{ library.organization.locale.name }}
        <a
            v-for="item in library.contacts.phones"
            :key="item.id"
            :href="item.value"
        >
          {{ item.value }}
        </a>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Details',
  data: () => ({
    breadItems: [
      {
        text: 'Список библиотек',
        to: {path: '/'},
        disabled: false,
      },
      {
        text: 'Выбранная библиотека',
        disabled: true,
      }
    ]
  }),
  computed: {
    ...mapGetters(['getLibrary']),
    library() {
      let result = this.getLibrary(this.$route.params.id)
      console.log(result)
      return result
    }
  }
}
</script>