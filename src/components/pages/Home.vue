<script>
import ContainerAll from '../layout/ContainerAll.vue';


export default {
  components: {
    ContainerAll
  },
}
</script>

<template>
  <ContainerAll>
    <main>
      <section>
        <div class="jumbo d-md-flex px-4">
          <div class="col-12 col-md-7">
            <h1 class="mb-2">
              Benvenuti,
            </h1>

            <h2 class="mb-5">
              Mi chiamo Jessica
              <br>
              e sono una full stack web developer con la passione per l'illustrazione.
            </h2>

            <a class="btn" href="/JESSICA CARACCIOLO - cv.pdf" role="button" download> Download
              CV</a>
          </div>

          <div class="col-12 col-md-5 mt-5 d-flex justify-content-center">
            <div class="polaroid">
              <img src="/img/miniself.png" alt="photo">
              <h3 class="mt-3"> It's me! </h3>
            </div>
          </div>
        </div>
      </section>

      <!-- SKILLS SECTION -->
      <section>
        <div class="px-4">
          <h2 class="mb-5 skills d-flex justify-content-center">
            Skills
          </h2>

          <div class="d-flex flex-column-reverse flex-md-row gap-5">
            <div class="col-12 col-md-6 setup">
              <img src="/img/setup.png" alt="setup">
            </div>

            <div class="col-12 col-md-6">
              <div class="logo d-flex flex-wrap justify-content-center">
                <img src="/img/html.png" alt="html-logo" title="html">
                <img src="/img/css.png" alt="css-logo" title="css">
                <img src="/img/js.png" alt="js-logo" title="javascript">
                <img src="/img/sql.png" alt="mysql-logo" title="mysql">
                <img src="/img/php.png" alt="php-logo" title="php">
                <img src="/img/laravel.png" alt="laravel-logo" title="laravel">
                <img src="/img/vue.png" alt="vue-logo" title="vuejs">
                <img src="/img/bs.png" alt="bs-logo" title="bootstrap">
                <img src="/img/sass.png" alt="sass-logo" title="sass">
                <img src="/img/tailwind.png" alt="tailwind-logo" title="tailwind css">
                <img src="/img/ps.png" alt="ps-logo" title="photoshop">
                <img src="/img/ai.png" alt="ai-logo" title="illustrator">
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </ContainerAll>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;

.jumbo {
  margin: 50px 0;

  h1 {
    font-size: 3.5rem;
  }

  h2 {
    color: #E9EDE8;
    font-size: 2.2rem;
    margin-right: 30px;
    text-shadow: 3px 3px 2px #3f3b3b3f;
  }

  a {
    padding: 10px 15px;
    background-color: #30775F;
    color: white !important;
    font-weight: normal;

    &:hover {
      background-color: #255a48;
    }
  }

  .polaroid {
    width: 250px;
    height: 300px;
    position: relative;
    background-color: #eaeaea;
    padding: 19px 19px 85px 19px;
    border-radius: 1.1%;
    transform: rotate(0.03turn);
    margin-top: 30px;
    box-shadow: 5px 7px 5px #00000047;
  }

  .polaroid img {
    width: 100%;
    border-radius: 5px;
  }

  .polaroid:before {
    content: "";
    position: absolute;
    height: 50px;
    width: 180px;
    background-color: #6537284d;
    transform: rotate(-40deg);
  }

  .polaroid:before {
    top: 3px;
    left: -55px;
  }
}

.skills {
  margin-top: 100px;
  font-size: 3.5rem;
}

.setup img {
  width: 100%;
}

.logo img {
  width: 110px;
  cursor: pointer;
  border-radius: 100%;

  &:hover {
    filter: drop-shadow(3px 6px 5px #00000047);
  }
}
</style>