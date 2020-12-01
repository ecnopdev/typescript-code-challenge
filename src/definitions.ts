interface RawEntry {
    "id": number,
    "vendor": string,
    "date": string,
    "customer": {
        "id": string,
        "name": string,
        "address": string
    },
    "order": {
        [key: string]: {
            "quantity": number,
            "price": number
        }
    }
}

interface Customer {
    "id": string,
    "name": string,
    "address": string
};

interface OrderInfo {
    "quantity": number,
    "price": number
}

interface TransformedOrderInfo {
    "item": string,
    "quantity": number,
    "price": number,
    "revenue": number
}

interface TransformedOrder {
    "id": number,
    "vendor": string,
    "date": string,
    "customer": string,
    "order": Array<TransformedOrderInfo>
}


interface TransformedData {
    "customers": Array<Customer>,
    "orders": Array<TransformedOrder>
}

export {
    RawEntry,
    Customer,
    OrderInfo,
    TransformedOrderInfo,
    TransformedOrder,
    TransformedData
}