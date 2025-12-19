<template>
    <v-text-field v-model="value">
        <template #prepend-inner>
            {{ country?.flag }}
        </template>
    </v-text-field>
</template>
<script setup lang="ts">
import {defineModel, useAttrs, ref, watch} from 'vue'

import {t, useQuery} from '@oxylus/ox'
import {useCountries} from '../composables'

const value = defineModel()
const attrs = useAttrs()
const repos = useCountries()
const {fetch, state} = useQuery(repos.countries, repos, {save: false})

const countries = ref([])
const country = ref(null)

watch(value, async (value) => {
    if(value.startsWith('+'))
        value = value.substring(1)
    else if(value.startsWith('00'))
        value = value.substring(2)

    const resp = await fetch({params: {"phone_prefixes__prefix__startswith": value}})
    countries.value = resp.entities
    country.value = resp.entities[0]
})



</script>
