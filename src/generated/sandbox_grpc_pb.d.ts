// GENERATED CODE -- DO NOT EDIT!

// package: tinkoff.public.invest.api.contract.v1
// file: sandbox.proto

import * as sandbox_pb from "./sandbox_pb";
import * as orders_pb from "./orders_pb";
import * as operations_pb from "./operations_pb";
import * as users_pb from "./users_pb";
import * as grpc from "@grpc/grpc-js";

interface ISandboxServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  openSandboxAccount: grpc.MethodDefinition<sandbox_pb.OpenSandboxAccountRequest, sandbox_pb.OpenSandboxAccountResponse>;
  getSandboxAccounts: grpc.MethodDefinition<users_pb.GetAccountsRequest, users_pb.GetAccountsResponse>;
  closeSandboxAccount: grpc.MethodDefinition<sandbox_pb.CloseSandboxAccountRequest, sandbox_pb.CloseSandboxAccountResponse>;
  postSandboxOrder: grpc.MethodDefinition<orders_pb.PostOrderRequest, orders_pb.PostOrderResponse>;
  getSandboxOrders: grpc.MethodDefinition<orders_pb.GetOrdersRequest, orders_pb.GetOrdersResponse>;
  cancelSandboxOrder: grpc.MethodDefinition<orders_pb.CancelOrderRequest, orders_pb.CancelOrderResponse>;
  getSandboxOrderState: grpc.MethodDefinition<orders_pb.GetOrderStateRequest, orders_pb.OrderState>;
  getSandboxPositions: grpc.MethodDefinition<operations_pb.PositionsRequest, operations_pb.PositionsResponse>;
  getSandboxOperations: grpc.MethodDefinition<operations_pb.OperationsRequest, operations_pb.OperationsResponse>;
  getSandboxPortfolio: grpc.MethodDefinition<operations_pb.PortfolioRequest, operations_pb.PortfolioResponse>;
  sandboxPayIn: grpc.MethodDefinition<sandbox_pb.SandboxPayInRequest, sandbox_pb.SandboxPayInResponse>;
}

export const SandboxServiceService: ISandboxServiceService;

export interface ISandboxServiceServer extends grpc.UntypedServiceImplementation {
  openSandboxAccount: grpc.handleUnaryCall<sandbox_pb.OpenSandboxAccountRequest, sandbox_pb.OpenSandboxAccountResponse>;
  getSandboxAccounts: grpc.handleUnaryCall<users_pb.GetAccountsRequest, users_pb.GetAccountsResponse>;
  closeSandboxAccount: grpc.handleUnaryCall<sandbox_pb.CloseSandboxAccountRequest, sandbox_pb.CloseSandboxAccountResponse>;
  postSandboxOrder: grpc.handleUnaryCall<orders_pb.PostOrderRequest, orders_pb.PostOrderResponse>;
  getSandboxOrders: grpc.handleUnaryCall<orders_pb.GetOrdersRequest, orders_pb.GetOrdersResponse>;
  cancelSandboxOrder: grpc.handleUnaryCall<orders_pb.CancelOrderRequest, orders_pb.CancelOrderResponse>;
  getSandboxOrderState: grpc.handleUnaryCall<orders_pb.GetOrderStateRequest, orders_pb.OrderState>;
  getSandboxPositions: grpc.handleUnaryCall<operations_pb.PositionsRequest, operations_pb.PositionsResponse>;
  getSandboxOperations: grpc.handleUnaryCall<operations_pb.OperationsRequest, operations_pb.OperationsResponse>;
  getSandboxPortfolio: grpc.handleUnaryCall<operations_pb.PortfolioRequest, operations_pb.PortfolioResponse>;
  sandboxPayIn: grpc.handleUnaryCall<sandbox_pb.SandboxPayInRequest, sandbox_pb.SandboxPayInResponse>;
}

export class SandboxServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  openSandboxAccount(argument: sandbox_pb.OpenSandboxAccountRequest, callback: grpc.requestCallback<sandbox_pb.OpenSandboxAccountResponse>): grpc.ClientUnaryCall;
  openSandboxAccount(argument: sandbox_pb.OpenSandboxAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<sandbox_pb.OpenSandboxAccountResponse>): grpc.ClientUnaryCall;
  openSandboxAccount(argument: sandbox_pb.OpenSandboxAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<sandbox_pb.OpenSandboxAccountResponse>): grpc.ClientUnaryCall;
  getSandboxAccounts(argument: users_pb.GetAccountsRequest, callback: grpc.requestCallback<users_pb.GetAccountsResponse>): grpc.ClientUnaryCall;
  getSandboxAccounts(argument: users_pb.GetAccountsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<users_pb.GetAccountsResponse>): grpc.ClientUnaryCall;
  getSandboxAccounts(argument: users_pb.GetAccountsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<users_pb.GetAccountsResponse>): grpc.ClientUnaryCall;
  closeSandboxAccount(argument: sandbox_pb.CloseSandboxAccountRequest, callback: grpc.requestCallback<sandbox_pb.CloseSandboxAccountResponse>): grpc.ClientUnaryCall;
  closeSandboxAccount(argument: sandbox_pb.CloseSandboxAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<sandbox_pb.CloseSandboxAccountResponse>): grpc.ClientUnaryCall;
  closeSandboxAccount(argument: sandbox_pb.CloseSandboxAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<sandbox_pb.CloseSandboxAccountResponse>): grpc.ClientUnaryCall;
  postSandboxOrder(argument: orders_pb.PostOrderRequest, callback: grpc.requestCallback<orders_pb.PostOrderResponse>): grpc.ClientUnaryCall;
  postSandboxOrder(argument: orders_pb.PostOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.PostOrderResponse>): grpc.ClientUnaryCall;
  postSandboxOrder(argument: orders_pb.PostOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.PostOrderResponse>): grpc.ClientUnaryCall;
  getSandboxOrders(argument: orders_pb.GetOrdersRequest, callback: grpc.requestCallback<orders_pb.GetOrdersResponse>): grpc.ClientUnaryCall;
  getSandboxOrders(argument: orders_pb.GetOrdersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.GetOrdersResponse>): grpc.ClientUnaryCall;
  getSandboxOrders(argument: orders_pb.GetOrdersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.GetOrdersResponse>): grpc.ClientUnaryCall;
  cancelSandboxOrder(argument: orders_pb.CancelOrderRequest, callback: grpc.requestCallback<orders_pb.CancelOrderResponse>): grpc.ClientUnaryCall;
  cancelSandboxOrder(argument: orders_pb.CancelOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.CancelOrderResponse>): grpc.ClientUnaryCall;
  cancelSandboxOrder(argument: orders_pb.CancelOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.CancelOrderResponse>): grpc.ClientUnaryCall;
  getSandboxOrderState(argument: orders_pb.GetOrderStateRequest, callback: grpc.requestCallback<orders_pb.OrderState>): grpc.ClientUnaryCall;
  getSandboxOrderState(argument: orders_pb.GetOrderStateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.OrderState>): grpc.ClientUnaryCall;
  getSandboxOrderState(argument: orders_pb.GetOrderStateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.OrderState>): grpc.ClientUnaryCall;
  getSandboxPositions(argument: operations_pb.PositionsRequest, callback: grpc.requestCallback<operations_pb.PositionsResponse>): grpc.ClientUnaryCall;
  getSandboxPositions(argument: operations_pb.PositionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.PositionsResponse>): grpc.ClientUnaryCall;
  getSandboxPositions(argument: operations_pb.PositionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.PositionsResponse>): grpc.ClientUnaryCall;
  getSandboxOperations(argument: operations_pb.OperationsRequest, callback: grpc.requestCallback<operations_pb.OperationsResponse>): grpc.ClientUnaryCall;
  getSandboxOperations(argument: operations_pb.OperationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.OperationsResponse>): grpc.ClientUnaryCall;
  getSandboxOperations(argument: operations_pb.OperationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.OperationsResponse>): grpc.ClientUnaryCall;
  getSandboxPortfolio(argument: operations_pb.PortfolioRequest, callback: grpc.requestCallback<operations_pb.PortfolioResponse>): grpc.ClientUnaryCall;
  getSandboxPortfolio(argument: operations_pb.PortfolioRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.PortfolioResponse>): grpc.ClientUnaryCall;
  getSandboxPortfolio(argument: operations_pb.PortfolioRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.PortfolioResponse>): grpc.ClientUnaryCall;
  sandboxPayIn(argument: sandbox_pb.SandboxPayInRequest, callback: grpc.requestCallback<sandbox_pb.SandboxPayInResponse>): grpc.ClientUnaryCall;
  sandboxPayIn(argument: sandbox_pb.SandboxPayInRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<sandbox_pb.SandboxPayInResponse>): grpc.ClientUnaryCall;
  sandboxPayIn(argument: sandbox_pb.SandboxPayInRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<sandbox_pb.SandboxPayInResponse>): grpc.ClientUnaryCall;
}
