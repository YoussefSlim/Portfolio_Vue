<template>
  <TheProgressBar />
  <TheHeader />
  <AboutMe />
  <Skills />
  <Project />
  <Form />
  <TheTopPage />
  <TheFooter />
</template>

<script>
import TheProgressBar from "./Components/TheProgressBar";
import TheHeader from "./Components/TheHeader";
import TheFooter from "./Components/TheFooter";
import TheTopPage from "./Components/TheTopPage";
import AboutMe from "./Components/ContentPage/AboutMe";
import Skills from "./Components/ContentPage/Skills";
import Project from "./Components/ContentPage/Project";
import Form from "./Components/ContentPage/Form";

export default {
  name: "App",
  components: {
    TheProgressBar,
    TheHeader,
    TheFooter,
    TheTopPage,
    AboutMe,
    Skills,
    Project,
    Form,
  },
};
</script>

