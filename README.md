# connect
Connect prototype for deno

## Notes

- Types would be imported from a URL
- CONNECT is gloabl object that providers some APIs to be used
- Need to think how to handle accept/content type. The simplest thing might be to present response data back as an object regardless of the content-type.
- Examples don't include authentication. I think this would be configured outside of the connector code.
- Provider => Processor ?
