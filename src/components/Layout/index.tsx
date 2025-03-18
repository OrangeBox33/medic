import React, { ReactNode } from 'react';
import styled from 'styled-components';

type LayoutProps = {
	children: ReactNode;
};

const StyledLayoutWrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const StyledLayout = styled.div`
	max-width: 1200px;
	width: 100%;
`;

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<StyledLayoutWrapper>
			<StyledLayout>{children}</StyledLayout>
		</StyledLayoutWrapper>
	);
};
