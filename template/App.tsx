import React, { useEffect, StrictMode } from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	useColorScheme,
	View,
} from 'react-native';

import {
	Colors,
	Header,
	LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { SigningStargateClient } from '@cosmjs/stargate';

const App: () => void = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	useEffect(() => {
		const boot = async () => {
			try {
				const mnemonic =
					'<YOUR-MNEMONIC>';
				const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
				const [firstAccount] = await wallet.getAccounts();

				console.log('TEST: ', firstAccount);

				const rpcEndpoint = 'https://rpc.my_tendermint_rpc_node';
				const client = await SigningStargateClient.connectWithSigner(
					rpcEndpoint,
					wallet,
				);

				const recipient = 'cosmos1xv9tklw7d82sezh9haa573wufgy59vmwe6xxe5';
				const amount = {
					denom: 'ucosm',
					amount: '1234567',
				};
				const result = await client.sendTokens(
					firstAccount.address,
					recipient,
					[amount],
					'auto',
					'Have fun with your star coins',
				);

				console.log(result);
			} catch (error) {
				console.error(error);
			}
		};

		boot();
	});

	return (
		<StrictMode>
			<SafeAreaView style={backgroundStyle}>
				<StatusBar
					barStyle={isDarkMode ? 'light-content' : 'dark-content'}
					backgroundColor={backgroundStyle.backgroundColor}
				/>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={backgroundStyle}>
					<Header />
					<View
						style={{
							backgroundColor: isDarkMode ? Colors.black : Colors.white,
						}}>
						<LearnMoreLinks />
					</View>
				</ScrollView>
			</SafeAreaView>
		</StrictMode>
	);
};

export default App;
