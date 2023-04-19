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
      <div id="about">
        <h1 class="px-4">Chi sono</h1>
      </div>

      <div class="d-flex flex-column flex-column-reverse flex-md-row gap-2 px-4">
        <div class="container-fluid col-12 col-md-6 col-lg-7 bg_text">
          <p>
            Sono una Full Stack Web Developer appassionata di tecnologia e design, sempre alla ricerca di soluzioni
            innovative
            e funzionali.
            <br>
            <br>
            Grazie alla mia esperienza con Boolean, ho sviluppato una conoscenza di linguaggi di programmazione
            come HTML, CSS, JavaScript e PHP. Inoltre, il mio percorso artistico mi ha permesso di acquisire competenze
            nell'utilizzo di strumenti di grafica come Photoshop e nella realizzazione di illustrazioni con tavoletta
            grafica.
            <br>
            <br>
            Grazie alle mie esperienze passate, ho acquisito abilità nel lavorare in team, ho migliorato la mia
            organizzazione
            e gestione del tempo, gestito situazioni di stress e soddisfatto le esigenze dei clienti.
            In particolare, il mio background, mi ha permesso di collaborare con colleghi di diversi settori e clienti di
            diversi background.
            <br>
            <br>
            Amo mettere in pratica la mia creatività nel mio lavoro e mi piace utilizzare le mie competenze artistiche per
            creare soluzioni web accattivanti e funzionali. Sono sempre alla ricerca di nuove sfide e opportunità per
            migliorare le mie competenze e continuare a crescere come professionista.
          </p>
        </div>

        <div class="col-12 col-md-6 col-lg-5">
          <img class="mb-5" src="/img/myself.png" alt="photo">
        </div>
      </div>
    </main>
  </ContainerAll>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;

#about {
  margin: 50px 0 50px 10px;

  h1 {
    font-size: 3.5rem;
  }
}

.bg_text {
  background-color: #0061412a;
  box-shadow: 3px 6px 8px #00000047;
  border-radius: 20px;
  padding: 30px 20px;

  p {
    color: #ececec;
    font-size: 1.4rem;
  }
}

img {
  width: 100%;
}
</style>