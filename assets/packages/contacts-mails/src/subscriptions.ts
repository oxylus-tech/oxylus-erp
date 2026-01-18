import {init, createPinia} from '@oxylus/ox'
import {App} from '@oxylus/ox/components'

import OxSubscriptionPanel from './components/OxSubscriptionPanel.vue'
import {contactsMailsLocales} from './composables.ts'

const pinia = createPinia()
init({
    App: { extends: App, components: {OxSubscriptionPanel} },
    plugins: [pinia],
    locales: contactsMailsLocales
})
