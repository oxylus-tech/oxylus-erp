<template>
    <ox-panel :state="state" name="subscriptions">
        <header>
            <h1>{{ initial?.name }}</h1>
            <h2>{{ initial?.email }}</h2>
            <p>You can enable and disable your subscriptions.</p>
        </header>
        <v-list v-if="initial">
            <!-- TODO: select/unselect all
            <v-list-item>
                <v-switch @update:modelValue="" />
            </v-list-item>
            -->

            <v-list-item v-for="item, index in initial.subscriptions">
                <v-list-item-title v-text="item.name"/>
                <v-list-item-subtitle v-text="item.description"/>

                <template #append>
                    <v-switch v-model="edit.subscriptions" :value="item.id"
                        color="primary" hide-details />
                </template>
            </v-list-item>

            <v-list-item>
                <v-row>
                    <!-- TODO: unsubscribe reason -->
                    <v-col>
                        <v-chip v-if="rmSubscriptions" color="error" size="small" class="mr-3">
                            -{{ rmSubscriptions }}
                        </v-chip>
                        <v-chip v-if="newSubscriptions" color="primary" size="small" class="mr-3">
                            +{{ newSubscriptions }}
                        </v-chip>
                    </v-col>
                    <v-col cols="6">
                        <ox-validation-btn :state="state" :disabled="!updated"
                            size="small" class="mb-3"
                            @reset="reset()" @validate="validate()">
                            <template #prepend="{disabled, attrs}">
                            </template>
                        </ox-validation-btn>
                    </v-col>
                </v-row>
            </v-list-item>
        </v-list>

        <v-alert color="secondary">
            <p>
                You can delete all subscriptions from our database. This means that:<br/>

                - We no longer have your contact linked to any mailing list.<br/>
                - We still keep your contact informations in our db.<br/>
                - You can be readded to a mailing-list later since we don't know anymore wether you're subscribed or unsubscribed.<br/>
            </p>
            <div class="text-right mt-3">
                <v-btn class="me-2" v-bind="attrs" :disabled="disabled"
                       color="red-lighten-1" size="small" prepend-icon="mdi-delete">
                    Delete all my subscriptions
                </v-btn>
            </div>
        </v-alert>
    </ox-panel>
</template>
<script setup lang="ts">
import { isEqual } from 'lodash'
import { computed, ref, reactive, onMounted, toRaw } from 'vue'
import { useModelList, useModels, useQuery } from '@oxylus/ox'
import { OxPanel, OxValidationBtn } from '@oxylus/ox/components'

import { Subscription } from '@oxylus/contacts/models'
import { ContactSubscriptions } from '../models'

const props = defineProps({
    jwt: String,
})
const repos = useModels([ContactSubscriptions])
const {query, state} = useQuery(repos.contactSubscriptions, repos)


const initial = ref({})
const edit = reactive({})

async function load() {
    const resp = await query.fetch({ params: {jwt: props.jwt}})
    const contact = resp.entities[0]
    if(!contact)
        return

    initial.value = contact
    edit.subscriptions = getSubscribed()
}


function getSubscribed(subscriptions: string[]|null =null) {
    subscriptions ??= initial.value?.subscriptions
    if(!subscriptions)
        return []

    return subscriptions.filter(item => item.status == Subscription.Status.SUBSCRIBED).map(i => i.id)
}


const rmSubscriptions = computed(
    () => updated.value && edit.subscriptions && getSubscribed().filter(i => !edit.subscriptions.includes(i)).length || 0
)
const newSubscriptions = computed(
    () => {
        if(!updated.value)
            return 0;
        const initials = getSubscribed()
        return edit.subscriptions && edit.subscriptions.filter(i => !initials.includes(i)).length || 0
    }
)

const updated = computed(() => {
    const initials = getSubscribed()
    return !isEqual(initials, edit.subscriptions)
})

function reset() { edit.subscriptions = getSubscribed() }

async function validate() {
    const subscriptions = initial.value.subscriptions.map(i => ({
        id: i.id,
        status: edit.subscriptions.includes(i.id) ? Subscription.Status.SUBSCRIBED : Subscription.Status.UNSUBSCRIBED
    }))
    const data = { subscriptions }

    const resp = await query.post(data, {
        id: initial.value.id,
        params: {jwt: props.jwt}, method: "patch"
    })
    initial.value = resp.entities[0]
    edit.subscriptions = getSubscribed()
}

onMounted(() => load())
</script>
