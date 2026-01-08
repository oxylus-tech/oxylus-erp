import {init, createPinia} from '@oxylus/ox'
import {App as $App} from '@oxylus/ox/components'

import OxSubscriptionPanel from './components/OxSubscriptionPanel.vue'

const App = {
    extends: $App,
    components: {OxSubscriptionPanel},
}

export default App;

const pinia = createPinia()
init({App, plugins: [pinia] })
