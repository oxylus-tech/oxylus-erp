<template>
    <v-row>
        <v-col>
            <ox-phone-input v-model="props.item.number" :label="t([Phone, 'fields.number'])"/>
        </v-col>
        <v-col cols="4">
            <ox-kind-input v-model="props.item.kind" required />
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
import {defineProps} from 'vue'

import {t} from '@oxylus/ox'
import OxKindInput from './OxKindInput.vue'
import {OxPhoneInput} from '@oxylus/locations/components'

import {Phone} from '../models'

const props = defineProps({
    item: Object
})
</script>
