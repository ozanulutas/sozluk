<template>
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
      <v-btn 
        icon 
        class="like-btn" 
        :class="isLiked(post.id) ? 'like-btn--active' : ''" 
        @click="toggleLike(post.id)"
      >
        <v-icon class="like-btn__icon">mdi-heart</v-icon>
      </v-btn>
      <v-btn 
        icon 
        class="dislike-btn" 
        :class="isDisliked(post.id) ? 'dislike-btn--active' : ''" 
        @click="toggleDislike(post.id)"
      >
        <v-icon class="dislike-btn__icon">mdi-heart-broken</v-icon>
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
</template>


<script>
export default {
  name: 'Post',

  props: {
    post: Object
  },

  data: () => ({
    expansionId: null,
    isExpanded: false,

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
      ],
      dislikes: [
        {
          id: 1,
          post_id: 1,
        },
        {
          id: 2,
          post_id: 4,
        },
      ],
    }
  }),

  computed: {
    isLiked() {
      return postId => this.user.likes.some(like => like.post_id === postId)
    },
    isDisliked() {
      return postId => this.user.dislikes.some(dislike => dislike.post_id === postId)
    },
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
    // isLiked(postId) {
    //   return this.user.likes.some(like => like.post_id === postId)
    // },
    // isDisliked(postId) {
    //   return this.user.dislikes.some(dislike => dislike.post_id === postId)
    // },
    toggleLike(postId) {
      if(this.isLiked(postId)) {
        this.user.likes = this.user.likes.filter(like => like.post_id !== postId)
      } else {
        this.user.likes.push({ id: 3, post_id: postId })
      }
    },
    toggleDislike(postId) {
      if(this.isDisliked(postId)) {
        this.user.dislikes = this.user.dislikes.filter(dislike => dislike.post_id !== postId)
      } else {
        this.user.dislikes.push({ id: 3, post_id: postId })
      }
    },
  }
}
</script>


<style lang="scss" scoped>
.rotate-180 {
  transform: rotate(180deg);
}

.like-btn {
  // &:hover &__icon,
  &--active &__icon {
    color: pink;
  }
}

.dislike-btn {
  // &:hover &__icon,
  &--active &__icon {
    color: maroon;
  }
}
</style>