import { models, t } from "@oxylus/ox"
import { BaseMail } from "@oxylus/mails/models"
import { Contact, ContactList } from '@oxylus/contacts/models'


/** Contact Mail */
export class ContactMail extends BaseMail {
    static entity = "contactMails"
    static meta = new models.Meta({
        app: 'ox_contacts_mails',
        model: 'contactmail',
        url: 'ox/contacts-mails/contactmail/',
        title: 'subject'
    })

    static fields() {
        return {
            ...super.fields(),
            recipients: this.attr([]),
            recipient_lists: this.attr([]),

            $recipients: this.belongsTo(Contact, 'recipients'),
            $recipient_lists: this.belongsTo(ContactList, 'recipient_lists')
        }
    }
}
