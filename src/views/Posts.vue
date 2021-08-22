<template>
  <v-container>
    POSTS
    <h1>Konu Başlığı</h1>
    <v-row>
      <v-col
        v-for="post in posts" :key="post.id"
        cols="12"
      >
        <v-card outlined>
          <v-card-text>
            {{ post.post }}
          </v-card-text>
          <v-card-actions>
            {{ post.author }}
            {{ post.date }}
            <v-spacer></v-spacer>
            <v-btn @click="toggleActions(post.id)" icon>
              <v-icon>mdi-chevron-down</v-icon>
              <!-- <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon> -->
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show === post.id">
              <v-divider></v-divider>
              <v-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi repudiandae, omnis est veritatis illo maiores ipsam voluptatum, aperiam nulla asperiores quam possimus vero rerum laborum, corrupti ipsa veniam optio.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  name: "Posts",

  data: () => ({
    show: -1,
    toggleAction: false,
    // show: false,
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
    ]
  }),

  methods: {
    toggleActions(id) {
      this.toggleAction = !this.toggleAction
      // this.show = this.toggleAction ? id : -1
      this.show = id
    }
  }
};
</script>

<style>
</style>