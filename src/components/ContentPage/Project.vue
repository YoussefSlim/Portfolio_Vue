


<template>
  <section id="projects" class="projects">
    <h3 data-aos="zoom-in-down">Projet de fin d'étude</h3>
    <div class="projects__details">
      <p :class="{ animation: toShowOnHover }">
        Création d'une plateforme e-commerce axée marketplace, sur laquelle les
        producteurs pourront proposer à la vente leurs produits, à des clients
        locaux, qui pourront soit récupérer leur commande chez le producteur,
        soit être livrés par ce dernier.
      </p>

      <div
        class="projects__mayfarmer"
        @mouseover="mouseEnter"
        @mouseleave="mouseLeave"
      >
        <img src="../../assets/myfarmer.png" alt="chez mon fermier" />
        <div class="projects__mayfarmer-techno">
          <ul>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return { toShowOnHover: false };
  },
  methods: {
    mouseEnter() {
      this.toShowOnHover = !this.toShowOnHover;
    },
    mouseLeave() {
      this.toShowOnHover = false;
    },
  },
};
</script>