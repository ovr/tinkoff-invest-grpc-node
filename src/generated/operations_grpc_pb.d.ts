// GENERATED CODE -- DO NOT EDIT!

// package: tinkoff.public.invest.api.contract.v1
// file: operations.proto

import * as operations_pb from "./operations_pb";
import * as grpc from "@grpc/grpc-js";

interface IOperationsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getOperations: grpc.MethodDefinition<operations_pb.OperationsRequest, operations_pb.OperationsResponse>;
  getPortfolio: grpc.MethodDefinition<operations_pb.PortfolioRequest, operations_pb.PortfolioResponse>;
  getPositions: grpc.MethodDefinition<operations_pb.PositionsRequest, operations_pb.PositionsResponse>;
  getWithdrawLimits: grpc.MethodDefinition<operations_pb.WithdrawLimitsRequest, operations_pb.WithdrawLimitsResponse>;
  getBrokerReport: grpc.MethodDefinition<operations_pb.BrokerReportRequest, operations_pb.BrokerReportResponse>;
}

export const OperationsServiceService: IOperationsServiceService;

export interface IOperationsServiceServer extends grpc.UntypedServiceImplementation {
  getOperations: grpc.handleUnaryCall<operations_pb.OperationsRequest, operations_pb.OperationsResponse>;
  getPortfolio: grpc.handleUnaryCall<operations_pb.PortfolioRequest, operations_pb.PortfolioResponse>;
  getPositions: grpc.handleUnaryCall<operations_pb.PositionsRequest, operations_pb.PositionsResponse>;
  getWithdrawLimits: grpc.handleUnaryCall<operations_pb.WithdrawLimitsRequest, operations_pb.WithdrawLimitsResponse>;
  getBrokerReport: grpc.handleUnaryCall<operations_pb.BrokerReportRequest, operations_pb.BrokerReportResponse>;
}

export class OperationsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getOperations(argument: operations_pb.OperationsRequest, callback: grpc.requestCallback<operations_pb.OperationsResponse>): grpc.ClientUnaryCall;
  getOperations(argument: operations_pb.OperationsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.OperationsResponse>): grpc.ClientUnaryCall;
  getOperations(argument: operations_pb.OperationsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.OperationsResponse>): grpc.ClientUnaryCall;
  getPortfolio(argument: operations_pb.PortfolioRequest, callback: grpc.requestCallback<operations_pb.PortfolioResponse>): grpc.ClientUnaryCall;
  getPortfolio(argument: operations_pb.PortfolioRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.PortfolioResponse>): grpc.ClientUnaryCall;
  getPortfolio(argument: operations_pb.PortfolioRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.PortfolioResponse>): grpc.ClientUnaryCall;
  getPositions(argument: operations_pb.PositionsRequest, callback: grpc.requestCallback<operations_pb.PositionsResponse>): grpc.ClientUnaryCall;
  getPositions(argument: operations_pb.PositionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.PositionsResponse>): grpc.ClientUnaryCall;
  getPositions(argument: operations_pb.PositionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.PositionsResponse>): grpc.ClientUnaryCall;
  getWithdrawLimits(argument: operations_pb.WithdrawLimitsRequest, callback: grpc.requestCallback<operations_pb.WithdrawLimitsResponse>): grpc.ClientUnaryCall;
  getWithdrawLimits(argument: operations_pb.WithdrawLimitsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.WithdrawLimitsResponse>): grpc.ClientUnaryCall;
  getWithdrawLimits(argument: operations_pb.WithdrawLimitsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.WithdrawLimitsResponse>): grpc.ClientUnaryCall;
  getBrokerReport(argument: operations_pb.BrokerReportRequest, callback: grpc.requestCallback<operations_pb.BrokerReportResponse>): grpc.ClientUnaryCall;
  getBrokerReport(argument: operations_pb.BrokerReportRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.BrokerReportResponse>): grpc.ClientUnaryCall;
  getBrokerReport(argument: operations_pb.BrokerReportRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<operations_pb.BrokerReportResponse>): grpc.ClientUnaryCall;
}
