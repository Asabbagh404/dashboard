<template>
  <div id="app" class="full-height">
    {{ info }}
    <v-container class="full-height">
      <v-row>
        <v-col md="12">
          <h2>
            <v-badge content="2" color="orange" offset-x="-2" offset-y="10">Alerts</v-badge>
          </h2>
          <h3 class="font-weight-light mb-2">
            Manage your alerts
          </h3>
          <v-card>
            <v-card-title>
              Under Review (2)
            </v-card-title>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <span>
                  <v-icon class="pr-2">
                    mdi-alert-circle
                  </v-icon>
                  Zizi
                  </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </v-expansion-panel-content>
                <v-card-actions>
                  <v-btn
                      text
                      color="orange"
                  >
                    Approve
                  </v-btn>

                  <v-btn
                      text
                      color="orange"
                  >
                    Resolve
                  </v-btn>
                </v-card-actions>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <span>
                    <v-icon class="pr-2">
                    mdi-alert-circle
                    </v-icon>
                  Anal
                  </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad
                </v-expansion-panel-content>
                <v-card-actions>
                  <v-btn
                      text
                      color="orange"
                  >
                    Approve
                  </v-btn>

                  <v-btn
                      text
                      color="orange"
                  >
                    Resolve
                  </v-btn>
                </v-card-actions>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
        <v-col md="12">
          <v-card>
            <v-card-title>
              New (0)
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: null
    }
  },
}
</script>