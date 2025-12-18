<template>
    <v-select v-model="value" v-bind="attrs"
        :menu-props="{ zIndex: 10000 }"
        :placeholder="t('fields.kind')"
        :items="ContactInfo.Kind.items" />
</template>
<script setup lang="ts">
import { defineModel, useAttrs } from 'vue'
import { t } from '@oxylus/ox'
import { ContactInfo } from '../models'

const value = defineModel()
const attrs = useAttrs()

</script>
