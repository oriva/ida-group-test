<template>
  <v-container>
    <v-breadcrumbs
        :items="breadItems"
        divider=">"
    ></v-breadcrumbs>

  </v-container>
</template>

<script>
export default {
  name: 'Details',
  data: () => ({
    breadItems: [
      {
        text: 'Список библиотек',
        to: { path: '/' },
        disabled: false,
      },
      {
        text: 'Выбранная библиотека',
        disabled: true,
      }
    ]
  })
}
</script>