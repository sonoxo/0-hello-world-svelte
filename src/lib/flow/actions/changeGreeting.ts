import * as fcl from '@onflow/fcl';
import changeGreetingTx from '../cadence/transactions/change_greeting.cdc?raw';

async function changeGreeting(newGreeting: string) {
	const transactionId = await fcl.mutate({
		cadence: changeGreetingTx,
		args: (arg, t) => [arg(newGreeting, t.String)],
		proposer: fcl.authz,
		payer: fcl.authz,
		authorizations: [fcl.authz],
		limit: 999
	});

	console.log('Transaction Id', transactionId);

	return transactionId;
}

export default changeGreeting;