import { Address, AccountDetails } from './component-types.ts';

export interface AdditionalCustomerFields {
    accountDetails: AccountDetails;
    address: Address;
    emailAddress: string;
    customerRef: string; 
    title: string;
}

export interface ProviderCustomerIdentifier {
    id: string;
    customerRef: string; 
}

export interface Merchant {
    name: string;
    clientCode: string;
}
