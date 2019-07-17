import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CaseStudy from "./views/CaseStudy";
import MeditationHall from "./views/MeditationHall";
import Meditation from "./views/Meditation";
import WordContent from "./views/WordContent";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/casestudy",
      name: "casestudy",
      component: CaseStudy
    },
    {
      path: "/meditationhall",
      name: "meditationhall",
      component: MeditationHall
    },
    {
      path: "/meditationhall/meditation",
      name: "meditation",
      component: Meditation
    },
    {
      path: "/meditationhall/meditation/wordcontent",
      name: "wordcontent",
      component: WordContent
    }
  ]
});
