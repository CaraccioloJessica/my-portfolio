<script>

export default {
}
</script>

<template>
  <footer class="pt-5">
    <div class="container-fluid p-2 d-flex align-items-center gap-3 justify-content-between">
      <p>&copy; 2023 Caracciolo Jessica &nbsp; | &nbsp; &#9998; Illustrations by me</p>
      <div>
        <a href="https://www.linkedin.com/in/jessica-caracciolo/" title="Linkedin" class="linkedin"><i
            class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/CaraccioloJessica" title="Github" class="github"><i
            class="fa-brands fa-square-github"></i></a>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '../../styles/general.scss' as *;

.container-fluid {
  border-top: 1px solid gray;
  font-size: 2rem;

  a {
    color: #3F3B3B !important;
    margin: 5px;
  }

  .linkedin:hover {
    color: #0A66C2 !important;
  }

  .github:hover {
    color: #161414 !important;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
