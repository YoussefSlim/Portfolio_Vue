<template>
  <div class="footer">
    <span>©2021 Youssef Slim</span>
    <span>Tel : 06.65.58.01.27</span>
    <span>Email : slimyoussef9511@gmail.com</span>
    <span class="githib">
      <a href="https://github.com/YoussefSlim/Portfolio_Vue" target="_blank"
        >Voir les documents du site</a
      >
    </span>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "../styles/_media";
.footer {
  text-align: center;
  padding: 2rem;
  background: #41a4f5;
  color: #fff;
  @include responsive(tablet) {
    display: flex;
    flex-direction: column;
    line-height: 2rem;
  }

  & span {
    font-size: 0.8rem;
    padding: 0 1rem;
    &:not(.githib) {
      border-right: 1.2px solid;
      width: 80%;
      @include responsive(tablet) {
        border-right: 0;
        width: 100%;
      }
    }
    & a {
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
