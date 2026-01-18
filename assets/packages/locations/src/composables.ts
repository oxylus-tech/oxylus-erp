import { useModels, query, locales, useI18n, type LocaleLoaders } from '@oxylus/ox'
import { Country, Currency } from './models'


/** The ox locations locales loader **/
export const locationsLocales: LocaleLoaders = {
    ...locales,
    ox_locations: import.meta.glob('./locale/*.json', { import: 'default'})
}


/** Use ox locations locales **/
export function useLocationsI18n(locales?: LocaleLoaders = {}) {
    return useI18n({...locationsLocales, ...locales})
}


/** Use @oxylus/locations models. */
export function useLocationModels() {
    const repos = useModels([Country, Currency], {useDefaults: false})
    //query(repos.countries).allOnce()
    //query(repos.currencies).allOnce()
    return repos
}


/** Return repository of Country and load data if not there yet */
export function useCountries() {
    const { countries } = useModels([Country], {useDefaults: false})
    //query(countries).allOnce()
    return {countries}
}


/** Return repository of Country and load data if not there yet */
export function useCurrencies() {
    const { currencies } = useModels([Currency], {useDefaults: false})
    //query(currencies).allOnce()
    return {currencies}
}
