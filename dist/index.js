"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyIs = exports.anyPack = exports.toJson = exports.fromJson = exports.toBinary = exports.fromBinary = exports.create = void 0;
exports.getMessage = getMessage;
__exportStar(require("./gen/brizy_pb"), exports);
__exportStar(require("./gen/cloud_pb"), exports);
__exportStar(require("./gen/doctrine_pb"), exports);
__exportStar(require("./gen/message_pb"), exports);
__exportStar(require("./gen/notification_pb"), exports);
__exportStar(require("./gen/translation_pb"), exports);
var protobuf_1 = require("@bufbuild/protobuf");
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return protobuf_1.create; } });
Object.defineProperty(exports, "fromBinary", { enumerable: true, get: function () { return protobuf_1.fromBinary; } });
Object.defineProperty(exports, "toBinary", { enumerable: true, get: function () { return protobuf_1.toBinary; } });
Object.defineProperty(exports, "fromJson", { enumerable: true, get: function () { return protobuf_1.fromJson; } });
Object.defineProperty(exports, "toJson", { enumerable: true, get: function () { return protobuf_1.toJson; } });
var wkt_1 = require("@bufbuild/protobuf/wkt");
Object.defineProperty(exports, "anyPack", { enumerable: true, get: function () { return wkt_1.anyPack; } });
Object.defineProperty(exports, "anyIs", { enumerable: true, get: function () { return wkt_1.anyIs; } });
const wire_1 = require("@bufbuild/protobuf/wire");
const protobuf_2 = require("@bufbuild/protobuf");
const message_pb_1 = require("./gen/message_pb");
const brizy_pb_1 = require("./gen/brizy_pb");
const cloud_pb_1 = require("./gen/cloud_pb");
const doctrine_pb_1 = require("./gen/doctrine_pb");
const notification_pb_1 = require("./gen/notification_pb");
const translation_pb_1 = require("./gen/translation_pb");
function getMessage(buffer) {
    try {
        const content = buffer.toString();
        const message = JSON.parse(content);
        if (!message.payload) {
            throw new Error("Invalid message payload");
        }
        const payload = (0, wire_1.base64Decode)(message.payload);
        const baseMessage = (0, protobuf_2.fromBinary)(message_pb_1.MessageSchema, payload);
        const discriminator = baseMessage.descriminator;
        switch (discriminator) {
            case message_pb_1.Message_DescriminatorType.NONE:
                return baseMessage;
            case message_pb_1.Message_DescriminatorType.CLOUD_CLONE_PROJECT_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.CloneProjectMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CLOUD_CREATE_PROJECT_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.CreateProjectMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CLOUD_CREATE_USER_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.CreateUserMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CLOUD_CLONE_COLLECTION_ITEM_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.CloneCollectionItemMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CREATE_COLLECTION_TYPE_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.CreateCollectionTypeMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.UPDATE_COLLECTION_TYPE_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.UpdateCollectionTypeMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.DELETE_COLLECTION_TYPE_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.DeleteCollectionTypeMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CREATE_COLLECTION_ITEM_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.CreateCollectionItemMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.UPDATE_COLLECTION_ITEM_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.UpdateCollectionItemMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.DELETE_COLLECTION_ITEM_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.DeleteCollectionItemMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CLOUD_DELETE_PROJECT_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.DeleteProjectMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CLOUD_DELETE_USER_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.DeleteUserMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.DOCTRINE_MESSAGE:
                return (0, protobuf_2.fromBinary)(doctrine_pb_1.DoctrineEventMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.NOTIFICATION_MESSAGE:
                return (0, protobuf_2.fromBinary)(notification_pb_1.NotificationMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.REMOVE_ENTITY_TRANSLATION_MESSAGE:
                return (0, protobuf_2.fromBinary)(translation_pb_1.RemoveEntityTranslationMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.TRANSLATE_ENTITY_MESSAGE:
                return (0, protobuf_2.fromBinary)(translation_pb_1.TranslateEntityMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CREATE_CUSTOMER_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.CreateCustomerMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.UPDATE_CUSTOMER_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.UpdateCustomerMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.DELETE_CUSTOMER_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.DeleteCustomerMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CLOUD_CLONE_CUSTOMER_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.CloneCustomerMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CLOUD_CLEAR_PLATFORM_CACHE_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.ClearPlatformCacheMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CREATE_SYMBOL_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.CreateSymbolMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.UPDATE_SYMBOL_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.UpdateSymbolMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.DELETE_SYMBOL_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.DeleteSymbolMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.PUBLISH_SCHEDULED_COLLECTION_ITEM_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.PublishedScheduledCollectionItemMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CREATE_GLOBAL_BLOCK_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.CreateGlobalBlockMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.UPDATE_GLOBAL_BLOCK_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.UpdateGlobalBlockMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.DELETE_GLOBAL_BLOCK_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.DeleteGlobalBlockMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CLOUD_UPDATE_USER_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.UpdateUserMessageSchema, payload);
            case message_pb_1.Message_DescriminatorType.CLOUD_UPDATE_PROJECT_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.UpdateProjectMessageSchema, payload);
            default:
                discriminator;
                return baseMessage;
        }
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
