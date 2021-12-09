import { AdditionalCustomerFields, ProviderCustomerIdentifier, Merchant } from './provider-types.ts';
import { ConnectGlobal } from './connect-global.ts';
export type { ProviderCustomerIdentifier } from './provider-types.ts';

interface Entity {
    id: string;
    created: Date;
}

export interface Customer extends Entity, AdditionalCustomerFields {
    firstName: string;
    lastName: string;
    merchant: Merchant;
}

export enum HttpRequestMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
    TRACE = 'TRACE'
}

export interface HttpRequest {
    method: HttpRequestMethod,
    uri: URL,
    accept: string,
    data: Record<string, unknown>
}

export interface HttpResponse {
    statusCode: string,
    data: Record<string, unknown>
}

export class BaseConnector {
    _connect: ConnectGlobal;
    constructor(connect: ConnectGlobal){
        this._connect = connect;
    }
}

export interface IRequestConnector {
    onCreateCustomer(customer: Customer): HttpRequest;
    onCreateCustomerSuccess(response: HttpResponse) : ProviderCustomerIdentifier;
}