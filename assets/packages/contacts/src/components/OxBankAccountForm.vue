<template>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field v-model="props.item.name"
                     :label="t([BankAccount, 'fields.name'])"/>
             </v-col>
        </v-row>
        <v-row>
            <v-col >
                <ox-iban-input v-model="props.item.iban"
                    :label="t([BankAccount, 'fields.iban'])"/>
            </v-col>
            <v-col cols="2">
                <v-text-field v-model="props.item.bic"
                     :label="t([BankAccount, 'fields.bic'])"/>

            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="props.item.address"
                     :label="t([BankAccount, 'fields.address'])"/>
             </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-text-field v-model="props.item.bank_name"
                     :label="t([BankAccount, 'fields.bank_name'])"/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
import {defineProps, inject} from 'vue'
import {t} from '@oxylus/ox'
import {OxIbanInput} from '@oxylus/locations/components'

import { BankAccount } from '../models'

const props = defineProps({
    item: Object,
})
</script>
