<template>
    <v-row>
        <v-col>
            <v-text-field v-model="props.item.email" :label="t('fields.email')" :rules="[rules.email]"/>
        </v-col>
        <v-col cols="4">
            <ox-kind-input v-model="props.item.kind" required />
        </v-col>
    </v-row>
</template>
<script setup lang="ts">
import {defineProps} from 'vue'
import {t, rules} from '@oxylus/ox'
import OxKindInput from './OxKindInput.vue'

const props = defineProps({
    item: Object,
})

if(props.item && !props.item.kind)
    props.item.kind = 0

</script>
