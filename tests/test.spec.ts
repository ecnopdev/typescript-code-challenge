import { RawEntry, Customer, TransformedOrder, TransformedData } from '../src/definitions'
import { getRevenue } from '../src/transform'
import transformData from '../src/transform'

describe('Calculate Revenue', () => {
    it('shoud return the correct product', () => {
        expect(getRevenue(5, 5)).toEqual(25);
    });
})

describe('Transform Data', () => {
    it('should return the correct format', () => {

        const rawInput: RawEntry = {
            "id": 1,
            "vendor": "acme",
            "date": "03/03/2017",
            "customer": {
                "id": "8baa6dea-cc70-4748-9b27-b174e70e4b66",
                "name": "Lezlie Stuther",
                "address": "19045 Lawn Court"
            },
            "order": {
                "hat": {
                    "quantity": 14,
                    "price": 8
                }
            }
        };

        const output: TransformedData = {
            customers: [{
                "id": "8baa6dea-cc70-4748-9b27-b174e70e4b66",
                "name": "Lezlie Stuther",
                "address": "19045 Lawn Court"
            }],
            orders: [{
                id: 1,
                date: "03/03/2017",
                vendor: "acme",
                customer: "8baa6dea-cc70-4748-9b27-b174e70e4b66",
                order: [{
                    item: "hat",
                    quantity: 14,
                    price: 8,
                    revenue: 112
                }]
            }],
        };

        expect(transformData([rawInput])).toEqual(output);
    })

})