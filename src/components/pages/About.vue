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
            Attualmente, nel mio lavoro, mi occupo della progettazione di siti web aziendali con <strong>Figma</strong>,
            della loro
            creazione
            su <strong>WordPress</strong> utilizzando il page builder <strong>Elementor</strong>, e della loro gestione e
            manutenzione. Inoltre ho avuto
            l'opportunità di approfondire la realizzazione di progetti grafici con <strong>Photoshop</strong>, tra cui
            Mockup, Banner,
            Moduli PDF, Insta Stories, Post Linkedin e la gestione delle Newsletter editoriali periodiche tramite
            <strong>MailUp</strong>.
            <br>
            Mi occupo di Graphic e Web Design, sono un' appassionata di tecnologia, arte e fotografia, sempre alla ricerca
            di
            soluzioni
            innovative e funzionali per arricchire le mie conoscenze.
            <br>
            <br>
            Grazie a Boolean, ho intrapreso un percorso come Full Stack Web Developer ed ho sviluppato una conoscenza di
            linguaggi di programmazione
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
  background-color: #3ab38a2a;
  box-shadow: 3px 6px 8px #00000047;
  border-radius: 20px;
  padding: 40px 50px;

  p {
    color: #235745;
    font-size: 1.1rem;
  }
}

img {
  width: 100%;
}
</style>