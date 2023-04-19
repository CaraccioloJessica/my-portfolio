<script>
import ContainerAll from '../layout/ContainerAll.vue';

export default {
  data() {
    return {
      projects: [
        {
          id: '1',
          img: '/img/boolbnb.png',
          title: 'Boolbnb',
          description: "Boolbnb è una web app completa che permette di trovare e gestire l'affitto di appartamenti.",
        },
        {
          id: '2',
          img: '/img/midterm.png',
          title: 'Pet Shop',
          description: "Creazione della homepage di un pet shop, che rappresenti al meglio la gamma di prodotti e servizi offerti dall'azienda",
        },
        {
          id: '3',
          img: '/img/netflix.PNG',
          title: 'Boolflix',
          description: "Boolflix è una web app che permette all'utente di ricercare film e serie tv, completo di votazioni,lingua e descrizione dettagliata.",
        },
        {
          id: '4',
          img: '/img/whatsapp-web.PNG',
          title: 'Boolzapp',
          description: "Boolzapp è una web app che permette all'utente di visualizzare le proprie chat, inviare messaggi e ricevere risposta.",
        },
        {
          id: '5',
          img: '/img/spotify-web.PNG',
          title: 'Spotify Web',
          description: "Spotify web è l'interfaccia statica di una web app di riproduzione musicale in cui viene mostrata la pagina principale con i brani e album in evidenza.",
        },
      ],
    }
  },
  components: {
    ContainerAll,
  }
}
</script>

<template>
  <ContainerAll>
    <main>
      <div class="projects">
        <h1>I miei progetti</h1>
      </div>

      <!-- CARD PROGETTI -->
      <div class="container-fluid d-flex flex-wrap gap-4 justify-content-center">
        <router-link v-for="project in projects" :key="project.id" :to="'/projects/' + project.id" class="card p-1"
          style="width: 16.3rem;">
          <img :src="project.img" class="card-img-top" :alt="project.title">
          <div class="card-body p-2">
            <h5 class="card-title my-3 fw-bold">{{ project.title }}</h5>
            <p class="card-text mb-2 text-secondary fw-light">
              {{ project.description }}
            </p>
          </div>
        </router-link>
      </div>
    </main>
  </ContainerAll>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;

.projects {
  margin: 50px 0;

  h1 {
    font-size: 3.5rem;
  }
}

.card {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;

  &:hover {
    filter: drop-shadow(3px 6px 5px #00000047);
  }

  img {
    height: 150px;
  }
}
</style>