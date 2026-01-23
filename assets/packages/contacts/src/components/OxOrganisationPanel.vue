<template>
    <ox-model-panel v-bind="props" :repo="repos.organisations">
        <template v-for="name in forwardSlots" :key="name" #[name]="bind">
            <slot :name="name" v-bind="bind"/>
        </template>

        <template #list.filters="{list,filters}">
            <ox-country-input v-model="filters.country__uuid__in"
                class="ml-2"
                :label="t('fields.country')" density="compact"
                hide-details/>
            <slot name="list.filters" :list="list" :filters="filters"/>
        </template>

        <template #item.country="{item}" v-if="!slots['item.country']">
            {{ item.$country?.flag }} {{ item.$country?.name }}
        </template>

        <template #item.name="{item}" v-if="!slots['item.color']">
            <v-icon :color="item.color">mdi-domain</v-icon>
            {{ item.name }}
        </template>

        <template #item.email="{item}" v-if="!slots['item.email']">
            <v-btn :href="`mailto:${item.email}`" size='x-small'
                prepend-icon="mdi-mail" color="secondary mr-1">
                {{ item.email }}
            </v-btn>
            <template v-for="email of item.emails">
                <v-btn :href="`mailto:${email.email}`" size='x-small'
                    prepend-icon="mdi-mail" color="secondary">
                    {{ email.email }}
                </v-btn>
            </template>
        </template>

        <template #item.phone="{item}" v-if="!slots['item.phone']">
            <template v-for="phone of item.phones">
                <v-btn :href="`tel:${phone.number}`" size='x-small'
                    prepend-icon="mdi-phone" color="secondary">
                    {{ phone.number }}
                </v-btn>
            </template>
        </template>

        <template #views.edit="{value, saved}">
            <ox-organisation-edit :initial="value" :saved="saved"/>
        </template>

        <template #views.create="{value, saved}">
            <ox-organisation-edit :initial="value" :saved="saved"/>
        </template>

        <template #views.edit.sections="{value, ...bind}">
            <ox-section name="comments" :title="t(ContactComment, 2)">
                <ox-message-list v-if="value"
                    :repo="repos.contactComments" :repos="repos"
                    :thread="value.id"
                    can-send can-update reverse />
            </ox-section>
            <slot name="views.edit.section" v-bind="bind" :value="value"/>
        </template>
    </ox-model-panel>
</template>
<script setup lang="ts">
import { computed, defineProps, useSlots, withDefaults } from 'vue'

import { query, t } from '@oxylus/ox'
import {OxModelPanel, OxSection} from '@oxylus/ox/components'
import type {ModelPanelDefinition} from '@oxylus/ox'
import {OxMessageList} from '@oxylus/content/components'
import {OxCountryInput} from '@oxylus/locations/components'

import {useContactModels} from '../composables'
import {ContactComment} from '../models'
import OxOrganisationEdit from './OxOrganisationEdit.vue'

const slots = useSlots()
const forwardSlots = Object.keys(slots).filter(x => !(['list.filters', 'item.groups'].includes(x)))

const repos = useContactModels()
query(repos.organisations).all({dataKey: 'results'})

const organisations = computed(() => repos.organisations.all())

const props = withDefaults(defineProps<ModelPanelDefinition>(), {
    name: 'organisations',
    relations: ['$country'],
    fetchRelations: true,
    headers: ['name', 'email', 'vat', 'phone', 'country'],
})
</script>
