<template>
  <section id="about" class="about-me">
    <h1>Youssef slim</h1>
    <div class="about-me__typewriter-text">
      Développeur Front-end : React, Vue, Redux
    </div>
    <div
      @scroll="animate"
      :style="{
        transform: `matrix(${scaleProfil},0,0, ${scaleProfil}, 0, ${translateProfil})`,
      }"
      class="about-me__img-profil"
    >
      <img src="../../assets/youssef.png" alt="Youssef-Slim" />
    </div>

    <p class="about-me__description" :class="{ 'animation-text1': right }">
      Après une formation full Stack Javascript et React de 6 mois dans le
      développement web à l’école Oclock en télé présentiel. Actuellement à la
      recherche d'un poste de développeur Frontend afin de monter en compétences
      dans la création et développement des sites web et web mobile.
    </p>
    <p class="about-me__bio" :class="{ 'animation-text2': top }">
      Je suis quelqu'un de motivé et curieux faisant toujours preuve d'une
      grande détermination. Explorer de nouvelles opportunités, apprendre de
      nouvelles compétences, rencontrer de nouvelles personnes, tout cela a
      toujours été naturel chez moi, aussi bien dans la sphère personnelle que
      professionnelle. Étant autodidacte en développement lors de mes temps
      libres, j'ai décidé de faire une reconversion afin d'exercer un métier que
      j'aime et qui me passionne. J'ai commencé ma reconversion professionnelle
      par la formation Full-Stack JS chez Oclock d'une durée de 3 mois suivie
      par une spécialisation avec React. Cette formation fut un véritable
      succès, j'ai pu approfondir des notions qui on été difficiles à assimiler
      quand on apprend seul. Suite à cela, j'ai continuer à pratiquer, découvrir
      d'autres technologies, faire évoluer mes compétences en développement et
      en gestion de projet.
    </p>
    <div class="link">
      <a href="Youssef_Slim_CV_PPYarns.pdf" download>Voir mon CV</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      top: false,
      right: false,
      scrollData: 0,
      scaleProfil: 1,
      translateProfil: 0,
      translateText1: 0,
      translateText2: 0,
    };
  },

  created() {
    window.addEventListener("scroll", this.scroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.scroll);
  },
  methods: {
    scroll() {
      let scroll = window.scrollY;

      //down
      if (scroll > this.scrollData) {
        //img
        if (this.scaleProfil > 0.5) {
          this.scaleProfil -= 0.0235435;
          this.translateProfil -= 0.332458;
        }

        //up
      } else {
        //img
        if (this.scaleProfil < 1 && scroll < 1200) {
          this.scaleProfil += 0.0735435;
          this.translateProfil += 0.632458;
        }
      }
      this.scrollData = scroll;

      // text1 animation
      if (scroll > 100) {
        this.right = true;
      } else {
        this.right = false;
      }
      // text2 animation
      if (scroll > 250) {
        this.top = true;
      } else {
        this.top = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_media";
@import "../../styles/_vars";

.about-me {
  display: flex;
  flex-direction: column;
  line-height: 1rem;
  padding: 2rem;
  align-items: center;
  background: #f3f3f4;
  @include responsive(mobile) {
    padding: 2rem 1rem;
  }
  &__img-profil {
    padding: 3rem 0;
    @include responsive(mobile) {
      padding: 0;
    }
  }
  & h1 {
    font-size: 2.5rem;
    letter-spacing: 3px;
    font-family: $font-family-title;
    padding-top: $padding * 2;
    text-transform: uppercase;
    @include responsive(tablet) {
      font-size: 2rem;
    }
  }
  &__typewriter-text {
    color: #7dc8dd;
    font-size: 1.6rem;
    padding-top: $padding;
    overflow: hidden;
    margin-left: 1.4rem;
    position: relative;
    width: 21rem;
    height: 4rem;
    white-space: nowrap;
    text-align: justify;
    animation: typewriter 4s steps(44) 1s 1 normal both;

    @keyframes typewriter {
      from {
        width: 0;
      }
      to {
        width: 21em;
      }
    }
    @include responsive(tablet) {
      font-size: 1.1rem;
      padding-top: 1rem;
      margin-left: 1.2rem;
    }
  }
  & img {
    border-radius: 300px;
    height: 600px;
    width: 600px;
    @include responsive(mobile) {
      height: 300px;
      width: 300px;
    }
  }
  &__description {
    margin-right: 160rem;
  }
  &__bio {
    margin-top: 100rem;
  }

  & p {
    width: 34%;
    text-align: justify;
    line-height: 2rem;
    padding-bottom: $padding;
    @include responsive(mobile) {
      width: 83%;
    }
  }
}
.link {
  padding: $padding 0;
  color: #7dc8dd;
  font-size: 1.7rem;
  font-weight: bold;
}
.animation-text1 {
  animation: textRight 1s forwards;
  @keyframes textRight {
    from {
      margin-right: 160rem;
    }

    to {
      margin-right: 0;
    }
  }
}
.animation-text2 {
  animation: textTop 1s forwards;
  @keyframes textTop {
    from {
      margin-top: 100rem;
    }

    to {
      margin-top: 0;
    }
  }
}
</style>