<template>
  <div id="progress" @scroll="progress" :style="{ width: barre + 'px' }"></div>
</template>

<script>
export default {
  data() {
    return {
      barre: "",
    };
  },
  created() {
    window.addEventListener("scroll", this.progress);
  },
  unmounted() {
    window.removeEventListener("scroll", this.progress);
  },
  methods: {
    progress() {
      // Calculation of the "useful" height of the document
      const hauteur =
        document.documentElement.scrollHeight - window.innerHeight;

      // Recovery from vertical position
      const position = window.scrollY;

      // Recovery from window width
      const largeur = document.documentElement.clientWidth;

      // Calculation of bar width
      this.barre = (position / hauteur) * largeur;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_media";
@import "../styles/_vars";
#progress {
  background-color: #2577c7;
  height: 3.5px;
  width: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
}
</style>

