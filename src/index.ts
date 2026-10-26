// Brizy Protogen TypeScript Package
// Generated protobuf types for Brizy platform
// Maintained by hand: every Message_DescriminatorType needs a case in getMessage (the build fails otherwise).

// Brizy message types
export * from "../gen/brizy_pb";

// Cloud message types
export * from "../gen/cloud_pb";

// Doctrine message types
export * from "../gen/doctrine_pb";

// Message message types
export * from "../gen/message_pb";

// Notification message types
export * from "../gen/notification_pb";

// Translation message types
export * from "../gen/translation_pb";

export {
  create,
  fromBinary,
  toBinary,
  fromJson,
  toJson,
} from "@bufbuild/protobuf";
export { type Any, anyPack, anyIs } from "@bufbuild/protobuf/wkt";

import { base64Decode } from "@bufbuild/protobuf/wire";
import { fromBinary } from "@bufbuild/protobuf";

// Import all message types and schemas for getMessage function
import {
  MessageSchema,
  Message_DescriminatorType,
  type Message as BaseMessage,
} from "../gen/message_pb";

import {
  CreateCollectionItemMessageSchema,
  CreateCollectionTypeMessageSchema,
  CreateCustomerMessageSchema,
  DeleteCollectionItemMessageSchema,
  DeleteCollectionTypeMessageSchema,
  DeleteCustomerMessageSchema,
  UpdateCollectionItemMessageSchema,
  UpdateCollectionTypeMessageSchema,
  UpdateCustomerMessageSchema,
  CreateSymbolMessageSchema,
  UpdateSymbolMessageSchema,
  DeleteSymbolMessageSchema,
  PublishedScheduledCollectionItemMessageSchema,
  CreateGlobalBlockMessageSchema,
  UpdateGlobalBlockMessageSchema,
  DeleteGlobalBlockMessageSchema,
  type CreateCollectionItemMessage,
  type CreateCollectionTypeMessage,
  type CreateCustomerMessage,
  type DeleteCollectionItemMessage,
  type DeleteCollectionTypeMessage,
  type DeleteCustomerMessage,
  type UpdateCollectionItemMessage,
  type UpdateCollectionTypeMessage,
  type UpdateCustomerMessage,
  type CreateSymbolMessage,
  type UpdateSymbolMessage,
  type DeleteSymbolMessage,
  type PublishedScheduledCollectionItemMessage,
  type CreateGlobalBlockMessage,
  type UpdateGlobalBlockMessage,
  type DeleteGlobalBlockMessage,
} from "../gen/brizy_pb";

import {
  ClearPlatformCacheMessageSchema,
  CloneCollectionItemMessageSchema,
  CloneCustomerMessageSchema,
  CloneProjectMessageSchema,
  CreateProjectMessageSchema,
  CreateUserMessageSchema,
  DeleteProjectMessageSchema,
  DeleteUserMessageSchema,
  UpdateProjectMessageSchema,
  UpdateUserMessageSchema,
  type ClearPlatformCacheMessage,
  type CloneCollectionItemMessage,
  type CloneCustomerMessage,
  type CloneProjectMessage,
  type CreateProjectMessage,
  type CreateUserMessage,
  type DeleteProjectMessage,
  type DeleteUserMessage,
  type UpdateProjectMessage,
  type UpdateUserMessage,
} from "../gen/cloud_pb";

import {
  DoctrineEventMessageSchema,
  type DoctrineEventMessage,
} from "../gen/doctrine_pb";

import {
  NotificationMessageSchema,
  type NotificationMessage,
} from "../gen/notification_pb";

import {
  RemoveEntityTranslationMessageSchema,
  TranslateEntityMessageSchema,
  type RemoveEntityTranslationMessage,
  type TranslateEntityMessage,
} from "../gen/translation_pb";

// Union type of all possible message types
export type AllMessageTypes =
  | BaseMessage
  | CreateCollectionItemMessage
  | CreateCollectionTypeMessage
  | CreateCustomerMessage
  | DeleteCollectionItemMessage
  | DeleteCollectionTypeMessage
  | DeleteCustomerMessage
  | UpdateCollectionItemMessage
  | UpdateCollectionTypeMessage
  | UpdateCustomerMessage
  | CreateSymbolMessage
  | UpdateSymbolMessage
  | DeleteSymbolMessage
  | PublishedScheduledCollectionItemMessage
  | CreateGlobalBlockMessage
  | UpdateGlobalBlockMessage
  | DeleteGlobalBlockMessage
  | ClearPlatformCacheMessage
  | CloneCollectionItemMessage
  | CloneCustomerMessage
  | CloneProjectMessage
  | CreateProjectMessage
  | CreateUserMessage
  | DeleteProjectMessage
  | DeleteUserMessage
  | UpdateProjectMessage
  | UpdateUserMessage
  | DoctrineEventMessage
  | NotificationMessage
  | RemoveEntityTranslationMessage
  | TranslateEntityMessage;

export function getMessage(
  buffer: Uint8Array | ArrayLike<number>,
): AllMessageTypes | undefined {
  try {
    const content = buffer.toString();
    const message = JSON.parse(content);

    if (!message.payload) {
      throw new Error("Invalid message payload");
    }

    const payload = base64Decode(message.payload);
    // First, decode as base Message to get the discriminator
    const baseMessage = fromBinary(MessageSchema, payload);
    const discriminator = baseMessage.descriminator;

    // Decode the specific message type based on discriminator
    switch (discriminator) {
      case Message_DescriminatorType.NONE:
        return baseMessage;

      case Message_DescriminatorType.CLOUD_CLONE_PROJECT_MESSAGE:
        return fromBinary(CloneProjectMessageSchema, payload);

      case Message_DescriminatorType.CLOUD_CREATE_PROJECT_MESSAGE:
        return fromBinary(CreateProjectMessageSchema, payload);

      case Message_DescriminatorType.CLOUD_CREATE_USER_MESSAGE:
        return fromBinary(CreateUserMessageSchema, payload);

      case Message_DescriminatorType.CLOUD_CLONE_COLLECTION_ITEM_MESSAGE:
        return fromBinary(CloneCollectionItemMessageSchema, payload);

      case Message_DescriminatorType.CREATE_COLLECTION_TYPE_MESSAGE:
        return fromBinary(CreateCollectionTypeMessageSchema, payload);

      case Message_DescriminatorType.UPDATE_COLLECTION_TYPE_MESSAGE:
        return fromBinary(UpdateCollectionTypeMessageSchema, payload);

      case Message_DescriminatorType.DELETE_COLLECTION_TYPE_MESSAGE:
        return fromBinary(DeleteCollectionTypeMessageSchema, payload);

      case Message_DescriminatorType.CREATE_COLLECTION_ITEM_MESSAGE:
        return fromBinary(CreateCollectionItemMessageSchema, payload);

      case Message_DescriminatorType.UPDATE_COLLECTION_ITEM_MESSAGE:
        return fromBinary(UpdateCollectionItemMessageSchema, payload);

      case Message_DescriminatorType.DELETE_COLLECTION_ITEM_MESSAGE:
        return fromBinary(DeleteCollectionItemMessageSchema, payload);

      case Message_DescriminatorType.CLOUD_DELETE_PROJECT_MESSAGE:
        return fromBinary(DeleteProjectMessageSchema, payload);

      case Message_DescriminatorType.CLOUD_DELETE_USER_MESSAGE:
        return fromBinary(DeleteUserMessageSchema, payload);

      case Message_DescriminatorType.DOCTRINE_MESSAGE:
        return fromBinary(DoctrineEventMessageSchema, payload);

      case Message_DescriminatorType.NOTIFICATION_MESSAGE:
        return fromBinary(NotificationMessageSchema, payload);

      case Message_DescriminatorType.REMOVE_ENTITY_TRANSLATION_MESSAGE:
        return fromBinary(RemoveEntityTranslationMessageSchema, payload);

      case Message_DescriminatorType.TRANSLATE_ENTITY_MESSAGE:
        return fromBinary(TranslateEntityMessageSchema, payload);

      case Message_DescriminatorType.CREATE_CUSTOMER_MESSAGE:
        return fromBinary(CreateCustomerMessageSchema, payload);

      case Message_DescriminatorType.UPDATE_CUSTOMER_MESSAGE:
        return fromBinary(UpdateCustomerMessageSchema, payload);

      case Message_DescriminatorType.DELETE_CUSTOMER_MESSAGE:
        return fromBinary(DeleteCustomerMessageSchema, payload);

      case Message_DescriminatorType.CLOUD_CLONE_CUSTOMER_MESSAGE:
        return fromBinary(CloneCustomerMessageSchema, payload);

      case Message_DescriminatorType.CLOUD_CLEAR_PLATFORM_CACHE_MESSAGE:
        return fromBinary(ClearPlatformCacheMessageSchema, payload);

      case Message_DescriminatorType.CREATE_SYMBOL_MESSAGE:
        return fromBinary(CreateSymbolMessageSchema, payload);

      case Message_DescriminatorType.UPDATE_SYMBOL_MESSAGE:
        return fromBinary(UpdateSymbolMessageSchema, payload);

      case Message_DescriminatorType.DELETE_SYMBOL_MESSAGE:
        return fromBinary(DeleteSymbolMessageSchema, payload);

      case Message_DescriminatorType.PUBLISH_SCHEDULED_COLLECTION_ITEM_MESSAGE:
        return fromBinary(PublishedScheduledCollectionItemMessageSchema, payload);

      case Message_DescriminatorType.CREATE_GLOBAL_BLOCK_MESSAGE:
        return fromBinary(CreateGlobalBlockMessageSchema, payload);

      case Message_DescriminatorType.UPDATE_GLOBAL_BLOCK_MESSAGE:
        return fromBinary(UpdateGlobalBlockMessageSchema, payload);

      case Message_DescriminatorType.DELETE_GLOBAL_BLOCK_MESSAGE:
        return fromBinary(DeleteGlobalBlockMessageSchema, payload);

      case Message_DescriminatorType.CLOUD_UPDATE_USER_MESSAGE:
        return fromBinary(UpdateUserMessageSchema, payload);

      case Message_DescriminatorType.CLOUD_UPDATE_PROJECT_MESSAGE:
        return fromBinary(UpdateProjectMessageSchema, payload);

      default:
        // Compile-time: a discriminator added to the IDL without a case above fails the build.
        discriminator satisfies never;
        // Runtime: a value newer than this package still decodes as the base message.
        return baseMessage;
    }
  } catch (error) {
    console.error(error);
    // If any error occurs during decoding, return undefined
    return undefined;
  }
}
