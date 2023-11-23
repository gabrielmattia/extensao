<script setup></script>

<template>
  <footer class="footer bg-neutral text-neutral-content">
    <div>
      <p class="footer-title ps-4">Realização</p>
      <div class="grid grid-flow-col auto-cols-max">
        <img
          alt="Universidade Federal de Mato Grosso do Sul logo"
          class="place-self-center"
          src="@/assets/images/ufms-2.png"
          width="100"
          height="100"
        />
        <div class="flex flex-col items-center gap-4">
          <img
            alt="Faculdade de Computação logo"
            src="@/assets/images/grafo_facom.png"
            width="80"
            height="80"
          />

          <img
            class="rounded-md"
            alt="Curso de Arquitetura e Urbanismo logo"
            src="@/assets/images/cau-logo.jpeg"
            width="150"
            height="150"
          />
        </div>
      </div>
    </div>
    <div>
      <p class="footer-title m-0">Contato</p>
      <a class="link link-hover">Sobre nós</a>
      <a class="link link-hover">[Redes Sociais]</a>
    </div>
  </footer>
</template>

<style scoped>
  .footer {
    @apply flex p-4 md:grid md:place-content-center lg:p-10;
  }

  .footer > div img {
    @apply max-w-[65%];
  }
</style>
