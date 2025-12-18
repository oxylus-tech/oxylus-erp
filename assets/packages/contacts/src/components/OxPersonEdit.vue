<template>
    <ox-model-edit v-bind="attrs" :repo="repos.persons">
        <template #default="{editor, editable, disabled}">
            <v-container>
                <v-row>
                    <v-col>
                        <ox-field :editor="editor" name="first_name" @update:modelValue="updateName(editor, 'first_name', $event)"/>
                    </v-col>
                    <v-col>
                        <ox-field :editor="editor" name="last_name" @update:modelValue="updateName(editor, 'last_name', $event)" />
                    </v-col>
                </v-row>
                <ox-field :editor="editor" name="name" :disabled="true" />
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

function updateName(editor, field, value) {
    const val = editor.value
    if(field == 'first_name')
        editor.value["name"] = `${val["last_name"]} ${value}`.trim()
    else
        editor.value["name"] = `${value} ${val["first_name"]}`.trim()
}
</script>
