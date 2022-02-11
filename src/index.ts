import { UsersServiceClient } from './generated/users_grpc_pb'
import { OperationsServiceClient } from './generated/operations_grpc_pb'

import { nanoid } from 'nanoid'
import * as grpc from '@grpc/grpc-js';
import { GetAccountsRequest, GetAccountsResponse, GetInfoRequest, GetInfoResponse, GetMarginAttributesRequest, GetMarginAttributesResponse, GetUserTariffRequest, GetUserTariffResponse } from './generated/users_pb';
import { BrokerReport, BrokerReportRequest, BrokerReportResponse, OperationsRequest, OperationsResponse, PortfolioRequest, PortfolioResponse, PositionsRequest, PositionsResponse, WithdrawLimitsRequest, WithdrawLimitsResponse } from './generated/operations_pb';
import type { Message as ProtoMessage } from "google-protobuf";

const wrapMethod = <Arg extends ProtoMessage, Rt>(
    token: string,
    fn: (argument: Arg, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<Rt>) => grpc.ClientUnaryCall
) => {
    return (message: Arg) => new Promise<Rt>((resolve, reject) => {
        let metadata = new grpc.Metadata();
        metadata.add('Authorization', `bearer ${token}`);
        metadata.add('x-app-name', `ovr.tinkoffInvestApiNode`);
        metadata.add('x-tracking-id', nanoid());

        fn(message, metadata, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result as any);
            }
        });
    });
};

function createUsersClientAsync(
    token: string,
    host: string,
    credentials: grpc.ChannelCredentials,
) {
    const client = new UsersServiceClient(
        host,
        credentials,
    );

    const getAccounts = wrapMethod<GetAccountsRequest, GetAccountsResponse>(token, client.getAccounts.bind(client));
    const getInfo = wrapMethod<GetInfoRequest, GetInfoResponse>(token, client.getInfo.bind(client));
    const getMarginAttributes = wrapMethod<GetMarginAttributesRequest, GetMarginAttributesResponse>(token, client.getMarginAttributes.bind(client));
    const getUserTariff = wrapMethod<GetUserTariffRequest, GetUserTariffResponse>(token, client.getUserTariff.bind(client));

    return {
        getAccounts,
        getInfo,
        getMarginAttributes,
        getUserTariff
    };
}

function createOperationsClientAsync(
    token: string,
    host: string,
    credentials: grpc.ChannelCredentials,
) {
    const client = new OperationsServiceClient(
        host,
        credentials,
    );

    const getOperations = wrapMethod<OperationsRequest, OperationsResponse>(token, client.getOperations.bind(client));
    const getPortfolio = wrapMethod<PortfolioRequest, PortfolioResponse>(token, client.getPortfolio.bind(client));
    const getPositions = wrapMethod<PositionsRequest, PositionsResponse>(token, client.getPositions.bind(client));
    const getWithdrawLimits = wrapMethod<WithdrawLimitsRequest, WithdrawLimitsResponse>(token, client.getWithdrawLimits.bind(client));
    const getBrokerReport = wrapMethod<BrokerReportRequest, BrokerReportResponse>(token, client.getBrokerReport.bind(client));

    return {
        getOperations,
        getPortfolio,
        getPositions,
        getWithdrawLimits,
        getBrokerReport,
    };
}

export type AsyncUsersService = ReturnType<typeof createUsersClientAsync>;
export type AsyncOperationsService = ReturnType<typeof createOperationsClientAsync>;

export class TinkoffClient {
    public readonly users: AsyncUsersService;
    public readonly operations: AsyncOperationsService;

    public constructor(
        readonly token: string,
        readonly host: string = 'invest-public-api.tinkoff.ru:443',
    ) {
        const credentials = grpc.credentials.createSsl();

        this.users = createUsersClientAsync(
            token,
            host,
            credentials
        );

        this.operations = createOperationsClientAsync(
            token,
            host,
            credentials
        );
    }
}