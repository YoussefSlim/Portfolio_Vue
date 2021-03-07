<template>
  <div id="app">
    <TheHeader />
    <AboutMe />
    <Skills />
    <Project />
    <Form />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import AboutMe from "./components/ContentPage/AboutMe.vue";
import Skills from "./components/ContentPage/Skills.vue";
import Project from "./components/ContentPage/Project.vue";
import Form from "./components/ContentPage/Form.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    AboutMe,
    Skills,
    Project,
    Form,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
