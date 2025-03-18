import React, { FC } from 'react';
import styled from 'styled-components';
import { Indent } from '../../uiKit/Indent';
import { Flexbox } from '../../uiKit/Flexbox';
import { Text } from '../../uiKit/Text';
import capitalImage from '../../resources/images/back.png';
import { Button } from '../../uiKit/Button';
import logo1 from '../../resources/images/logo1.png';
import logo2 from '../../resources/images/logo2.png';
import logo3 from '../../resources/images/logo3.png';
import logo4 from '../../resources/images/logo4.png';
import mountain from '../../resources/icons/mountain.svg';
import { Grid } from '../../uiKit/Grid';

const StyledBlockOnImage = styled.div`
	height: 686px;
	padding: 32px;
	box-sizing: border-box;
`;

const StyledBackgroundImage = styled.img`
	position: absolute;
	z-index: -1;
	border-radius: 32px;
`;

const StyledBlockUnderImage = styled.div`
	padding: 40px;
`;

const StyledBackground = styled.div`
	position: absolute;
	background-color: #e6e6e6;
	width: 1200px;
	height: 1000px;
	z-index: -2;
	margin-top: -40px;
`;

export const CapitalBlock: FC = () => {
	return (
		<div>
			<StyledBackgroundImage src={capitalImage} width={1200} height={686} />
			<StyledBlockOnImage>
				<Flexbox direction="column" justifyContent="space-between" isFullHeight>
					<Flexbox justifyContent="space-between">
						<Text size="98px" color="white" maxWidth={500}>
							Подвиг медиков
						</Text>
						<div>
							<Text
								fontStyle="italic"
								color="white"
								size="19px"
								tag="p"
								maxWidth={400}
							>
								«Война была выиграна в значительной степени офицерами и солдатами,
								возвращенными в строй медицинской службой.»
							</Text>
							<Flexbox justifyContent="end">
								<Text
									color="white"
									size="13px"
									textAlign="right"
									tag="p"
									maxWidth={260}
								>
									Академик РАМН, генерал-полковник медицинской службы Федор
									Иванович Комаров
								</Text>
							</Flexbox>
						</div>
					</Flexbox>
					<Flexbox justifyContent="space-between" alignItems="flex-end">
						<Text font="bastionx" color="white" size="32px" maxWidth={400}>
							Этот проект посвящен всем медикам, воевавшим в Великую Отечественную
							войну
						</Text>

						<Button
							title={
								<Text font="bastionx" color="white" size="25px">
									Отправить свою историю
								</Text>
							}
							theme="red"
							withIcon
						/>
					</Flexbox>
				</Flexbox>
			</StyledBlockOnImage>
			<StyledBackground />
			<StyledBlockUnderImage>
				<Flexbox justifyContent="space-between">
					<Indent marginTop={-16}>
						<Grid columns={2} rows={2} placeItems="center center">
							<img src={logo2} height={89} width={115} />
							<img src={logo3} height={104} width={164} />
							<img src={logo4} height={89} width={83} />
							<img src={logo1} height={99} width={56} />
						</Grid>
					</Indent>

					<Flexbox direction="column" gap="30px">
						<Text color="gray" size="22px" maxWidth={330} textAlign="center">
							ВО ВРЕМЯ ВТОРОЙ МИРОВОЙ ВОЙНЫ ВОЕВАЛИ
						</Text>
						<Flexbox gap="40px">
							<Flexbox direction="column" alignItems="center">
								<Text size="40px" color="gray" font="bastionx">
									200 тысяч
								</Text>
								<Text textAlign="center" size="18px" color="gray">
									врачей
								</Text>
							</Flexbox>
							<Flexbox direction="column" alignItems="center">
								<Text size="40px" color="gray" font="bastionx">
									500 тысяч
								</Text>
								<Text textAlign="center" size="18px" color="gray" maxWidth={138}>
									санитаров и фельдшеров
								</Text>
							</Flexbox>
						</Flexbox>
					</Flexbox>
					<Indent marginTop={-6}>
						<Grid columns={2} rows={3} gap="22px" placeItems="center normal">
							<Text size="30px" color="gray" font="bastionx" textAlign="right">
								22 млн
							</Text>
							<Text size="16px" color="gray" maxWidth={180}>
								человек прошли через госпитали, из них
							</Text>
							<Text size="30px" color="gray" font="bastionx" textAlign="right">
								17 млн
							</Text>
							<Text size="16px" color="gray">
								вернулись на фронт
							</Text>
							<Text size="30px" color="gray" font="bastionx" textAlign="right">
								85 тысяч
							</Text>
							<Text size="16px" color="gray" maxWidth={170}>
								медиков погибли или пропали без вести
							</Text>
						</Grid>
					</Indent>
				</Flexbox>
			</StyledBlockUnderImage>
			<Indent marginTop={-60}>
				<img src={mountain} />
			</Indent>
		</div>
	);
};
