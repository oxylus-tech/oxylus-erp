<template>
    <ox-mail-panel v-bind="props" :repo="repos.contactMails">
        <template v-for="name in forwardSlots" :key="name" #[name]="bind">
            <slot :name="name" v-bind="bind"/>
        </template>

        <template #views.edit.default="{value, owner, saved}">
            <ox-contact-mail-edit :owner="owner?.id" :initial="value" :saved="saved"/>
        </template>

        <template #views.create.default="{value, owner, saved}">
            <ox-contact-mail-edit :owner="owner?.id" :initial="value" :saved="saved"/>
        </template>
    </ox-mail-panel>
</template>
<script setup lang="ts">
/**
 * @component Model panel for contact mail.
 */
import { computed, defineProps, inject, useSlots, withDefaults } from 'vue'

import { t } from '@oxylus/ox'
import {OxMailPanel} from '@oxylus/mails/components'
import type {ModelPanelDefinition} from '@oxylus/ox'

import {useContactMailModels} from '../composables'
import OxContactMailEdit from './OxContactMailEdit.vue'

const slots = useSlots()
const forwardSlots = slots

const repos = useContactMailModels()

const props = withDefaults(defineProps<ModelPanelDefinition>(), {
    name: 'contactMails',
    headers: ['subject', 'state', 'updated'],
})
</script>
