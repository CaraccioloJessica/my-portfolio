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
    <div id="contact">
      <h1>Contatti</h1>
    </div>

    <div class="container-fluid d-md-flex">
      <div class="col-12 col-md-6 mb-5 contatti">
        <div class="d-flex gap-3 align-items-center mb-3 gmail">
          <i class="fa-regular fa-envelope"></i>
          <a href="mailto:jesscara.993@gmail.com">Jesscara.993@gmail.com</a>
        </div>

        <div class="d-flex gap-3 align-items-center mb-3 linkedin">
          <i class="fa-brands fa-linkedin-in"></i>
          <a href="https://www.linkedin.com/in/jessica-caracciolo/">/in/jessica-caracciolo/</a>
        </div>

        <div class="d-flex gap-3 align-items-center mb-3 github">
          <i class="fa-brands fa-github"></i>
          <a href="https://github.com/CaraccioloJessica">/CaraccioloJessica</a>
        </div>

        <div class="d-flex gap-3 align-items-center mb-3 behance">
          <i class="fa-brands fa-behance"></i>
          <a href="https://www.behance.net/jessicacaracciolo">/jessicacaracciolo</a>
        </div>
      </div>

      <div class="col-12 col-md-6 google-map d-flex justify-content-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179094.07220583298!2d9.012921080424903!3d45.46285616627336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1493f1275e7%3A0x3cffcd13c6740e8d!2sMilano%20MI!5e0!3m2!1sit!2sit!4v1681909244973!5m2!1sit!2sit"
          width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

  </ContainerAll>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;

#contact {
  margin: 50px 0;

  h1 {
    font-size: 3.5rem;
  }
}

.contatti {
  font-size: 1.3rem;

  .gmail:hover {
    color: #D64135 !important;

  }

  .linkedin:hover {
    color: #0056ac !important;

  }

  .github:hover {
    color: #161414 !important;

  }

  .behance:hover {
    color: #2776ff !important;

  }
}



.google-map {
  padding-bottom: 40%;
  position: relative;
}

.google-map iframe {
  height: 100%;
  width: 100%;
  border-radius: 20px;
  left: 0;
  top: 0;
  position: absolute;
}
</style>