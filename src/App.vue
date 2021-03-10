<template>
  <TheHeader />
  <AboutMe />
  <Skills />
  <Project />
  <Form />
  <TheFooter />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import AboutMe from "./components/ContentPage/AboutMe.vue";
import Skills from "./components/ContentPage/Skills.vue";
import Project from "./components/ContentPage/Project.vue";
import Form from "./components/ContentPage/Form.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    AboutMe,
    Skills,
    Project,
    Form,
  },
};
</script>

<style lang="scss">
</style>
