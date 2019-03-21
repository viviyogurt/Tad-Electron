<template>
  <div class="home">
    <v-card class="ma-5 pb-2 elevation-15" color="blue darken-3" dark>
      <v-card-text class="headline font-weight-bold">
        <p>恭喜你成功打开了新世界的大门！</p>
        <p>接下来也要多多加油呀。</p>
      </v-card-text>

      <v-card-actions>
        <v-list-tile class="grow">
          <v-list-tile-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Vian Chen</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>
