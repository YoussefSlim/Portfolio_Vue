
<template>
  <section id="projects" class="my-projects">
    <h3
      class="my-projects__title"
      :style="{ opacity: opacity_text, transition: 'all 4s' }"
    >
      Mes projets
    </h3>

    <div
      class="content-block"
      @scroll="opacityBlock"
      :style="{ filter: opacity, transition: transtion }"
    >
      <div
        class="content-block__effect"
        v-for="{ id, name, url_img, url_git, type_site } in details"
        :key="id"
      >
        <div class="portfolio-item">
          <img
            class="portfolio-item__image"
            :src="url_img"
            alt="Portfolio Item"
          />
          <h2>{{ type_site }}</h2>
          <div class="portfolio-item__info">
            <h3 class="portfolio-item__header">{{ name }}</h3>

            <div class="portfolio-item__links">
              <div class="portfolio-item__link-block">
                <a
                  class="portfolio-item__link"
                  :href="url_git"
                  target="_blanck"
                  title="Lien github"
                >
                  <i class="material-icons"
                    ><img
                      src="../../assets/link.png"
                      width="auto"
                      alt="link github"
                  /></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      opacity: "opacity(0.07)",
      transtion: "",
      opacity_text: 0,
      details: [
        {
          id: 1,
          name: "Chez mon fermier",
          url_img: "myfarmer.png",
          url_git: "https://github.com/YoussefSlim/Chez-mon-fermier",
          library: "React",
          type_site: "Site E-commerce",
          framework: "",
        },
        {
          id: 2,
          name: "Eya mignardise",
          url_img: "eyaMignardise.png",
          url_git: "https://github.com/YoussefSlim/Projet-e-commerce",
          library: "React",
          type_site: "Site E-commerce",
          framework: "",
        },
        {
          id: 3,
          name: "Orecipie",
          url_img: "oRecipies.png",
          url_git: "https://github.com/O-clock-Jason/orecipes-YoussefSlim",
          library: "React",
          type_site: "Site recettes de cuisines",
          framework: "",
        },
      ],
    };
  },
  created() {
    window.addEventListener("scroll", this.opacityBlock);
  },
  unmounted() {
    window.removeEventListener("scroll", this.opacityBlock);
  },
  methods: {
    opacityBlock() {
      let scroll = window.scrollY;

      if (scroll > 2600) {
        this.opacity = "opacity(1)";
        this.opacity_text = 1;
        this.transtion = "all 4s";
      } else {
        this.opacity = "opacity(.07)";
        this.opacity_text = 0;
        this.transtion = "";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_media";
@import "../../styles/_vars";

.my-projects {
  padding: {
    top: $padding * 4;
    bottom: $padding * 8;
  }
  background-color: #17181d;
  font: {
    family: "Niramit", sans-serif;
    size: 16px;
  }
  @include responsive(tablet) {
    padding: 4rem 0;
  }

  &__title {
    padding: {
      bottom: $padding * 5;
    }
    text-align: center;
    color: $color-blanc;
    font: {
      weight: 400;
      size: 35px;
    }
    @include responsive(tablet) {
      padding-bottom: 5rem;
    }
  }
  & .content-block {
    padding: $padding * 2;
    display: flex;
    justify-content: space-evenly;
    background-color: #121317;
    @include responsive(tablet) {
      flex-direction: column;
      padding: 4rem 1.1rem;
    }
    & .content-block__effect {
      box-shadow: 0 1px 4px #fafafa, 0 0 40px #f5f2f2 inset;
      @include responsive(descktop) {
        box-shadow: none;
      }
      @include responsive(tablet) {
        box-shadow: none;
      }
    }
  }
}

.portfolio-item {
  @include img-position();
  width: $portfolio-item-width;
  height: $portfolio-item-height;
  display: flex;
  flex-direction: column-reverse;
  & h2 {
    color: white;
    z-index: 1;
    padding: 1.5rem 1rem;
    background-color: #272648;
  }
  & .portfolio-item__info {
    @include position-absolute(
      $top: $portfolio-item-info-offset,
      $left: $portfolio-item-info-offset
    );
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - 2 * #{$portfolio-item-info-offset});
    height: calc(100% - 2 * #{$portfolio-item-info-offset});

    background-color: rgba(255, 255, 255, 0.7);
    transform: scale(1.1);
    opacity: 0;
  }
  &:hover {
    .portfolio-item__info {
      @include transition-mix($duration: 0.4s);

      transform: scale(1);
      opacity: 1;
    }

    .portfolio-item__header {
      @include transition-mix($delay: 0.45s);

      top: 0;
      opacity: 1;

      &:after {
        @include transition-mix(
          $duration: 0.3s,
          $timing: cubic-bezier(0.63, 0.01, 0, 1.39),
          $delay: 0.65s
        );

        transform: scaleX(1);
      }
    }
  }

  .portfolio-item__header {
    position: relative;
    top: -10px;
    opacity: 0;
    margin: 0 0 20px 0;
    padding: 15px 0;

    font: {
      size: 22px;
    }
    text-transform: uppercase;
    letter-spacing: 2px;

    &:after {
      @include position-absolute($bottom: 0, $left: 0);
      transform: scaleX(0);
      display: block;
      height: 2px;
      width: 100%;

      content: "";

      background-color: $accent-theme-color2;
    }
  }

  .portfolio-item__links {
    display: flex;
    & img {
      width: auto;
    }
  }

  .portfolio-item__link-block {
    position: relative;
    top: 20px;

    opacity: 0;
    width: $portfolio-link-dimensions;
    height: $portfolio-link-dimensions;
    margin-right: $portfolio-link-offset;

    &:last-child {
      margin-right: 0;
    }
  }

  .portfolio-item__link {
    @include transition-mix;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    color: $dark-theme-color;
    text-decoration: none;

    border: 1px solid $dark-theme-color;
    border-radius: 50%;

    &:hover {
      color: $light-theme-color;

      background-color: $dark-theme-color;
    }
  }
}

/* Responsive Projets *****************************************/
.portfolio-item {
  @include responsive(descktop) {
    width: 340px;
    height: 240px;
    margin-bottom: 2rem;
  }
  @include responsive(tablet) {
    width: 340px;
    height: 240px;
    margin-bottom: 2rem;
  }
}
</style>