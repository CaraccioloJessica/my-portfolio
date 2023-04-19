<script>
import ContainerAll from '../layout/ContainerAll.vue';

export default {
  data() {
    return {
      projects: [
        {
          id: '1',
          img: '/img/Team4-boolbnb.png',
          title: 'Boolbnb',
          description: "In Boolbnb i proprietari di appartamenti, registrandosi, possono inserire le informazioni delle loro proprietà, modificarle e accedere ad una pagina statistiche con il numero di visualizzazioni dell'appartamento e i messaggi ricevuti. Inoltre può decidere se sponsorizzare la proprietà per avere una posizione evidenziata nelle ricerche e in home page. Gli utenti interessati ad affittare, senza registrazione, possono cercare e visualizzare gli appartamenti. Una volta scelto l'appartamento di interesse, possono inviare un messaggio al proprietario tramite la piattaforma, per chiedere maggiori dettagli.",
          programs: 'Html - CSS - Javascript - PHP - MySql - Laravel starter kit "Breeze + Vue" - Tailwind CSS - VueSweetAlert2 - TomTom API - Braintree API - Chart.js',
        },
        {
          id: '2',
          img: '/img/midterm-screen.png',
          title: 'Pet Shop',
          description: "Il progetto di mid-term realizzato in Boolean consiste nella creazione della homepage di un pet shop, che rappresenti al meglio la gamma di prodotti e servizi offerti dall'azienda, da spazio alle recensioni degli utenti e agli articoli del blog. L'obiettivo è quello di fornire un'esperienza utente positiva, attraverso un design moderno e intuitivo, che faciliti la navigazione e l'accesso alle informazioni.",
          programs: 'Html - CSS - Javascript - Vuejs - Vite',
        },
        {
          id: '3',
          img: '/img/netflix.PNG',
          title: 'Boolflix',
          description: "Boolflix è un'applicazione web per la ricerca di film e serie TV che offre numerosi strumenti per aiutare l'utente a trovare esattamente ciò che sta cercando. Con Boolflix, è possibile visualizzare le valutazioni degli utenti, la lingua di origine e una descrizione dettagliata di ogni titolo. Grazie alla sua interfaccia intuitiva e facile da usare, trovare il film o la serie TV che fa per te non è mai stato così semplice.",
          programs: 'Html - CSS - Javascript - Vuejs - Vite',
        },
        {
          id: '4',
          img: '/img/whatsapp-web.PNG',
          title: 'Boolzapp',
          description: "Boolzapp è un'applicazione web in cui viene visualizzata la pagina delle chat di un utente già loggato. Questo utente può visualizzare a sinistra tutta la cronologia delle chat e a destra quella attualmente attiva. L'utente può cliccare su una qualsiasi chat, visualizzarla, scrivere un messaggio e all'invio riceverà dopo qualche secondo, una risposta pre-fatta.",
          programs: 'Html - CSS - Javascript - Vuejs',
        },
        {
          id: '5',
          img: '/img/spotify-web.PNG',
          title: 'Spotify Web',
          description: "Spotify web è uno dei primi progetti completi con Vuejs, ha un'iterfaccia statica con cui l'utente non può interagire, si può solo scorrere per visualizzare altre playlist nella sezione attualmente visibile. Riprende il layout della nota web app con brani in evidenza, barra di ascolto e menu superiore e laterale.",
          programs: 'Html - CSS - Javascript',
        },
      ],
      project: null,
    }
  },
  created() {
    const projectId = this.$route.params.id;
    this.project = this.projects.find(project => project.id === projectId);
  },
  components: {
    ContainerAll,
  }
}
</script>

<template>
  <ContainerAll>
    <main>
      <h1 class="mb-5 text-center">{{ project.title }}</h1>

      <div class="container-fluid d-flex gap-5 flex-column-reverse flex-lg-row">
        <div class="col-12 col-lg-8">
          <img :src="project.img" :alt="project.title" class="rounded" />
        </div>

        <div class="col-12 col-lg-3 justify-self-center">
          <p class="mb-5 descr">{{ project.description }}</p>
          <p class="fw-bold mb-3">Programmi utilizzati:</p>
          <p class="program">{{ project.programs }}</p>
        </div>
      </div>
    </main>
  </ContainerAll>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;

h1 {
  font-size: 3.5rem;
}

img {
  width: 100%;
}

p {
  font-size: 1.2rem;
}

.descr {
  text-align: justify;
}

.fw-bold {
  font-size: 1.5rem;
}

.program {
  color: #30775F;
}
</style>