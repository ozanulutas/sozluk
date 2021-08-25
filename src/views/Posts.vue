<template>
  <v-container>
    POSTS
    <h1>Konu Başlığı</h1>
    <v-row>
      <v-col
        v-for="post in posts" :key="post.id"
        cols="12"
      >
        <Post :post="post" />
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import Post from '@/components/Post'

export default {
  name: "Posts",
  components: {
    Post
  },

  data: () => ({
    posts: [
      {
        id: 1,
        post: 'Lorem ipsum dolor sit amet.',
        date: '11.01.2001',
        author: 'John Doe',
      },
      {
        id: 2,
        post: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        date: '11.01.2001',
        author: 'John Doe',
      },
      {
        id: 3,
        post: 'Lorem ipsum dolor sit amet.',
        date: '11.01.2001',
        author: 'John Doe',
      },
      {
        id: 4,
        post: 'Lorem ipsum dolor sit amet.',
        date: '11.01.2001',
        author: 'John Doe',
      },
    ],
  }),

};
</script>
