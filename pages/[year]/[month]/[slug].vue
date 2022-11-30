<template>
  <div>
	  <Title>{{ post.data.post.title }}</Title>
		<PostHeader
			:header="post.data.post.title"
			:img="post.data.post.featuredImage.node.mediaItemUrl"
			:date="post.data.post.date"
			:tags="post.data.post.tags"
			:categories="post.data.post.categories"
		/>
		<div v-html="post.data.post.content" class="w-1/3 mx-auto mt-32 prose prose-slate prose-xl"></div>
  </div>
</template>
<script setup>
import { format } from 'date-fns';
const config = useRuntimeConfig();
const route = useRoute();

const { pending, data:post } = await useFetch(
    config.wpUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query GetPost {
          post( id: "${route.params.slug}", idType: SLUG ) {
            id
            title
            date
            seo {
              metaDesc
            }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            content
            categories(first:10) {
				nodes {
				  name
				}
			}
			tags(first:10) {
				nodes {
				  name
				}
			}
        }
      }`,
      })
    });
</script>