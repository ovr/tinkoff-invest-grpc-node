// GENERATED CODE -- DO NOT EDIT!

// package: tinkoff.public.invest.api.contract.v1
// file: users.proto

import * as users_pb from "./users_pb";
import * as grpc from "@grpc/grpc-js";

interface IUsersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getAccounts: grpc.MethodDefinition<users_pb.GetAccountsRequest, users_pb.GetAccountsResponse>;
  getMarginAttributes: grpc.MethodDefinition<users_pb.GetMarginAttributesRequest, users_pb.GetMarginAttributesResponse>;
  getUserTariff: grpc.MethodDefinition<users_pb.GetUserTariffRequest, users_pb.GetUserTariffResponse>;
  getInfo: grpc.MethodDefinition<users_pb.GetInfoRequest, users_pb.GetInfoResponse>;
}

export const UsersServiceService: IUsersServiceService;

export interface IUsersServiceServer extends grpc.UntypedServiceImplementation {
  getAccounts: grpc.handleUnaryCall<users_pb.GetAccountsRequest, users_pb.GetAccountsResponse>;
  getMarginAttributes: grpc.handleUnaryCall<users_pb.GetMarginAttributesRequest, users_pb.GetMarginAttributesResponse>;
  getUserTariff: grpc.handleUnaryCall<users_pb.GetUserTariffRequest, users_pb.GetUserTariffResponse>;
  getInfo: grpc.handleUnaryCall<users_pb.GetInfoRequest, users_pb.GetInfoResponse>;
}

export class UsersServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getAccounts(argument: users_pb.GetAccountsRequest, callback: grpc.requestCallback<users_pb.GetAccountsResponse>): grpc.ClientUnaryCall;
  getAccounts(argument: users_pb.GetAccountsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<users_pb.GetAccountsResponse>): grpc.ClientUnaryCall;
  getAccounts(argument: users_pb.GetAccountsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<users_pb.GetAccountsResponse>): grpc.ClientUnaryCall;
  getMarginAttributes(argument: users_pb.GetMarginAttributesRequest, callback: grpc.requestCallback<users_pb.GetMarginAttributesResponse>): grpc.ClientUnaryCall;
  getMarginAttributes(argument: users_pb.GetMarginAttributesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<users_pb.GetMarginAttributesResponse>): grpc.ClientUnaryCall;
  getMarginAttributes(argument: users_pb.GetMarginAttributesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<users_pb.GetMarginAttributesResponse>): grpc.ClientUnaryCall;
  getUserTariff(argument: users_pb.GetUserTariffRequest, callback: grpc.requestCallback<users_pb.GetUserTariffResponse>): grpc.ClientUnaryCall;
  getUserTariff(argument: users_pb.GetUserTariffRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<users_pb.GetUserTariffResponse>): grpc.ClientUnaryCall;
  getUserTariff(argument: users_pb.GetUserTariffRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<users_pb.GetUserTariffResponse>): grpc.ClientUnaryCall;
  getInfo(argument: users_pb.GetInfoRequest, callback: grpc.requestCallback<users_pb.GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: users_pb.GetInfoRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<users_pb.GetInfoResponse>): grpc.ClientUnaryCall;
  getInfo(argument: users_pb.GetInfoRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<users_pb.GetInfoResponse>): grpc.ClientUnaryCall;
}
