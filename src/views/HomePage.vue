<template>
  <div>
    <section id="hero">
      <v-row no-gutters>
        <v-img
          height="550px"
          src="https://www.ivyelite.net/wp-content/uploads/2020/04/GMAT-Boot-Camp-1440x550-B9-1.jpg"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text text-"
                  cols="12"
                  tag="h1"
                >
                  <br>
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >
                    首页
                  </span>
                </v-col>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>
    <section>
      <v-container>
        <h2 class="font-weight-bold mb-3 white--text">热门课程</h2>
        <v-row>
          <v-col
            v-for="({ title, summary }, i) in classList"
            :key="i"
            cols="12"
            md="3"
          >
            <v-card
              class="mx-auto"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>

              <v-card-title>{{title}}</v-card-title>

              <v-card-text>
                <v-row
                  align="center"
                  class="mx-0"
                >
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">
                    4.5 (413)
                  </div>
                </v-row>

                <div class="my-4 text-subtitle-1">
                  $150
                </div>

                <div>{{summary}}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Tonight's availability</v-card-title>

              <v-card-text>
                <v-chip-group
                  v-model="selection"
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <v-chip>5:30PM</v-chip>

                  <v-chip>7:30PM</v-chip>

                  <v-chip>8:00PM</v-chip>

                  <v-chip>9:00PM</v-chip>
                </v-chip-group>
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="reserve"
                >
                  预约
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
				<div>
					<v-btn
						class="ma-1 justify-end"
						color="white"
						plain
						to="/course/all"
					>
						更多课程
					</v-btn>
				</div>
      </v-container>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',

    data: () => ({
      selection: '',
      classList: [
        {
          title: 'gmat',
          summary: 'good class',
        },
        {
          title: 'gre',
          summary: 'english class',
        },
        {
          title: 'gmat',
          summary: 'good class',
        },
        {
          title: 'gre',
          summary: 'english class',
        }
      ]
    }),

    methods: {
      reserve: function(){

      }
    }
  }
</script>
