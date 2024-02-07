import { useState } from 'react';
import useCartStore from '../../../store/cart';
import { CheckboxContainer } from './CartItem.styles';

const Checkbox = ({ id }: { id: number }) => {
	const { selectedItems, addSelectedItem, deleteSelectedItem } = useCartStore();
	const [isChecked, setIsChecked] = useState(selectedItems.includes(id));

	/** 체크박스 클릭 여부로 아이템 선택 목록에 추가/삭제
	 * - checked=true: 선택 목록에 추가
	 * - checked=false: 선택 목록에서 제거
	 */
	const checkBoxCheckStatus = () => {
		if (isChecked) {
			addSelectedItem(id);
		} else {
			deleteSelectedItem(id);
		}
		setIsChecked(!isChecked);
	};
	return (
		<CheckboxContainer>
			<label htmlFor={`checkbox-${id}`} onClick={checkBoxCheckStatus}>
				{isChecked && <span>&#10003;</span>}
			</label>
			<input id={`checkbox-${id}`} type='checkbox' onChange={() => {}} checked={isChecked} />
		</CheckboxContainer>
	);
};

export default Checkbox;
