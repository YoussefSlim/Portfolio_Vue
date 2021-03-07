<template>
  <section id="contact" class="contact">
    <img src="../../assets/youssef.png" alt="mon avatar" />
    <div class="contact__description">
      <p>
        Je suis actuellement à l'écoute du marché. Si vous souhaitez m'embaucher
        pour votre projet, veuillez utiliser le formulaire ci-dessous pour me
        contacter.
      </p>
    </div>
    <div class="form">
      <h3>Entrer en contact</h3>
      <div class="form__input">
        <div class="form__input-name">
          <input
            type="text"
            name="name"
            id="cname"
            placeholder="Nom"
            minlength="2"
            required
            aria-required="true"
          />
        </div>
        <div class="form__input-email">
          <input
            type="email"
            name="email"
            id="cemail"
            placeholder="E-mail"
            required
            aria-required="true"
          />
        </div>
      </div>
      <div class="form__message">
        <textarea
          name="message"
          id="cmessage"
          rows="10"
          placeholder="Tappez votre message"
          required
          aria-required="true"
        ></textarea>
      </div>
      <div class="form__btn">
        <button>Envoyer</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Form",
};
</script>


