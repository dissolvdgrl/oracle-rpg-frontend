<template>
  <header class="w-full h-auto py-24 relative overflow-y-visible overflow-x-clip">
    <img src="~/assets/images/main-header.jpg" alt="" class="absolute -right-48 -top-24 md:-right-96 md:-top-48 -z-10" />
    <div class="w-2/3 mx-auto flex flex-col items-start">
      <div class="text-left mb-12">
        <p class="lg:text-xl tracking-widest uppercase text-slate-400">{{ props.subHeader }}</p>
        <h1 class="text-slate-700 text-5xl lg:text-6xl font-bold lg:w-2/3">{{ props.header }}</h1>
      </div>
      <NuxtLink to="/" class="bg-red-500 py-3 px-4 text-white font-bold text-xl transition-opacity duration-200 hover:opacity-70">Get started with DnD 5e</NuxtLink>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  header: String,
  subHeader: String,
});
</script>