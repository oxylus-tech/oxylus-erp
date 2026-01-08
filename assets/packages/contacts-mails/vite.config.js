import { mergeConfig } from 'vite'
import baseConfig from '@oxylus/ox/vite.config.base'

export default mergeConfig(
    baseConfig,
    {
        build: {
            rollupOptions: {
                input: {
                    subscriptions: "src/subscriptions.ts",
                }
            }
        }
    }
)
