import React, { ReactNode } from 'react';
import styled from 'styled-components';

type IndentProps = {
	children: ReactNode;
	margin?: number;
	marginTop?: number;
	marginRight?: number;
	marginBottom?: number;
	marginLeft?: number;
	padding?: number;
	paddingTop?: number;
	paddingRight?: number;
	paddingBottom?: number;
	paddingLeft?: number;
	borderRadius?: number;
	maxWidth?: number;
	maxHeight?: number;
};

const StyledIndent = styled.div<IndentProps>`
	margin: ${({ margin, marginTop, marginRight, marginBottom, marginLeft }) =>
		margin !== undefined
			? `${margin}px`
			: `${marginTop || 0}px ${marginRight || 0}px ${marginBottom || 0}px ${
					marginLeft || 0
			  }px`};
	padding: ${({ padding, paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
		padding !== undefined
			? `${padding}px`
			: `${paddingTop || 0}px ${paddingRight || 0}px ${paddingBottom || 0}px ${
					paddingLeft || 0
			  }px`};
	border-radius: ${({ borderRadius }) =>
		borderRadius !== undefined ? `${borderRadius}px` : '0'};
	max-width: ${({ maxWidth }) => maxWidth !== undefined && `${maxWidth}px`};
	max-height: ${({ maxHeight }) => maxHeight !== undefined && `${maxHeight}px`};
`;

export const Indent: React.FC<IndentProps> = ({
	children,
	margin,
	marginTop,
	marginRight,
	marginBottom,
	marginLeft,
	padding,
	paddingTop,
	paddingRight,
	paddingBottom,
	paddingLeft,
	maxWidth,
	maxHeight,
}) => {
	return (
		<StyledIndent
			margin={margin}
			marginTop={marginTop}
			marginRight={marginRight}
			marginBottom={marginBottom}
			marginLeft={marginLeft}
			padding={padding}
			paddingTop={paddingTop}
			paddingRight={paddingRight}
			paddingBottom={paddingBottom}
			paddingLeft={paddingLeft}
			maxWidth={maxWidth}
		>
			{children}
		</StyledIndent>
	);
};
