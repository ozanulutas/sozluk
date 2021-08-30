<template>
  <v-container>
      <div class="d-flex justify-space-between align-items-center my-3">
        <h1>Konu Başlığı</h1>

        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <v-btn
              fab
              :attrs="attrs"
              v-on="on"
              @click.stop="newEntryDialog = true"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <span>Entry Gir</span>
        </v-tooltip>
      </div>
    <v-row>
      <v-col
        v-for="post in posts" :key="post.id"
        cols="12"
      >
        <Entry 
          :post="post" 
          :shrink="beforeExpandedId" 
          @expand="updateExpanded" 
          @unauthorized-action="unauthorizedAction" 
          @edit="edit"
          @remove="remove"
        />
      </v-col>
    </v-row>

    <NewEntryDialog 
      :edit-data.sync="editData"
      :dialog.sync="newEntryDialog"
    />

    <Snackbar :snackbar="snackbar"/>
    
  </v-container>
</template>


<script>
import Entry from '@/components/Entry'
import NewEntryDialog from '@/components/NewEntryDialog'
import Snackbar from '@/components/Snackbar.vue'

export default {
  name: "Topic",
  components: {
    Entry,
    NewEntryDialog,
    Snackbar,
  },

  data: () => ({
    editData: {},
    newEntryDialog: false,
    currentExpandedId: null,
    beforeExpandedId: null,
    posts: [
      {
        id: 1,
        user_id: 1,
        post: 'Lorem ipsum dolor sit amet.',
        date: '11.01.2001',
        author: 'John Doe',
      },
      {
        id: 2,
        user_id: 3,
        post: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        date: '11.01.2001',
        author: 'John Doe',
      },
      {
        id: 3,
        user_id: 4,
        post: 'Lorem ipsum dolor sit amet.',
        date: '11.01.2001',
        author: 'John Doe',
      },
      {
        id: 4,
        user_id: 1,
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
    },
   
    edit(id) {
      [this.editData] = this.posts.filter(post => post.id === id)
      this.newEntryDialog = true

      console.log("upd", id);
      console.log(this.editData);
    },
    remove(id) {
      this.snackbar = {
        show: true,
        text: 'Bu işlemi gerçekleştirmek için giriş yapmalısınız.',
        btn_text: 'İPTAL',
        second_btn: {
          btn_text: 'SİL',
          btn_color: 'red',
          event: () => {
            console.log("removed", id)
            this.snackbar.show = false
            this.snackbar = {
              show: true,
              text: 'Entry silindi.'
            }
          }
        }
      }
    },
  }

};
</script>
