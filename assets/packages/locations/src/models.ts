import { models, t, getCountryFlag } from "@oxylus/ox"


export class Currency extends models.Model {
    static entity = "currencies"
    static meta = new models.Meta({
        app: "ox_locations",
        model: "currency",
        url: "ox/locations/currency/",
        title: "name"
    })

    static fields() {
        return {
            id: this.attr(null),
            name: this.string(""),
            code: this.string(""),
            numeric: this.string(""),
            decimals: this.number(2),
            is_iso: this.boolean(false),
            valid_to: this.string(null)
        }
    }
}


export class Country extends models.Model {
    static entity = "countries"
    static meta = new models.Meta({
        app: "ox_locations",
        model: "country",
        url: "ox/locations/country/",
        title: "name"
    })

    static _continentItems : Record<string, string>

    static fields() {
        return {
            id: this.attr(null),
            name: this.string(""),
            code: this.string(""),
            code_3: this.string(""),
            continent: this.number(1),
            currency_code: this.string(""),
            currency: this.string(""),

            iban_sample: this.string(""),
            iban_length: this.number(34),

            $currency: this.belongsTo(Currency, 'currency')
        }
    }

    static Continent = models.Enum('continent', {
        AFRICA: 1,
        ANTARCTICA: 2,
        ASIA: 3,
        EUROPE: 4,
        NORTH_AMERICA: 5,
        OCEANIA: 6,
        SOUTH_AMERICA: 7,
    })

    get flag() {
        return getCountryFlag(this.code)
    }
}
