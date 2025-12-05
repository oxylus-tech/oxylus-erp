import {useModels} from '@oxylus/ox'
import * as models from './models'
import type {IUseModelOpts} from '@oxylus/ox'
import type {Repos} from '@oxylus/ox/models'

import {Contact, ContactList, Organisation, Person} from '@oxylus/contacts/models'
import {MailAccount} from '@oxylus/mails/models'


/** Use Contact Mail and related models */
export function useContactMailModels() : Repos {
    return useModels([
        Contact, ContactList, Organisation, Person,
        models.ContactMail,
    ])
}
