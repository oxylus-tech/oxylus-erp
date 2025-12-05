<template>
    <ox-mail-edit v-bind="attrs" :repo="repos.contactMails">
    </ox-mail-edit>
</template>
<script setup lang="ts">
import {computed, useAttrs} from 'vue'
import { t, rules } from "@oxylus/ox"
import {OxModelEdit, OxField} from '@oxylus/ox/components'
import {OxMailEdit} from "@oxylus/mails/components"

import { useContactMailModels } from '../composables'

const repos = useContactMailModels()
const attrs = useAttrs()
</script>
