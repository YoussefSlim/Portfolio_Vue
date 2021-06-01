<template>
  <!-- The Modal -->
  <div
    @click="closeModal"
    :class="[isActive ? 'close-modal' : '']"
    id="myModal"
    class="modal"
  >
    <!-- Modal content -->
    <div class="modal-content">
      <span @click="closeModal" class="modal-content-close">&times;</span>
      <p>{{ message }}</p>
      <p>{{ message }}</p>
      <p>{{ message }}</p>
      <p>{{ message }}</p>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    open: Boolean,
    close: Function,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    closeModal() {
      this.isActive = open;
      this.close();
    },
  },
};
</script>

<style lang="scss">
@import "../../styles/_media";
@import "../../styles/_vars";

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #fbf4f459;
  &.close-modal {
    display: none !important;
  }
  &.open-modal {
    display: block !important;
  }
  @include responsive(mobile) {
    width: 34%;
  }
  &-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 17px;
    width: 31%;
    height: 31%;
    text-align: center;
    @include responsive(mobile) {
      margin: 125rem auto;
      padding: 1rem;
      width: 74%;
      height: 10%;
    }
    & p {
      line-height: 2;
      padding: 2.5rem;
      @include responsive(mobile) {
        padding: 0;
      }
    }
    &-close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      &:hover,
      &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
}
</style>