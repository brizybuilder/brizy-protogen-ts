import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message_DescriminatorType } from "./message_pb";
import type { Message } from "@bufbuild/protobuf";
export declare const file_cloud: GenFile;
export type CreateUserMessage = Message<"brizyMessage.cloud.CreateUserMessage"> & {
    descriminator: Message_DescriminatorType;
    userId: string;
};
export declare const CreateUserMessageSchema: GenMessage<CreateUserMessage>;
export type DeleteUserMessage = Message<"brizyMessage.cloud.DeleteUserMessage"> & {
    descriminator: Message_DescriminatorType;
    userId: string;
};
export declare const DeleteUserMessageSchema: GenMessage<DeleteUserMessage>;
export type UpdateUserMessage = Message<"brizyMessage.cloud.UpdateUserMessage"> & {
    descriminator: Message_DescriminatorType;
    userId: string;
    updatedProperties: string[];
};
export declare const UpdateUserMessageSchema: GenMessage<UpdateUserMessage>;
export type CreateProjectMessage = Message<"brizyMessage.cloud.CreateProjectMessage"> & {
    descriminator: Message_DescriminatorType;
    projectId: string;
};
export declare const CreateProjectMessageSchema: GenMessage<CreateProjectMessage>;
export type UpdateProjectMessage = Message<"brizyMessage.cloud.UpdateProjectMessage"> & {
    descriminator: Message_DescriminatorType;
    projectId: string;
    updatedProperties: string[];
};
export declare const UpdateProjectMessageSchema: GenMessage<UpdateProjectMessage>;
export type DeleteProjectMessage = Message<"brizyMessage.cloud.DeleteProjectMessage"> & {
    descriminator: Message_DescriminatorType;
    projectId: string;
    hardDelete: boolean;
};
export declare const DeleteProjectMessageSchema: GenMessage<DeleteProjectMessage>;
export type CloneProjectMessage = Message<"brizyMessage.cloud.CloneProjectMessage"> & {
    descriminator: Message_DescriminatorType;
    sourceProjectIri: string;
    targetProjectIri: string;
    brziyApiAccessToken: string;
};
export declare const CloneProjectMessageSchema: GenMessage<CloneProjectMessage>;
export type CloneCollectionItemMessage = Message<"brizyMessage.cloud.CloneCollectionItemMessage"> & {
    descriminator: Message_DescriminatorType;
    sourceProjectIri: string;
    targetProjectIri: string;
    sourceItemIri: string;
    targetItemIri: string;
    brziyApiAccessToken: string;
};
export declare const CloneCollectionItemMessageSchema: GenMessage<CloneCollectionItemMessage>;
export type CloneCustomerMessage = Message<"brizyMessage.cloud.CloneCustomerMessage"> & {
    descriminator: Message_DescriminatorType;
    sourceProjectIri: string;
    targetProjectIri: string;
    sourceCustomerIri: string;
    targetCustomerIri: string;
    brziyApiAccessToken: string;
};
export declare const CloneCustomerMessageSchema: GenMessage<CloneCustomerMessage>;
export type ClearPlatformCacheMessage = Message<"brizyMessage.cloud.ClearPlatformCacheMessage"> & {
    descriminator: Message_DescriminatorType;
};
export declare const ClearPlatformCacheMessageSchema: GenMessage<ClearPlatformCacheMessage>;
