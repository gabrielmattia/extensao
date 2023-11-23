<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex justify-evenly items-center bg-skin-soft">
    <div class="wrapper">
      <div class="flex flex-col items-center sm:flex-row sm:items-baseline">
        <h1 class="sm:me-2">PAHC</h1>
        <h6 class="text-center sm:text-left">Projetos Arquitetônicos de Habitação Coletiva</h6>
      </div>
      
      <div>
        <nav>
          <RouterLink to="/">Início</RouterLink>
          <RouterLink to="/projects">Projetos</RouterLink>
          <!-- <RouterLink to="/about">Sobre</RouterLink> -->
        </nav>
      </div>
    </div>
    <div class="">

    </div>
  </header>
</template>

<style scoped>
  header {
    line-height: 1.5;
    padding: 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 0.5rem;
    border-left: 1px solid var(--color-border);
  }
  nav a:first-of-type {
    padding: 0 1rem 0 0;
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      justify-content: space-evenly;
    }

    header .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    nav {
      text-align: left;
      font-size: 1rem;
      padding-top: 1.5rem;
    }
  }
</style>
