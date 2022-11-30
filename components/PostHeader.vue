<template>
  <header class="w-full h-auto pt-24 relative bg-slate-200">
    <div class="w-2/3 mx-auto grid grid-cols-2 gap-24 relative">
        <div class="text-left mb-12">
          	<h1 class="text-slate-700 text-5xl lg:text-6xl font-bold mb-8">{{ props.header }}</h1>
          	<p class="text-xl my-8 text-slate-700">
				<span class="font-bold">{{ format(new Date(props.date), 'd MMMM yyyy') }}</span>
				&mdash;
				<a
					href="#"
					v-for="(category, index) in props.categories.nodes"
					class="text-slate-500"
				>
					<span v-if="index === props.categories.nodes.length - 1">{{ category.name }}</span>
					<span v-else>{{ category.name }}, </span>
				</a>
			</p>
			<div>
				<a
					href="#"
					v-for="tag in props.tags.nodes"
					class="text-sm mr-2 mb-2 bg-slate-400 text-white py-1 px-3 rounded-2xl inline-block transition-all duration-200 hover:bg-slate-500"
				>
					{{ tag.name }}
				</a>
			</div>
        </div>
      <img :src="props.img" alt="" class="rounded-2xl shadow-2xl w-96 absolute right-0 -bottom-16" />
    </div>
  </header>
</template>

<script setup>
import { format } from 'date-fns';
const props = defineProps({
  	header: String,
  	subHeader: String,
  	img: String,
  	date: String,
	tags: Object,
	categories: Object
});
</script>