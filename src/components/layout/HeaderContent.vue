<script>
export default {
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <!-- LOGO -->
        <div class="navbar-brand">
          <router-link to="/" exact class="nav-link active"><img src="/img/jc-logo.png" alt="logo-portfolio"
              class="py-3"></router-link>
        </div>

        <!-- HAMBURGER MENU -->
        <button class="navbar-toggler bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- LINK -->
        <div class="collapse navbar-collapse flex-grow-0" id="navbar">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- HOME -->
            <li :class="{ active_nav: $route.path === '/' }" class="nav-item mx-3 pt-3">
              <router-link to="/" exact class="nav-link active">Home</router-link>
            </li>
            <!-- ABOUT -->
            <li :class="{ active_nav: $route.path === '/about' }" class="nav-item mx-3 pt-3">
              <router-link to="/about" exact class="nav-link active">Chi sono</router-link>
            </li>
            <!-- PROJECTS -->
            <li :class="{ active_nav: $route.path === '/projects' }" class="nav-item mx-3 pt-3">
              <router-link to="/projects" exact class="nav-link active">Progetti</router-link>
            </li>
            <!-- Contact -->
            <li :class="{ active_nav: $route.path === '/contact' }" class="nav-item mx-3 pt-3">
              <router-link to="/contact" exact class="nav-link active">Contatti</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@use '../../styles/general.scss' as *;

img {
  width: 250px;
}

button:focus,
button:focus-visible {
  outline: none;
}

button:hover {
  border-color: #30775F;
}

.navbar-toggler:focus {
  box-shadow: none;
}

li {
  &:hover {
    transition: transform .2s linear;
    transform: scale(1.1);
  }

  &.active_nav {
    border-bottom: 2px solid #30775F;
  }
}
</style>
