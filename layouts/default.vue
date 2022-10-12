<template>
  <div>
    <Title> {{ metaTitle }}</Title>
    <Nav />
    <slot/>
    <AppFooter/>
  </div>
</template>

<script setup>
const metaTitle = useState('title', () => 'Oracle RPG — Guides and resources for solo roleplaying games');
</script>