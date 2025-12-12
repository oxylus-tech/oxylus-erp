<template>
    <ox-model-edit v-bind="attrs" :repo="repos.persons">
        <template #default="{editor, editable, disabled}">
            <v-container>
                <v-row>
                    <ox-field :editor="editor" name="first_name" @update:modelValue="updateName(editor.value)"/>
                    <ox-field :editor="editor" name="last_name" @update:modelValue="updateName(editor.value)" />
                </v-row>
                <ox-field :editor="editor" name="name"/>
                <ox-field :editor="editor" name="email" type="email"
                    :rules="[rules.email]"
                    :disabled="disabled || editor.value.user"/>
                <!--
                    <template #details v-if="editor.value.user">
                        {{ t('fields._.from_user') }}
                    </template>
                -->
                <ox-field type="select" multiple
                    :editor="editor" name="organisations"
                    :items="organisations"
                    item-title="name" item-value="id"/>
            </v-container>
            <v-expansion-panels multiple :model-value="['emails', 'phones']">
                <ox-contact-infos v-model="editor.value" :editable="editable" />
            </v-expansion-panels>
        </template>
    </ox-model-edit>
</template>
<script setup lang="ts">
/**
 * @component Edit view for a Person contact.
 */
import {computed, useAttrs} from 'vue'
import { t, rules } from "@oxylus/ox"
import {OxModelEdit, OxField} from '@oxylus/ox/components'

import { useContactModels } from '../composables'
import OxContactInfos from './OxContactInfos.vue'

const repos = useContactModels()
const attrs = useAttrs()
const organisations = computed(() => repos.organisations.all())

function updateName(value) {
    value["name"] = `${value["first_name"]} ${value["last_name"]}`.trim()
}
</script>
