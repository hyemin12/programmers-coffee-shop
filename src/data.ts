import coffee1 from './assets/images/coffee1.jpg';
import coffee2 from './assets/images/coffee2.jpg';
import coffee3 from './assets/images/coffee3.jpg';
import coffee4 from './assets/images/coffee4.jpg';
import coffee5 from './assets/images/coffee5.jpg';
import coffee6 from './assets/images/coffee6.jpg';
import coffee7 from './assets/images/coffee7.jpg';
import coffee8 from './assets/images/coffee8.jpg';
import coffee9 from './assets/images/coffee9.jpg';
import coffee10 from './assets/images/coffee10.jpg';
import coffee11 from './assets/images/coffee11.jpg';
import coffee12 from './assets/images/coffee12.jpg';

export type CategoryType = 'coffee' | 'blended' | 'seasonalMenu';

export interface CoffeeProps {
	id: number;
	image: string;
	name: string;
	nameEn: string;
	price: number;
	description: string;
	category: CategoryType;
}

export const coffeeDB: CoffeeProps[] = [
	{
		id: 0,
		name: '아이스 카페 아메리카노',
		nameEn: 'Iced Caffe Americano',
		price: 4100,
		image: coffee1,
		description:
			'진한 에스프레소에 시원한 정수물과 얼음을 더하여 스타벅스의 깔끔하고 강렬한 에스프레소를 가장 부드럽고 시원하게 즐길 수 있는 커피',
		category: 'coffee',
	},
	{
		id: 1,
		name: '아이스 카페 라떼',
		nameEn: 'Iced Caffe Latte',
		price: 4100,
		image: coffee2,
		description:
			'풍부하고 진한 농도의 에스프레소가 시원한 우유와 얼음을 만나 고소함과 시원함을 즐길 수 있는 대표적인 커피 라떼',
		category: 'coffee',
	},
	{
		id: 2,
		name: '아이스 카라멜마끼야또',
		nameEn: 'Iced Caramel Macchiato',
		price: 4800,
		image: coffee3,
		description:
			'향긋한 바닐라 시럽과 시원한 우유와 얼음을 넣고 점을 찍듯이 에스프레소를 부은 후 벌집 모양으로 카라멜 드리즐을 올린 달콤한 커피 음료',
		category: 'coffee',
	},
	{
		id: 3,
		name: '돌체 콜드브루',
		nameEn: 'Dolce Cold Brew',
		price: 4500,
		image: coffee5,
		description:
			'무더운 여름철,\n 동남아 휴가지에서 즐기는 커피를 떠오르게 하는\n 스타벅스 음료의 베스트 x 베스트 조합인\n 돌체 콜드 브루를 만나보세요!',
		category: 'coffee',
	},
	{
		id: 4,
		name: '아이스 카푸치노',
		nameEn: 'Iced Cappuccino',
		price: 4500,
		image: coffee4,
		description: '풍부하고 진한 에스프레소에 신선한 우유와 우유 거품이 얼음과 함께 들어간 시원하고 부드러운 커피 음료',
		category: 'coffee',
	},
	{
		id: 5,
		name: '자바 칩 프라푸치노',
		nameEn: 'Java Chip Frappuccino',
		price: 4100,
		image: coffee6,
		description: '커피, 모카 소스, 진한 초콜릿 칩이 입안 가득 느껴지는 스타벅스에서만 맛볼 수 있는 프라푸치노',
		category: 'blended',
	},
	{
		id: 6,
		name: '망고 패션 티 블렌디드',
		nameEn: 'Mango Passion Tea Blended',
		price: 5000,
		image: coffee7,
		description: '망고 패션 프루트 주스와 패션 탱고 티가\n 상큼하게 어우러진 과일 블렌디드',
		category: 'blended',
	},
	{
		id: 7,
		name: '딸기 딜라이트 요거트 블렌디드',
		nameEn: 'Strawberry Delight Yogurt Blended',
		price: 5000,
		image: coffee8,
		description: '유산균이 살아있는 리얼 요거트와 풍성한 딸기 과육이\n 더욱 상큼하게 어우러진 과일 요거트 블렌디드',
		category: 'blended',
	},
	{
		id: 8,
		name: '여수 바다 유자 블렌디드',
		nameEn: 'Yeosu Sea Yuja Blended',
		price: 4000,
		image: coffee9,
		description:
			'맑고 깨끗한 여수 경도의 낮 바다 풍경을 형상화한 음료로\n 상큼하게 즐길 수 있는 유자 블렌디드 음료 (유자:국내산)',
		category: 'blended',
	},
	{
		id: 9,
		name: '민트 콜드브루',
		nameEn: 'Mint Cold Brew',
		price: 4800,
		image: coffee10,
		description:
			'상쾌한 민트향 시럽과 잘게 갈린 얼음이\n 어우러져 시원함이 강렬하게 느껴지는 리저브만의\n 콜드 브루 음료',
		category: 'seasonalMenu',
	},
	{
		id: 10,
		name: '콜드브루',
		nameEn: 'Cold Brew',
		price: 4500,
		image: coffee11,
		description:
			'스타벅스 바리스타의 정성으로 탄생한 콜드 브루!\n \n 콜드 브루 전용 원두를 차가운 물로 추출하여 한정된 양만 제공됩니다.\n 깊은 풍미의 새로운 커피 경험을 즐겨보세요.',
		category: 'coffee',
	},
	{
		id: 11,
		name: '콜드브루 몰트',
		nameEn: 'Cold Brew Malt',
		price: 5000,
		image: coffee12,
		description: '[리저브 전용음료] 리저브 콜드 브루, 바닐라 아이스크림, 몰트가 블렌딩된 리저브만의 쉐이크',
		category: 'seasonalMenu',
	},
];
