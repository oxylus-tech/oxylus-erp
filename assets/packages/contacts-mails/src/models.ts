import { models, t } from "@oxylus/ox"
import { BaseMail } from "@oxylus/mails/models"
import { Contact, ContactList, Subscription as $Subscription} from '@oxylus/contacts/models'


/** Contact Mail */
export class ContactMail extends BaseMail {
    static entity = "contactMails"
    static meta = new models.Meta({
        app: 'ox_contacts_mails',
        model: 'contactmail',
        url: 'ox/contacts-mails/mail/',
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


/** Subscription as provided to contact */
export class ContactSubscriptions extends models.Model {
    static entity = "contactSubscriptions"
    static meta = new models.Meta({
        app: 'ox_contacts_mails',
        model: 'subscription',
        url: 'ox/contacts-mails/subscriptions/',
        title: 'name'
        // TODO: permission by pass
    })

    static fields() {
        return {
            id: this.attr(null),
            name: this.string(""),
            email: this.string(""),
            // TODO: Subscription model
            subscriptions: this.attr([]),
        }
    }
}
