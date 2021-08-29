<template>
  <v-container>
    POSTS
    <h1>Konu Başlığı</h1>
    <v-row>
      <v-col
        v-for="post in posts" :key="post.id"
        cols="12"
      >
        <Post 
          :post="post" 
          :shrink="beforeExpandedId" 
          @expand="updateExpanded" 
          @unauthorized-action="unauthorizedAction" 
        />
      </v-col>
    </v-row>

    <Snackbar :snackbar="snackbar"/>
    
  </v-container>
</template>


<script>
import Post from '@/components/Post'
import Snackbar from '@/components/Snackbar.vue'

export default {
  name: "Posts",
  components: {
    Post,
    Snackbar,
  },

  data: () => ({
    currentExpandedId: null,
    beforeExpandedId: null,
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
    snackbar: {
      show: false,
      text: '',
    },
  }),

  methods: {
    updateExpanded(id) { // diğer açık olanın kapanması içün
      if(this.currentExpandedId && this.currentExpandedId !== id) {
        this.beforeExpandedId = this.currentExpandedId
      }
      this.currentExpandedId = id
    },
    unauthorizedAction() {
      this.snackbar = {
        show: true,
        text: 'Bu işlemi gerçekleştirmek için giriş yapmalısınız.',
        second_btn: {
          btn_text: 'GİRİŞ YAP',
          btn_color: 'green',
          event: () => this.$router.push('/login')
        }
      }
    }
  }

};
</script>
