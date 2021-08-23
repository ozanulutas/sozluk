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
          <v-card-subtitle class="text-right">
            {{ post.author }}
            {{ post.date }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn icon>
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon class="like-btn" :class="isLiked(post.id) ? 'like-btn--active' : ''" @click="toggleLike(post.id)">
              <v-icon class="like-btn__icon">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-heart-broken</v-icon>
            </v-btn>
            <v-btn @click="toggleExpansion(post.id)" icon>
              <v-icon :class="post.id === expansionId ? 'rotate-180' : ''">mdi-chevron-down</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="expansionId === post.id">
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
    expansionId: null,
    isExpanded: false,

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

    user: {
      likes: [
        {
          id: 1,
          post_id: 2,
        },
        {
          id: 2,
          post_id: 3,
        },
      ]
    }

  }),

  computed: {
    // isLiked() {
    //   return postId => this.user.likes.some(like => like.post_id === postId)
    // }
  },

  methods: {
    toggleExpansion(id) {
      if(this.isExpanded && this.expansionId === id) {
        this.expansionId = null
        this.isExpanded = false
      } else {
        this.expansionId = id
        this.isExpanded = true
      }
    },
    isLiked(postId) {
      return this.user.likes.some(like => like.post_id === postId)
    },
    toggleLike(postId) {
      if(this.isLiked(postId)) {
        this.user.likes = this.user.likes.filter(like => like.post_id !== postId)
      } else {
        this.user.likes.push({ id: 3, post_id: postId })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.rotate-180 {
  transform: rotate(180deg);
}

.like-btn {
  &:hover,
  &--active {
    .like-btn__icon {
      color: pink;
    } 
  }
}
</style>