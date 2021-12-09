import { assertEquals } from "https://deno.land/std@0.117.0/testing/asserts.ts";
import { RequestConnector } from '../connectors/request-connector.ts';
import { Customer, HttpRequest, HttpRequestMethod } from '../types/pol-types.ts';
import { Address } from '../types/component-types.ts';
import { ConnectGlobal } from '../types/connect-global.ts';
import {
    assert,
    IsExact,
} from "https://deno.land/x/conditional_type_checks/mod.ts";

// Checks the properties of the returned object to see if it implements the HttpRequst interface
Deno.test({
  name: "onCreateCustomer - returns HttpRequest",
  fn: () => {
    const customer = mockCustomer();
    const connector = getRequestConnector();
    const result = connector.onCreateCustomer(customer);
    
    const implementsHttpRequest = isHttpRequest(result);

    assertEquals(implementsHttpRequest, true);
  },
});

const getRequestConnector = () => new RequestConnector(mockConnect());

function mockCustomer() {
    return <Customer>{
        firstName: "Jane",
        lastName: "Smith",
        merchant: {
            name: 'Acme',
            clientCode: 'acme'
        },
        id: "e4537b07-3a27-4f4e-9262-efac86c09301",
        created: new Date(),
        accountDetails: {
            accountName: 'Jane Smith',
            sortCode: '123456',
            accountNumber: '12345678'
        },
        address: <Address> {
            line1: '10 Oakwood Drive',
            city: 'Loughborough',
            postcode: 'LE11 3QF'
        },
        emailAddress: "jane.smith@email.com",
        customerRef: "ACME04350436",
        title: "Ms"
    };
}

function mockConnect() {
    return <ConnectGlobal>{
        PROVIDER: {
            BASE_URI: new URL('https://ecm3.eazycollect.co.uk/api/v3/')
        }
    }
}

function mockHttpRequest() : HttpRequest {
    const req: HttpRequest = {
        method: HttpRequestMethod.GET,
        uri: new URL('https://smartdebit.co.uk'),
        accept: "",
        data: {}
    }

    return req;
}

function isHttpRequest(obj: any) {

    if (obj === undefined || obj === null) {
        return false;
    }

    const comparisonObject = mockHttpRequest();

    const expectedKeys = Object.keys(comparisonObject);

    for (const key in expectedKeys) {
        if (!(expectedKeys[key] in obj)) {
            return false;
        } else if (typeof (comparisonObject as any)[expectedKeys[key]] !== typeof obj[expectedKeys[key]]) {
            return false;
        }
    }

    return true;
}