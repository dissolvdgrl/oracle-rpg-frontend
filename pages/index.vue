<template>
  <div>
    <Title>Home — {{ metaTitle }}</Title>
    <PageHeader
        header="Guides and resources for playing solo tabletop roleplaying games"
        subHeader="Welcome to Oracle RPG"
    />
    <div class="container mx-auto mt-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-2/3 mx-auto">
          <div v-if="pending">
            <p>Loading posts...</p>
          </div>
          <PostItem v-for="post in posts.data.posts.edges" :post="post"></PostItem>
      </div>
    </div>
  </div>
</template>

<script setup>
const metaTitle = useState('title');
const config = useRuntimeConfig();

const { pending, data: posts } = await useFetch(
    config.wpUrl,
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
                slug
                excerpt
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