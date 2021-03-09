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
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
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