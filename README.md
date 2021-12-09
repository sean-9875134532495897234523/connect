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

### Upload to platform

### Publish
