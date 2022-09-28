import { Alert, Card, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IAnimal, ITodayAppointment } from "../../models/today";
import { makeTimeCorrect } from "../../utils/makeTimeCorrect";
import styles from './today.module.css';

export function Today() {
	const { getToday } = useActions();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState<IAnimal | null>(null);
	useEffect(() => {
		getToday();
	}, [])

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const { today, isLoading, error } = useTypedSelector(state => state.todayReducer);
	return (
		<div>
			{
				error
					? <Alert message={error} type="error" />
					:
					<>
						{today.map((elem: ITodayAppointment) => (
							<Card key={elem.id} title={elem.animal.name} loading={isLoading} className={styles.today__card} onClick={() => {
								showModal();
								setModalData(elem.animal);
							}}
							>
								<p><strong>Тип назначения:</strong> {elem.type}</p>
								<p><strong>Порода:</strong> {elem.animal.spec.name}</p>
								<p><strong>Время приема:</strong> {makeTimeCorrect(elem.time)}</p>
							</Card>

						))}
					</>
			}
			{
				modalData &&
				<Modal title={modalData.name} footer={null} open={isModalOpen} onCancel={handleCancel} centered>
					<p><strong>Порода:</strong> {modalData.spec.name}</p>
					<p><strong>Возраст:</strong> {modalData.age}</p>
					<p><strong>Рост:</strong> {modalData.height ? <span>{modalData.height} {modalData.heightUnit}</span> : <span>Неизвестно</span>}</p>
					<p><strong>Вес:</strong> {modalData.weight ? <span>{modalData.weight} {modalData.weightUnit}</span> : <span>Неизвестно</span>}  </p>
				</Modal>
			}
		</div>
	)
}