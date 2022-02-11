// GENERATED CODE -- DO NOT EDIT!

// package: tinkoff.public.invest.api.contract.v1
// file: stoporders.proto

import * as stoporders_pb from "./stoporders_pb";
import * as grpc from "@grpc/grpc-js";

interface IStopOrdersServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  postStopOrder: grpc.MethodDefinition<stoporders_pb.PostStopOrderRequest, stoporders_pb.PostStopOrderResponse>;
  getStopOrders: grpc.MethodDefinition<stoporders_pb.GetStopOrdersRequest, stoporders_pb.GetStopOrdersResponse>;
  cancelStopOrder: grpc.MethodDefinition<stoporders_pb.CancelStopOrderRequest, stoporders_pb.CancelStopOrderResponse>;
}

export const StopOrdersServiceService: IStopOrdersServiceService;

export interface IStopOrdersServiceServer extends grpc.UntypedServiceImplementation {
  postStopOrder: grpc.handleUnaryCall<stoporders_pb.PostStopOrderRequest, stoporders_pb.PostStopOrderResponse>;
  getStopOrders: grpc.handleUnaryCall<stoporders_pb.GetStopOrdersRequest, stoporders_pb.GetStopOrdersResponse>;
  cancelStopOrder: grpc.handleUnaryCall<stoporders_pb.CancelStopOrderRequest, stoporders_pb.CancelStopOrderResponse>;
}

export class StopOrdersServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  postStopOrder(argument: stoporders_pb.PostStopOrderRequest, callback: grpc.requestCallback<stoporders_pb.PostStopOrderResponse>): grpc.ClientUnaryCall;
  postStopOrder(argument: stoporders_pb.PostStopOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<stoporders_pb.PostStopOrderResponse>): grpc.ClientUnaryCall;
  postStopOrder(argument: stoporders_pb.PostStopOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<stoporders_pb.PostStopOrderResponse>): grpc.ClientUnaryCall;
  getStopOrders(argument: stoporders_pb.GetStopOrdersRequest, callback: grpc.requestCallback<stoporders_pb.GetStopOrdersResponse>): grpc.ClientUnaryCall;
  getStopOrders(argument: stoporders_pb.GetStopOrdersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<stoporders_pb.GetStopOrdersResponse>): grpc.ClientUnaryCall;
  getStopOrders(argument: stoporders_pb.GetStopOrdersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<stoporders_pb.GetStopOrdersResponse>): grpc.ClientUnaryCall;
  cancelStopOrder(argument: stoporders_pb.CancelStopOrderRequest, callback: grpc.requestCallback<stoporders_pb.CancelStopOrderResponse>): grpc.ClientUnaryCall;
  cancelStopOrder(argument: stoporders_pb.CancelStopOrderRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<stoporders_pb.CancelStopOrderResponse>): grpc.ClientUnaryCall;
  cancelStopOrder(argument: stoporders_pb.CancelStopOrderRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<stoporders_pb.CancelStopOrderResponse>): grpc.ClientUnaryCall;
}
