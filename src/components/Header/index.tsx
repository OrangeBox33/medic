import React, { FC } from 'react';
import { Flexbox } from '../../uiKit/Flexbox';
import { Text } from '../../uiKit/Text';
import mainLogo from '../../resources/images/mainLogo.png';
import accountSvg from '../../resources/icons/account.svg';
import searchSvg from '../../resources/icons/search.svg';
import { Circle } from '../../uiKit/Circle';
import { Indent } from '../../uiKit/Indent';

const menu = ['Истории медиков', 'Страны СНГ', 'Статьи', 'Мероприятия', 'Новости', 'Контакты'];

export const Header: FC = () => {
	return (
		<header>
			<Indent paddingRight={28} paddingLeft={28} paddingTop={32} paddingBottom={20}>
				<Flexbox justifyContent="space-between">
					<img src={mainLogo} height={79} width={74} />
					<Flexbox gap="26px" alignItems="center">
						{menu.map((menuElement) => (
							<Text size="23px" color="red" font="bastionx" key={menuElement}>
								{menuElement}
							</Text>
						))}
					</Flexbox>
					<Flexbox gap="20px" alignItems="center">
						<Circle>
							<img src={searchSvg} height={28} width={28} />
						</Circle>
						<Circle>
							<img src={accountSvg} height={28} width={28} />
						</Circle>
					</Flexbox>
				</Flexbox>
			</Indent>
		</header>
	);
};
