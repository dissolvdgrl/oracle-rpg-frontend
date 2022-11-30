<template>
  <div class="shadow border rounded-xl flex flex-col">
    <div class="overflow-clip rounded-t-xl">
      <img :src="props.post.node.featuredImage.node.mediaItemUrl" alt="post image" />
    </div>
    <div class="p-4 flex flex-col h-full">
      <p class="text-xs text-slate-400 leading-relaxed">{{ format(new Date(props.post.node.date), 'd MMMM yyyy') }}</p>
      <h2 class="font-bold text-3xl text-slate-700">{{ props.post.node.title }}</h2>
      <p class="text-xs text-red-500">
		  asdsd categories
	  </p>

      <div class="text-slate-500 my-8 line-clamp-3" v-html="props.post.node.excerpt"></div>
      <NuxtLink
          :to="compositeSlug"
          class="font-bold text-underline text-slate-400 transition-all duration-200 hover:opacity-70 hover:text-red-500 leading-loose text-xl mt-auto">
          Read post
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { format } from 'date-fns';
const config = useRuntimeConfig();
const props = defineProps({
	post: Object
});
const year = format(new Date(props.post.node.date), 'yyyy');
const month = format(new Date(props.post.node.date), 'MM');
const compositeSlug = `/${year}/${month}/${props.post.node.slug}`;
</script>