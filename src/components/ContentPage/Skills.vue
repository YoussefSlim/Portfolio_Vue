<template>
  <section id="skills" class="skills">
    <h3 class="skills__title">Aperçu des compétences</h3>
    <div class="skills__blocks">
      <div data-aos="flip-up" class="skills__categories front">
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
      <div data-aos="flip-up" class="skills__categories back">
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
      <div data-aos="flip-up" class="skills__categories language">
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
      <div data-aos="flip-up" class="skills__categories data">
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
    <div class="link">
      <a href="Youssef_Slim_CV_PPYarns.pdf" download>Voir mon CV</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>