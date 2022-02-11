// GENERATED CODE -- DO NOT EDIT!

// package: tinkoff.public.invest.api.contract.v1
// file: orders.proto

import * as orders_pb from "./orders_pb";
import * as grpc from "@grpc/grpc-js";

interface IOrdersStreamServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  tradesStream: grpc.MethodDefinition<orders_pb.TradesStreamRequest, orders_pb.TradesStreamResponse>;
}

export const OrdersStreamServiceService: IOrdersStreamServiceService;

export interface IOrdersStreamServiceServer extends grpc.UntypedServiceImplementation {
  tradesStream: grpc.handleServerStreamingCall<orders_pb.TradesStreamRequest, orders_pb.TradesStreamResponse>;
}

export class OrdersStreamServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  tradesStream(argument: orders_pb.TradesStreamRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<orders_pb.TradesStreamResponse>;
  tradesStream(argument: orders_pb.TradesStreamRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<orders_pb.TradesStreamResponse>;
}

interface IOrdersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  postOrder: grpc.MethodDefinition<orders_pb.PostOrderRequest, orders_pb.PostOrderResponse>;
  cancelOrder: grpc.MethodDefinition<orders_pb.CancelOrderRequest, orders_pb.CancelOrderResponse>;
  getOrderState: grpc.MethodDefinition<orders_pb.GetOrderStateRequest, orders_pb.OrderState>;
  getOrders: grpc.MethodDefinition<orders_pb.GetOrdersRequest, orders_pb.GetOrdersResponse>;
}

export const OrdersServiceService: IOrdersServiceService;

export interface IOrdersServiceServer extends grpc.UntypedServiceImplementation {
  postOrder: grpc.handleUnaryCall<orders_pb.PostOrderRequest, orders_pb.PostOrderResponse>;
  cancelOrder: grpc.handleUnaryCall<orders_pb.CancelOrderRequest, orders_pb.CancelOrderResponse>;
  getOrderState: grpc.handleUnaryCall<orders_pb.GetOrderStateRequest, orders_pb.OrderState>;
  getOrders: grpc.handleUnaryCall<orders_pb.GetOrdersRequest, orders_pb.GetOrdersResponse>;
}

export class OrdersServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  postOrder(argument: orders_pb.PostOrderRequest, callback: grpc.requestCallback<orders_pb.PostOrderResponse>): grpc.ClientUnaryCall;
  postOrder(argument: orders_pb.PostOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.PostOrderResponse>): grpc.ClientUnaryCall;
  postOrder(argument: orders_pb.PostOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.PostOrderResponse>): grpc.ClientUnaryCall;
  cancelOrder(argument: orders_pb.CancelOrderRequest, callback: grpc.requestCallback<orders_pb.CancelOrderResponse>): grpc.ClientUnaryCall;
  cancelOrder(argument: orders_pb.CancelOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.CancelOrderResponse>): grpc.ClientUnaryCall;
  cancelOrder(argument: orders_pb.CancelOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.CancelOrderResponse>): grpc.ClientUnaryCall;
  getOrderState(argument: orders_pb.GetOrderStateRequest, callback: grpc.requestCallback<orders_pb.OrderState>): grpc.ClientUnaryCall;
  getOrderState(argument: orders_pb.GetOrderStateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.OrderState>): grpc.ClientUnaryCall;
  getOrderState(argument: orders_pb.GetOrderStateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.OrderState>): grpc.ClientUnaryCall;
  getOrders(argument: orders_pb.GetOrdersRequest, callback: grpc.requestCallback<orders_pb.GetOrdersResponse>): grpc.ClientUnaryCall;
  getOrders(argument: orders_pb.GetOrdersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.GetOrdersResponse>): grpc.ClientUnaryCall;
  getOrders(argument: orders_pb.GetOrdersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<orders_pb.GetOrdersResponse>): grpc.ClientUnaryCall;
}
