<template>
  <v-container grid-list-xl>
    <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>

    <v-layout wrap v-for="home_item in home_items" :key="home_item">
      <v-flex md2 v-for="cards in home_item" :key="cards.title">
        <v-card class="rounded">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ cards.title }}</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex grow></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      }
    ],
    home_items: [
      [
        {
          icon: "",
          title: "Meditation Hall"
        },
        {
          icon: "",
          title: "Music"
        },
        {
          icon: "",
          title: "Case Study"
        },
        {
          icon: "",
          title: "Community"
        },
        {
          icon: "",
          title: "Course Update"
        }
      ],
      [
        {
          icon: "",
          title: "Teacher Bio"
        },
        {
          icon: "",
          title: "Feedback Box"
        },
        {
          icon: "",
          title: "Registered User Info"
        }
      ]
    ]
  })
};
</script>

<style lang="scss">
.rounded {
  border-radius: 1rem;
}
</style>
