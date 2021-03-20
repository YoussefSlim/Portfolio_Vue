<template>
  <section id="contact" class="contact">
    <h3>Contactez-moi</h3>
    <form class="form" @submit.prevent="sendEmail">
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
        placeholder="Tapez votre message"
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
    <div class="media">
      <h4>Mon travail en détail</h4>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/youssef-slim" target="_blank">
            <img src="../../assets/in.png" alt="logo linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/YoussefSlim?tab=repositories"
            target="_blank"
          >
            <img src="../../assets/git.png" alt="logo github" />
          </a>
        </li>
      </ul>
    </div>
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

<style lang="scss">
@import "../../styles/_media";
@import "../../styles/_vars";

.contact {
  padding: 2rem;
  background-color: #17171d;
  backdrop-filter: blur(15rem);
  background-image: linear-gradient(#000000 40%, #005675, #005675 100%);
  background-size: 100%;
  @include responsive(tablet) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }
  & h3 {
    padding: {
      bottom: $padding * 3;
    }
    text-align: center;
    color: $color-blanc;
    font: {
      weight: 400;
      size: 35px;
      family: "Niramit", sans-serif;
    }
    @include responsive(tablet) {
      font-size: 1.4rem;
      text-align: center;
      margin: 3rem;
      margin-inline: 0;
    }
    @include responsive(mobile) {
      margin: 2rem;
    }
    @include responsive(descktop) {
      text-align: center;
      margin-inline: 0;
    }
  }

  & img {
    width: 50px;
  }
  &__description {
    padding: 1rem 2rem;
    margin: 2rem 0 3rem 30rem;
    align-items: center;
    background: #fff;
    border-radius: 4px;
    width: 46%;
    box-shadow: 0 0.125rem 0.25rem #00000013;
    @include responsive(tablet) {
      padding: 1rem 2rem;
      margin: 4rem 1rem 0 0;
      width: 95%;
    }
    @include responsive(tablet) {
      margin: 4rem 0 0 0;
    }
    @include responsive(descktop) {
      margin: 2rem 0 3rem 17rem;
      width: 60%;
    }
    & p {
      font-size: 1.2rem;
      line-height: 2rem;
      text-align: center;
      @include responsive(tablet) {
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
    }
  }
}
.form {
  & input,
  textarea {
    border: 0;
    background: transparent;
    border-bottom: 1px solid gray;
    padding: 0.5rem;
    font-size: 1.1rem;
    margin-bottom: 1rem;

    &:focus {
      border-bottom: 2px solid #1f71c6 !important;
    }
  }

  & input {
    width: 17%;
    @include responsive(tablet) {
      height: 2.5rem;
      width: -webkit-fill-available;
    }
    @include responsive(mobile) {
      height: 2.5rem;
      width: -webkit-fill-available;
    }
    @include responsive(descktop) {
      width: 32%;
    }
  }
  & #cemail {
    margin-left: 2.2rem;
    @include responsive(tablet) {
      margin-left: 0;
    }
    @include responsive(mobile) {
      margin-left: 0;
    }
    @include responsive(descktop) {
      margin-left: 2rem;
    }
  }
  & #cname {
    margin-left: 37rem;
    @include responsive(tablet) {
      margin-left: 0;
    }
    @include responsive(mobile) {
      margin-left: 0;
    }
    @include responsive(descktop) {
      margin-left: 14rem;
    }
  }
  & textarea {
    font-family: $font-family;
    width: 36%;
    margin-bottom: 2.5rem;
    margin-left: 37rem;

    @include responsive(tablet) {
      margin-bottom: 1rem;
      margin-left: 0rem;
      width: -webkit-fill-available;
    }
    @include responsive(mobile) {
      margin-bottom: 1rem;
      margin-left: 0rem;
      width: -webkit-fill-available;
    }
    @include responsive(descktop) {
      margin-left: 14rem;
      width: 66.6%;
    }
    &:focus {
      outline: 0;
    }
  }

  & button {
    width: 36%;
    margin-left: -41.4rem;
    background: transparent;
    color: #fff;
    border: 0;
    font-size: 1.3rem;

    height: 2.5rem;
    &:hover {
      opacity: 0.5;
    }
    @include responsive(tablet) {
      margin-bottom: 6rem;
      width: -webkit-fill-available;
      margin-left: 0rem;
    }
  }
}
.media {
  display: flex;
  color: $color-blanc;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0 0 0;
  padding: 50px 0;
  font-size: 2rem;
  @include responsive(tablet) {
    font-size: 1.5rem;
  }
  & h4 {
    padding: 3rem;
    font: {
      weight: 400;
      size: 35px;
      family: "Niramit", sans-serif;
    }
    @include responsive(tablet) {
      padding: 3rem 0;
      font-size: 26px;
    }
  }
  & ul {
    display: flex;
    justify-content: space-between;
    @include responsive(tablet) {
      margin-left: -2rem;
    }
    & li {
      flex: 1;
      margin-left: 1rem;
    }
  }
}
</style>
