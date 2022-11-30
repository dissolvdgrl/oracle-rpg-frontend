<template>
  <div class="bg-slate-200 p-16 border-b-4 border-red-800 mt-16">
    	<div class="grid gap-16 grid-cols-3 mx-auto mb-8">
			<div>
				<p class="font-bold text-xl text-slate-700 mb-4">About Oracle RPG</p>
				<p class="text-slate-700 mb-8">We provide resources to people who want to play tabletop roleplaying games without a group.</p>
				<a href="https://discord.gg/6tTXjNeVhS" target="_blank">
					<img src="~/assets/images/discord-black.svg" alt="discord logo" class="w-32">
				</a>
			</div>
			<div class="flex flex-col">
				<p class="font-bold text-xl text-slate-700 mb-4">Recent posts</p>
<!--				<NuxtLink
					:to="`/${format(new Date(post.node.date), 'yyyy')}/${format(new Date(post.node.date), 'MM')}/${post.node.slug}`"
					v-for="post in posts.data.posts.edges"
					class="font-bold underline text-slate-700 transition-all duration-200 hover:opacity-70 hover:text-red-500 leading-loose mt-auto">
					{{ post.node.title }}
				</NuxtLink>-->
			</div>
			<div>
				<p class="font-bold text-xl text-slate-700 mb-4">Categories</p>
				<p class="text-slate-700">Some category title</p>
			</div>
		</div>
	  <div>
		  <p class="text-center text-xs">© {{ year }} Oracle RPG</p>
	  </div>
  </div>
</template>

<script setup>
import {format} from "date-fns";

const config = useRuntimeConfig();
const year = new Date().getFullYear();
</script>