<template>
  <v-container grid-list-xl>
    <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>

    <v-layout wrap v-for="home_item in home_items" :key="home_item">
      <v-flex md2 v-for="cards in home_item" :key="cards.title">
        <v-card class="rounded" :to="cards.route">
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
        to: "/"
      }
    ],
    home_items: [
      [
        {
          icon: "",
          title: "Meditation Hall",
          route: "",
        },
        {
          icon: "",
          title: "Music",
          route: "",
        },
        {
          icon: "",
          title: "Case Study",
          route: "/casestudy",
        },
        {
          icon: "",
          title: "Community",
          route: "",
        },
        {
          icon: "",
          title: "Course Update",
          route: "",
        }
      ],
      [
        {
          icon: "",
          title: "Teacher Bio",
          route: "",
        },
        {
          icon: "",
          title: "Feedback Box",
          route: "",
        },
        {
          icon: "",
          title: "Registered User Info",
          route: "",
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
