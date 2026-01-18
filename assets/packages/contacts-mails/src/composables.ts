import {useModels, useI18n, type LocaleLoaders} from '@oxylus/ox'
import * as models from './models'
import type {IUseModelOpts} from '@oxylus/ox'
import type {Repos} from '@oxylus/ox/models'

import {Contact, ContactList, Organisation, Person} from '@oxylus/contacts/models'
import {MailAccount} from '@oxylus/mails/models'
import {mailsLocales} from '@oxylus/mails/composables'


/** The ox contactsMails locales loader **/
export const contactsMailsLocales: LocaleLoaders = {
    ...mailsLocales,
    ox_contactsMails: import.meta.glob('./locale/*.json', { import: 'default'})
}

import.meta.glob('./locale/*')

/** Use ox contactsMails locales **/
export function useContactsMailsI18n(locales?: LocaleLoaders = {}) {
    return useI18n({...contactsMailsLocales, ...locales})
}

/** Use Contact Mail and related models */
export function useContactMailModels() : Repos {
    return useModels([
        Contact, ContactList, Organisation, Person,
        models.ContactMail,
    ])
}
