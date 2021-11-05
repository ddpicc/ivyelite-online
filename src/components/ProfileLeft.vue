<template>
  <v-card
    class="mx-auto"
    width="256"
    tile
  >
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              John Leider
              <v-icon>mdi-pencil</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
						:to="link.to"
						active-class="green--text"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      links: [
        { text: '我的课程', icon: 'mdi-folder', to: '/myprofile/class'},
        { text: '我的讨论', icon: 'mdi-account-multiple', to: '/myprofile/discuss' },
        { text: '购买记录', icon: 'mdi-star', to: '/myprofile/invoice' },
        { text: '新建课程', icon: 'mdi-star', to: '/course/create' },
        { text: '个人资料', icon: 'mdi-history', to: '/myprofile/profile' },
      ],
    }),
  }
</script>