import React, { FC } from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { CapitalBlock } from './components/CapitalBlock';

export const App: FC = () => {
	return (
		<Layout>
			<Header />
			<CapitalBlock />
		</Layout>
	);
};
