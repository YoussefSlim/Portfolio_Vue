<template>
  <header
    id="header"
    class="nav"
    :class="[isActive ? 'open' : '']"
    @scroll="changeColor"
  >
    <div class="nav__list" :style="{ color: color }">
      <a
        @click="changeTitle(event, 'À propos de moi')"
        title=" À propos de moi"
        href="#about"
        >A propos de moi</a
      >
      <a @click="changeTitle(event, 'Mes compétences')" href="#skills"
        >Compétences</a
      >
      <a @click="changeTitle(event, 'Mes projets')" href="#projects">Projets</a>
      <a @click="changeTitle(event, 'Contactez-moi')" href="#contact"
        >Contactez-moi</a
      >
    </div>
    <div class="nav__btn">
      <button @click="displayMenu">
        <img src="../assets/menu.png" alt="menu" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isActive: false,
      color: "",
    };
  },
  created() {
    window.addEventListener("scroll", this.changeColor);
  },
  unmounted() {
    window.removeEventListener("scroll", this.changeColor);
  },
  methods: {
    // Show or hide menu list
    displayMenu() {
      !this.isActive ? (this.isActive = true) : (this.isActive = false);
    },

    // Change the color of the links to the scroll
    changeColor() {
      let scrollHeader = window.scrollY;
      scrollHeader > 1564 ? (this.color = "#fff") : (this.color = "#151515");
    },

    // Synchronize the title tag with the content of the  section
    changeTitle(e, title) {
      document.title = title;
    },
  },
};
</script>


<style lang="scss">
@import "../styles/_media";
@import "../styles/_vars";

.nav {
  font-size: 0.9rem;
  backdrop-filter: blur(6rem);
  background-color: #ffffff1a;
  position: fixed;
  width: 100%;
  z-index: 2;
  &.open {
    margin: 0 auto;
  }
  @include responsive(tablet) {
    display: flex;
    flex-direction: column;
    margin-top: -11rem;
    transition: margin 0.7s ease-in-out;
  }
  &__btn {
    display: none;
    @include responsive(tablet) {
      display: block;
    }
    & img {
      width: 15%;
    }
  }
  &__list {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    @include responsive(tablet) {
      flex-direction: column;
    }
    & a {
      padding: 30px 15px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 300;
      @include responsive(tablet) {
        color: $color-noir;
        padding: 20px 15px;
      }
      &::after {
        content: "";
        display: block;
        margin: 22px 0 -20px 0;
        height: 3px;
        width: 0;
        transition: width 0.5s ease, background-color 0.5s ease;
      }
      &:hover:after {
        width: 100%;
        background: $color-link;
      }
    }
  }
}
</style>

