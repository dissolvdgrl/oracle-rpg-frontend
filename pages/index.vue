<template>
  <div class="">
    <h1 class="font-bold text-gray-600 text-xl mb-8">Home page</h1>
    <div>
      <p v-for="post in posts.data.posts.edges">{{ post.node.date }} - <a :href="`https://oracle-rpg.com${post.node.uri}`"> {{ post.node.title }}</a></p>
    </div>
  </div>
</template>

<script setup>
const posts = await $fetch(
    'http://oracle-rpg.test/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query GetPostsEdges {
            posts {
              edges {
                node {
                  id
                  title
                  date
                  uri
                }
              }
            }
          }
    `,
      })
    });
  console.log(posts.data.posts.edges);
</script>