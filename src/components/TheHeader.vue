<template>
  <header class="nav">
    <div class="nav__btn">
      <button @click="displayMenu">
        <img src="../assets/menu.png" alt="menu" />
      </button>
    </div>
    <div class="nav__list" :class="[isActive ? 'open' : '']">
      <a href="#about">A propos de moi</a>
      <a href="#skills">Compétences</a>
      <a href="#projects">Projets</a>
      <a href="#contact">Contactez-moi</a>
    </div>
    <div class="nav__media">
      <a href="https://www.linkedin.com/in/youssef-slim">
        <img src="../assets/linkedin.png" alt="logo linkedin" />
      </a>
      <a href="https://github.com/YoussefSlim?tab=repositories">
        <img src="../assets/github.png" alt="logo github" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    displayMenu() {
      !this.isActive ? (this.isActive = true) : (this.isActive = false);
      console.log(this.isActive);
    },
  },
};
</script>


