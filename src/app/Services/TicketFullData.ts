import { Price, CartSaleble } from "./Cart";


export class TicketFullData implements CartSaleble {
    "id": number;
    "name": string;
    "description": string;
    "price": Price;
    "extraTimePrice": number;
    "extraTimeIntervalTimeInMinutes": number;
    "startDateTime": Date;
    "endDateTime": Date;
    "maxUsers": number;
    "startAge": number;
    "endAge": number;
    "isActive": boolean;
    "state": string;
    "email": string;
    "userCount": number;
    "externalId": string;
    "numberOfTickets": number;
    "ticketsCategories": [
        // {
        //     "categoryId": "0623326c-7b24-4802-92fb-573dcadae8cd",
        //     "position": 0,
        //     "isScheduleAllowed": false,
        //     "showAddons": false,
        //     "allowVoucherPurchase": false,
        //     "requirePersonalTicketDetails": false,
        //     "requireInvoiceDetails": false
        // }
    ];
    "ticketCategoryMembershipEligibilities": [];
    "ticketFields": [];
    "sites": [];
    // {
    //     "siteId": 1
    // }

    "giftCardValue": number;
    "position": number;
    "entrance": any;
    //{
    //     "type": "OneTime",
    //     "duration": 120,
    //     "startDate": "1969-12-24T21:00:00+00:00",
    //     "endDate": "1970-01-09T20:59:59.999+00:00",
    //     "membershipEntranceType": "Sites",
    //     "tickets": []
    // },
    "scheduleType": string;
    "waiver": string;
    "vatOverride": number;
    "bundleTickets": [];
    "events": [
        // {
        //     "id": 1,
        //     "created": "0001-01-01T00:00:00+00:00",
        //     "details": "adasdasfasdasfadasfadasfdf",
        //     "name": "test event 1",
        //     "imageUrl": null,
        //     "startTime": "2023-09-28T15:36:16.771+00:00",
        //     "endTime": "2023-09-28T15:36:16.771+00:00",
        //     "ticketsIds": [
        //         17
        //     ],
        //     "isActive": true,
        //     "alertTimeDays": 1,
        //     "isCancelled": false
        // }
    ];
    "numberOfVrns": number;
}

