<template>
  <header class="nav">
    <div class="nav__media">
      <a href="www.linkedin.com/in/youssef-slim-80a912189">
        <img src="../assets/linkedin.png" alt="logo linkedin" />
      </a>
      <a href="https://github.com/YoussefSlim?tab=repositories">
        <img src="../assets/github.png" alt="logo github" />
      </a>
    </div>
    <div class="nav__list" :style="{ display: display }">
      <a href="#about">A propos de moi</a>
      <a href="#skills">Compétences</a>
      <a href="#projects">Projets</a>
      <a href="#contact">Contactez-moi</a>
    </div>
    <div class="btn-toggler">
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
      display: "",
    };
  },
  methods: {
    displayMenu() {
      this.display === "" ? (this.display = "none") : (this.display = "");
    },
  },
};
</script>


