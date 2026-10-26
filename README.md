# Brizy Protogen TypeScript

TypeScript protobuf generated types for the Brizy platform. This package provides strongly-typed interfaces for all Brizy protocol buffer messages.

## Installation

Currently, this package is not available on npm.
The repository used from [GitHub](https://github.com/brizybuilder/brizy-protogen-ts).

## Usage

### Basic Import

```typescript
import {
  CreateCollectionItemMessage,
  UpdateCollectionItemMessage,
  DeleteCollectionItemMessage,
  Message_DescriminatorType,
  create,
  fromBinary,
  toBinary
} from '@brizy/protogen-ts';
```

### Creating Messages

```typescript
import { create, CreateCollectionItemMessageSchema } from '@brizy/protogen-ts';

const message = create(CreateCollectionItemMessageSchema, {
  descriminator: Message_DescriminatorType.CREATE_COLLECTION_ITEM_MESSAGE,
  projectIri: "project-123",
  entityIri: "entity-456",
  brziyApiAccessToken: "your-token",
  userId: "user-789"
});
```

### Serializing Messages

```typescript
import { toBinary, fromBinary } from '@brizy/protogen-ts';

// Serialize to binary
const binaryData = toBinary(CreateCollectionItemMessageSchema, message);

// Deserialize from binary
const deserializedMessage = fromBinary(CreateCollectionItemMessageSchema, binaryData);
```

### Working with JSON

```typescript
import { toJson, fromJson } from '@brizy/protogen-ts';

// Convert to JSON
const jsonData = toJson(CreateCollectionItemMessageSchema, message);

// Parse from JSON
const messageFromJson = fromJson(CreateCollectionItemMessageSchema, jsonData);
```

## Available Message Types

This package includes the following protobuf message types:

### Core Messages
- `Message` - Base message type with discriminator
- `Message_DescriminatorType` - Enum for message type discrimination

### Collection Management
- `CreateCollectionItemMessage`
- `UpdateCollectionItemMessage`
- `DeleteCollectionItemMessage`
- `CreateCollectionTypeMessage`
- `UpdateCollectionTypeMessage`
- `DeleteCollectionTypeMessage`

### Customer Management
- `CreateCustomerMessage`
- `UpdateCustomerMessage`
- `DeleteCustomerMessage`

### Cloud Services
- Various cloud-specific message types for user and project management

### Additional Types
- Doctrine message types
- Notification message types
- Translation message types

## TypeScript Support

This package is built with TypeScript and provides full type definitions. All message types are strongly typed, providing excellent IDE support with autocomplete and type checking.

## Development

### Building

```bash
npm run build
```

This will:
1. **Clean** the dist directory
2. **Build** all formats:
   - CommonJS build in `dist/` (for Node.js)
   - ES modules build in `dist/` (for modern bundlers)
   - TypeScript declarations in `dist/`

### Scripts

- `npm run build` - Build all formats (CJS, ESM, types) with auto-generation
- `npm run clean` - Clean the dist directory
- `npm run build:cjs` - Build CommonJS format
- `npm run build:esm` - Build ES modules format
- `npm run build:types` - Generate TypeScript declarations

### Workflow

1. **Generate protobuf files** into `gen/` directory (using your protoc setup)
2. **Build** with `npm run build` (or the index will be auto-generated)
3. **Publish** with `npm publish`

## License

ISC

## Contributing

This package contains generated code from protocol buffer definitions. To update the generated types, regenerate the protobuf files and rebuild the package.
