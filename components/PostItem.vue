<template>
  <div class="shadow p-4 rounded-xl border ">
    <img :src="props.post.node.featuredImage.node.mediaItemUrl" />
    <h2 class="font-bold text-3xl text-slate-700">{{ props.post.node.title }}</h2>
    <p class="text-xs text-slate-400 leading-relaxed">{{ format(new Date(props.post.node.date), 'd MMMM yyyy') }}</p>
    <p class="text-xs text-red-500">Tags</p>
    <p class="text-slate-500 my-8">This is the post excerpt, it is awesome</p>
    <NuxtLink :to="compositeSlug" class="font-bold text-underline text-slate-400 transition-all duration-200 hover:opacity-70 hover:text-red-500 leading-loose text-xl">Read post</NuxtLink>
  <!--        <NuxtLink :to="`${post.node.slug}`">{{ post.node.title }}</NuxtLink>-->
  </div>
</template>

<script setup>
import { format } from 'date-fns';
const props = defineProps({
  post: Object,
});
const year = format(new Date(props.post.node.date), 'yyyy');
const month = format(new Date(props.post.node.date), 'MM');
const compositeSlug = `/${year}/${month}/${props.post.node.slug}`;
</script>