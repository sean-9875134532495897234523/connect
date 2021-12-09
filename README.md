# connect
Connect prototype for deno

## Notes

- Types would be imported from a URL
- CONNECT is gloabl object that providers some APIs to be used
- Need to think how to handle accept/content type. The simplest thing might be to present response data back as an object regardless of the content-type.
- Examples don't include authentication. I think this would be configured outside of the connector code.
- Provider => Processor ?

## Integration Development Workflow

### Get the code templates

Download/clone the templates from ___. 

### Define any types you need inside provider-types.ts

The types represent extensions to POL objects that are unique to your provider.

### Add your integration logic inside the connector

The functions in the connector relate to specific events. For example, in the request integrator they relate to requests sent to the POL from merchants.

### Validate locally

(To Do - write some unit tests and other validation that can be run locally before uploading)

### Upload to platform

Via UI or API. This should trigger validation on our side that can include load testing and memory usage tests.

### Publish

Would make the changes 'live', should be possible to do per environment.

