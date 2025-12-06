<template>
    <ox-mail-edit v-bind="attrs" :repo="repos.contactMails" :variables="variables">
        <template #recipients="{editor}">
            <v-card :subtitle="t('fields.recipients')"
                    class="mb-3">
                <template #text>
                    <ox-field :editor="editor" name="recipients">
                        <template #default="{props: props_}">
                            <ox-contact-input v-bind="props_" multiple
                                v-model="editor.value.recipients" />
                        </template>
                    </ox-field>
                    <ox-field :editor="editor" name="recipient_lists" type="autocomplete"
                        :repo="repos.contactLists"
                        item-title="name" item-value="id"
                        multiple />
                </template>
            </v-card>
        </template>
    </ox-mail-edit>
</template>
<script setup lang="ts">
import {computed, useAttrs} from 'vue'
import { t, rules } from "@oxylus/ox"
import {OxModelEdit, OxField} from '@oxylus/ox/components'
import {OxContactInput} from '@oxylus/contacts/components'
import {OxMailEdit} from "@oxylus/mails/components"

import { useContactMailModels } from '../composables'

const repos = useContactMailModels()
const attrs = useAttrs()

const variables = [
    {name: "contact.name", label: "Contact Name", description: "Name of the contact"},
    {name: "contact.email", label: "Contact Email", description: "Email of the contact"},
]
</script>
