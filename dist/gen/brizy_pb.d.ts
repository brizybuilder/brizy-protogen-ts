import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message_DescriminatorType } from "./message_pb";
import type { Message } from "@bufbuild/protobuf";
export declare const file_brizy: GenFile;
export type CreateCollectionItemMessage = Message<"brizyMessage.brizy.CreateCollectionItemMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
};
export declare const CreateCollectionItemMessageSchema: GenMessage<CreateCollectionItemMessage>;
export type UpdateCollectionItemMessage = Message<"brizyMessage.brizy.UpdateCollectionItemMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
    updatedProperties: string[];
};
export declare const UpdateCollectionItemMessageSchema: GenMessage<UpdateCollectionItemMessage>;
export type PublishedScheduledCollectionItemMessage = Message<"brizyMessage.brizy.PublishedScheduledCollectionItemMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    publishDateTimestamp: bigint;
};
export declare const PublishedScheduledCollectionItemMessageSchema: GenMessage<PublishedScheduledCollectionItemMessage>;
export type DeleteCollectionItemMessage = Message<"brizyMessage.brizy.DeleteCollectionItemMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
};
export declare const DeleteCollectionItemMessageSchema: GenMessage<DeleteCollectionItemMessage>;
export type CreateCollectionTypeMessage = Message<"brizyMessage.brizy.CreateCollectionTypeMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
};
export declare const CreateCollectionTypeMessageSchema: GenMessage<CreateCollectionTypeMessage>;
export type UpdateCollectionTypeMessage = Message<"brizyMessage.brizy.UpdateCollectionTypeMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
    updatedProperties: string[];
};
export declare const UpdateCollectionTypeMessageSchema: GenMessage<UpdateCollectionTypeMessage>;
export type DeleteCollectionTypeMessage = Message<"brizyMessage.brizy.DeleteCollectionTypeMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
};
export declare const DeleteCollectionTypeMessageSchema: GenMessage<DeleteCollectionTypeMessage>;
export type CreateCustomerMessage = Message<"brizyMessage.brizy.CreateCustomerMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
};
export declare const CreateCustomerMessageSchema: GenMessage<CreateCustomerMessage>;
export type UpdateCustomerMessage = Message<"brizyMessage.brizy.UpdateCustomerMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
    updatedProperties: string[];
};
export declare const UpdateCustomerMessageSchema: GenMessage<UpdateCustomerMessage>;
export type DeleteCustomerMessage = Message<"brizyMessage.brizy.DeleteCustomerMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
};
export declare const DeleteCustomerMessageSchema: GenMessage<DeleteCustomerMessage>;
export type CreateSymbolMessage = Message<"brizyMessage.brizy.CreateSymbolMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
};
export declare const CreateSymbolMessageSchema: GenMessage<CreateSymbolMessage>;
export type UpdateSymbolMessage = Message<"brizyMessage.brizy.UpdateSymbolMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
    updatedProperties: string[];
};
export declare const UpdateSymbolMessageSchema: GenMessage<UpdateSymbolMessage>;
export type DeleteSymbolMessage = Message<"brizyMessage.brizy.DeleteSymbolMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
};
export declare const DeleteSymbolMessageSchema: GenMessage<DeleteSymbolMessage>;
export type CreateGlobalBlockMessage = Message<"brizyMessage.brizy.CreateGlobalBlockMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
};
export declare const CreateGlobalBlockMessageSchema: GenMessage<CreateGlobalBlockMessage>;
export type UpdateGlobalBlockMessage = Message<"brizyMessage.brizy.UpdateGlobalBlockMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
    updatedProperties: string[];
};
export declare const UpdateGlobalBlockMessageSchema: GenMessage<UpdateGlobalBlockMessage>;
export type DeleteGlobalBlockMessage = Message<"brizyMessage.brizy.DeleteGlobalBlockMessage"> & {
    descriminator: Message_DescriminatorType;
    projectIri: string;
    entityIri: string;
    brziyApiAccessToken: string;
    userId: string;
    cloudAccessToken: string;
};
export declare const DeleteGlobalBlockMessageSchema: GenMessage<DeleteGlobalBlockMessage>;
