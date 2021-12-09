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
        throw new Error("Method not implemented.");
    }
    
    onCreateCustomerSuccess(response: HttpResponse): ProviderCustomerIdentifier {
        throw new Error("Method not implemented.");
    }

}
