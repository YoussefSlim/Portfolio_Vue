<template>
  <section id="contact" class="contact">
    <div class="avatar">
      <img src="../../assets/youssef.png" alt="mon avatar" />
    </div>

    <div class="contact__description">
      <p>
        Je suis actuellement à l'écoute du marché. Si vous souhaitez m'embaucher
        pour votre projet, veuillez utiliser le formulaire ci-dessous pour me
        contacter.
      </p>
    </div>
    <form class="form" @submit.prevent="sendEmail">
      <h3>Contactez-moi</h3>
      <input
        type="text"
        name="name"
        id="cname"
        placeholder="Nom"
        minlength="2"
        required
        aria-required="true"
        v-model="name"
      />
      <input
        type="email"
        name="email"
        id="cemail"
        placeholder="E-mail"
        required
        aria-required="true"
        v-model="email"
      />
      <textarea
        name="message"
        id="cmessage"
        rows="10"
        placeholder="Tappez votre message"
        required
        aria-required="true"
        v-model="textarea"
      ></textarea>
      <button type="submit">Envoyer</button>
      <Modal
        :message="message"
        :open="open"
        :close="closeModal"
        :class="[open ? 'open-modal' : '']"
      />
    </form>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
import Modal from "../Modal/Modal";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      status: "",
      name: "",
      email: "",
      textarea: "",
      message: "",
      open: false,
    };
  },
  methods: {
    closeModal() {
      this.open = false;
    },
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_06wmvdj",
          "template_ladoxkj",
          e.target,
          "user_u8fnZIKd8suAcnplSwXZW"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
            if (result.status === 200) {
              this.message =
                "Je vous remercie pour l'intérêt que vous portez à mon profile et je vous informe que Votre message a été envoyé avec succés ! ";
              this.open = true;
              this.status = "block";
              this.name = "";
              this.email = "";
              this.textarea = "";
            }
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>


