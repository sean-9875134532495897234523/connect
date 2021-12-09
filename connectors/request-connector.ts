import {
    HttpRequest,
    HttpRequestMethod,
    HttpResponse,
    Customer,
    BaseConnector,
    IRequestConnector,
    ProviderCustomerIdentifier
} from "../types/pol-types.ts";
  
export class RequestConnector extends BaseConnector implements IRequestConnector {

    onCreateCustomer(customer: Customer): HttpRequest {

        const data: Record<string, unknown> = {
            "Email": customer.emailAddress,
            "Title": customer.title,
            "CustomerRef": customer.customerRef,
            "FirstName": customer.firstName,
            "Surname": customer.lastName,
            "Line1": customer.address.line1,
            "Line2": customer.address.line2,
            "PostCode": customer.address.postcode,
            "AccountNumber": customer.accountDetails.accountNumber,
            "BankSortCode": customer.accountDetails.sortCode,
            "AccountHolderName": customer.accountDetails.accountName
        };

        const req: HttpRequest = {
            method: HttpRequestMethod.POST,
            uri: new URL(this._connect.PROVIDER.BASE_URI +
                `/client/${customer.merchant.clientCode}/customer`),
            accept: "application/json",
            data: data
        };

        return req;
    }

    onCreateCustomerSuccess(response: HttpResponse) : ProviderCustomerIdentifier {

        const identifiers : ProviderCustomerIdentifier = {
            id: typeof response.data.Id === 'string' ?
                response.data.Id : null as unknown as string,
            customerRef: typeof response.data.CustomerRef === 'string' ?
                response.data.CustomerRef : null as unknown as string,
        };
        
        return identifiers;
    }

}
