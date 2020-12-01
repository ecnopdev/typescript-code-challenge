import { Customer, OrderInfo, RawEntry, TransformedOrderInfo, TransformedOrder, TransformedData } from './definitions'

const getRevenue = (price: number, quantity: number): number => {
    return price * quantity;
}

export { getRevenue };

export default (rawData: Array<RawEntry>): TransformedData => {

    const transformedData: TransformedData = {
        "customers": [],
        "orders": [],
    };

    rawData.forEach((item: RawEntry, index) => {
        const customer: Customer = item.customer;
        let orderList: Array<TransformedOrderInfo> = [];

        for (const itemName in item.order) {
            const orderDetails: OrderInfo = item.order[itemName];

            const price = orderDetails.price;
            const quantity = orderDetails.quantity;
            const revenue = getRevenue(price, quantity);

            const orderInfo: TransformedOrderInfo = {
                item: itemName,
                quantity: orderDetails.quantity,
                price: orderDetails.price,
                revenue: revenue
            };

            orderList.push(orderInfo);
        }

        const order: TransformedOrder = {
            "id": item.id,
            "vendor": item.vendor,
            "date": item.date,
            "customer": customer.id,
            "order": orderList
        };

        transformedData.customers.push(customer);
        transformedData.orders.push(order);
    })

    return transformedData;
}