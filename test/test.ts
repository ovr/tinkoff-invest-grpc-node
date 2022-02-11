import { TinkoffClient } from '../src';
import { OperationsRequest, PortfolioRequest, PositionsRequest } from '../src/generated/operations_pb';
import { GetAccountsRequest } from '../src/generated/users_pb';

const token = process.env.TINKOFF_SDK_TESTING_ENV;
if (!token) {
    throw new Error('Please specify')
};

const client = new TinkoffClient(
    token
);
console.log(client);

(async () => {
    {
        try {
            console.log('Sending...');
            const response = await client.users.getAccounts(new GetAccountsRequest());
            console.log('Response', response.toObject());
        } catch (e) {
            console.log(e);
    
            throw e;
        }
    }

    try {
        console.log('Sending...');
        const request = new PortfolioRequest();
        request.setAccountId('2145448284');

        const response = await client.operations.getPortfolio(request);
        console.log('Response', response.toObject().positionsList.map((position) => ({
            instrumentType: position.instrumentType,
            figi: position.figi,
            units: position.quantity?.units,
        })));
    } catch (e) {
        console.log(e);

        throw e;
    }


    try {
        console.log('Sending...');
        const request = new PositionsRequest();
        request.setAccountId('2145448284');

        const response = await client.operations.getPositions(request);
        console.log('Response', response.toObject().moneyList);
    } catch (e) {
        console.log(e);

        throw e;
    }
})();