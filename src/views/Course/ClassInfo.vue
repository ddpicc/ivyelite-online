<template>
  <v-container
    fill-height
  >
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card
          class="mx-auto"
        >
          <v-timeline
            dense
            clipped
          >
            <v-timeline-item
              fill-dot
              class="white--text mb-12"
              color="orange"
              large
            >
              <template v-slot:icon>
                <span>日期</span>
              </template>
              <v-text-field
                v-model="input"
                hide-details
                flat
                label="输入课堂内容..."
                solo
                @keydown.enter="comment"
              >
                <template v-slot:append>
                  <v-btn
                    class="mx-0"
                    depressed
                    @click="comment"
                  >
                    Post
                  </v-btn>
                </template>
              </v-text-field>
            </v-timeline-item>

            <v-timeline-item
              v-for="event in timeline"
              :key="event.id"
              class="mb-4 mr-4"
              small
            >
              <v-card class="elevation-2">
                <v-card-title>
                  Lorem ipsum
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
        >
          <v-list>
            <v-list-item
              v-for="item in items"
              :key="item.title"
            >
              <v-list-item-icon>
                <v-icon
                  v-if="item.icon"
                  color="pink"
                >
                  mdi-close
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],

        events: [],
        input: null,
        nonce: 0,
      }
    },

    computed: {
      timeline () {
        return this.events.slice().reverse()
      },
    },

    methods: {
      comment () {
        const time = (new Date()).toTimeString()
        this.events.push({
          id: this.nonce++,
          text: this.input,
          time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          }),
        })

        this.input = null
      },
    }
  }
</script>