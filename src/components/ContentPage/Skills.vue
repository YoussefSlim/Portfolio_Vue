<template>
  <section id="skills" class="skills" @scroll="animateTitle">
    <h3 class="skills__title" :class="{ opacity: dark }">
      Aperçu des compétences
    </h3>
    <div class="skills__blocks">
      <div class="skills__categories front" :class="{ block1: front }">
        <div class="skills__categories__header">
          <h4>Front-End</h4>
          <img src="../../assets/react-vue.png" alt="Reactjs Vuejs" />
        </div>
        <p>
          React et VueJS sont pour moi de véritables coups de cœur. Passionné
          par ces technologies, j’ai commencé mon apprentissage en autodidacte,
          pour, par la suite, consolider mes acquis et continuer mon
          apprentissage dans la formation que j’ai suivie. Après quelques
          projets personnels, je suis prêt à développer des applications
          dynamiques et réactives en React ou avec VueJS.
        </p>
      </div>
      <div class="skills__categories back" :class="{ block3: back }">
        <div class="skills__categories__header">
          <h4>Back-End</h4>
          <img src="../../assets/ex-node.png" alt="express nodejs" />
        </div>
        <p>
          Je pratique le Frameworks ExpressJS. La réalisation d’API avec une
          architecture MVC m’a permis d’être à l’aise avec cette technologie. Je
          sais également me servir de l'ORM Sequelize pour une meilleur
          productivité.
        </p>
      </div>
      <div class="skills__categories language" :class="{ block2: language }">
        <div class="skills__categories__header">
          <h4>Language</h4>
          <img src="../../assets/js-ts-git.png" alt="JS Type-script GIT" />
        </div>

        <p>
          Je maîtrise les langages, Html, Css, Javascript, SQL, cela me permet
          d’apprendre rapidement différents Frameworks dans le monde du web.
          Depuis Novembre 2020 j’ai commencé mon apprentissage de TypeScript,
          langage qui fournit une solide option pour le typage du JavaScript
          avec d’autres fonctionnalités.
        </p>
      </div>
      <div class="skills__categories data" :class="{ block4: data }">
        <div class="skills__categories__header">
          <h4>Data</h4>
          <img src="../../assets/sql-mysql.png" alt="nosql sql" />
        </div>
        <p>
          Passionné par Sql avec Postgres et l’ORM Sequelize, j'ai aussi quelque
          notions de NoSql, cela me permet de travailler sur divers
          environnements.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      dark: false,
      front: false,
      back: false,
      language: false,
      data: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.animateTitle);
  },
  methods: {
    animateTitle() {
      let scrollSkills = window.scrollY;

      if (scrollSkills > 1500) {
        this.dark = true;
      }
      if (scrollSkills < 1500) {
        this.dark = false;
      }
      if (scrollSkills > 1550) {
        this.front = true;
        this.language = true;
      }
      if (scrollSkills < 1550) {
        this.front = false;
        this.language = false;
      }
      if (scrollSkills > 1650) {
        this.data = true;
        this.back = true;
      }
      if (scrollSkills < 1650) {
        this.back = false;
        this.data = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_media";
@import "../../styles/_vars";

.skills {
  background: #000000;
  backdrop-filter: blur(15rem);
  text-align: center;
  @include responsive(tablet) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    color: $color-blanc;
    font: {
      weight: 400;
      size: 35px;
      family: "Niramit", sans-serif;
    }
    padding: 10rem 0;
    @include responsive(tablet) {
      font-size: 1.4rem;
      padding: 3rem;
    }
    @include responsive(mobile) {
      padding: 2rem;
    }
  }
  & a {
    font-size: 1.8rem;
    font-weight: 900;
    color: #1f71c6;
    @include responsive(mobile) {
      font-size: 1.4rem;
    }
    &:hover {
      opacity: 0.5;
    }
  }
  &__blocks {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    flex-flow: wrap;
    padding: 3rem 23rem 0;
    @include responsive(tablet) {
      flex-direction: column;
      padding: 2rem 3rem 0;
    }
    @include responsive(descktop) {
      padding: 3rem 5rem 0;
    }
  }
  &__categories {
    border-radius: 4px;

    width: 34%;

    margin-bottom: 4rem;

    @include responsive(tablet) {
      width: 100%;
      margin-bottom: 2rem;
      padding: 2rem;
      text-align: center;
    }
    @include responsive(mobile) {
      padding: 1rem;
    }
    & p {
      color: white;
      font-size: 1rem;
      text-align: justify;
      padding: 0 1rem 1rem;
      line-height: 1.5;
      @include responsive(tablet) {
        font-size: 1.3rem;
        text-align: inherit;
        padding: 1rem 3rem;
        line-height: 1.3;
      }
      @include responsive(mobile) {
        font-size: 1.1rem;
        padding: 1rem;
      }
    }
    &__header {
      padding: 1rem 2rem 2rem;
      @include responsive(mobile) {
        padding: 1rem 2rem 0;
      }

      & h4 {
        color: white;
        font-size: 20px;
        font-weight: 600;
        padding-bottom: 1rem;
        @include responsive(tablet) {
          padding-bottom: 2rem;
        }
      }
    }
  }
}
.block1,
.block2,
.block3,
.block4 {
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes scale-in-center {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
}
.front {
  order: 1;
  transform: scale(0);
}
.language {
  transform: scale(0);
  order: 2;
}
.back {
  order: 3;
  transform: scale(0);
}
.data {
  order: 4;
  transform: scale(0);
}
.opacity {
  animation: titleOpacity 4s forwards;
  @keyframes titleOpacity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}
</style>