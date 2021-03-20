<template >
  <div @scroll="returnTopPage" id="top-page" :style="{ opacity: topPage }">
    <a href="#about">&#10094;</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topPage: "",
    };
  },
  created() {
    window.addEventListener("scroll", this.returnTopPage);
  },
  unmounted() {
    window.removeEventListener("scroll", this.returnTopPage);
  },

  methods: {
    returnTopPage() {
      //Recovery from vertical position
      const position = window.scrollY;
      position > 0 ? (this.topPage = position * 0.0003) : (this.topPage = 0);
    },
  },
};
</script>
<style lang="scss">
@import "../styles/_media";
@import "../styles/_vars";

#top-page {
  position: fixed;
  bottom: 70px;
  right: 5px;
  opacity: 0;
  cursor: pointer;
  @include responsive(tablet) {
    bottom: 194px;
    right: 10px;
  }
  & a {
    transition: all 0.4s ease-in-out;
    background: #80808072;
    color: $color-blanc;
    text-align: center;
    display: inline-block;
    z-index: 30;
    width: 37px;
    transform: rotate(90deg);
    height: 37px;
    border-radius: 0.25rem;
    padding-top: 6px;
    line-height: normal;
    font-weight: 900;
  }
}
</style>

