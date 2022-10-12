<template>
  <div class="container mx-auto">
    <Title>Home — {{ metaTitle }}</Title>
    <h1 class="font-bold text-gray-600 text-3xl mb-8">Home page</h1>
    <div class="grid grid-cols-3 gap-16 w-2/3 mx-auto">
        <PostItem v-for="post in posts.data.posts.edges" :post="post"></PostItem>
    </div>
  </div>
</template>

<script setup>
const metaTitle = useState('title');
const { data:posts } = await useFetch(
    'http://oracle-rpg.test/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query GetPostsEdges {
          posts( first: 15, after: null ) {
            pageInfo {
              hasPreviousPage
              hasNextPage
              startCursor
              endCursor
            }
            edges {
              cursor
              node {
                id
                title
                date
                uri
                featuredImage {
                  node {
                    mediaItemUrl
                  }
                }
              }
            }
          }
        }
    `,
      })
    });
</script>