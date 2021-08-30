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
        :class="likingStatus('like', post.id) ? 'like-btn--active' : ''" 
        @click="toggleLiking('like', post.id)"
      >
        <v-icon class="like-btn__icon">mdi-heart</v-icon>
      </v-btn>
      <v-btn 
        icon
        class="dislike-btn" 
        :class="likingStatus('dislike', post.id) ? 'dislike-btn--active' : ''" 
        @click="toggleLiking('dislike', post.id)"
      >
        <v-icon class="dislike-btn__icon">mdi-heart-broken</v-icon>
      </v-btn>

      <v-btn @click="toggleExpansion(post.id)" icon>
        <v-icon :class="isExpanded ? 'rotate-180' : ''">mdi-chevron-down</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <EntryMenu 
        @edit="$emit('edit', post.id)"
        @remove="$emit('remove', post.id)"
      />
    </v-card-actions>
    <v-expand-transition>
      <div v-show="isExpanded">
        <v-divider></v-divider>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi repudiandae, omnis est veritatis illo maiores ipsam voluptatum, aperiam nulla asperiores quam possimus vero rerum laborum, corrupti ipsa veniam optio.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>


<script>
import EntryMenu from '@/components/EntryMenu'

export default {
  name: 'Entry',
  components: {
    EntryMenu,
  },

  props: {
    post: Object,
    shrink: Number,
  },

  data: () => ({
    isExpanded: false,

    user: {
      id: 1,
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

  watch: {
    shrink() {
      if(this.post.id === this.shrink) {
        this.isExpanded = false
      }
    }
  },

  methods: {
    toggleExpansion(id) {
      this.isExpanded = !this.isExpanded

      if(this.isExpanded) {
        this.$emit('expand', id)
      }
    },

    likingStatus(status, postId) {
      let key = status === 'like' ? 'likes' : 'dislikes'
      return this.user[key].some(like => like.post_id === postId)
    },

    toggleLiking(status, postId) {
      if(!this.$store.state.isLoggedIn) {
        this.$emit('unauthorized-action')
        return
      }

      let key = status === 'like' ? 'likes' : 'dislikes'

      if(this.likingStatus(status, postId)) {
        this.user[key] = this.user[key].filter(like => like.post_id !== postId)
      } else {
        this.user[key].push({ id: 3, post_id: postId })
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