import { Alert, Card, Modal, Pagination, } from "antd";
import React, { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IAnimal } from "../../models/today";
import styles from './animals.module.css';

export function Animals() {
	const { getAnimals } = useActions();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalData, setModalData] = useState<IAnimal | null>(null);
	const [animalNumber, setAnimalNumber] = useState(0);
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	useEffect(
		() => {
			getAnimals(animalNumber)
		}, [animalNumber]
	);

	const { animals, isLoading, error, count } = useTypedSelector(state => state.animalsReducer);
	const totalPages = Math.floor(count / 5);
	return (
		<div>
			{
				error
					? <Alert message={error} type="error" />
					:
					<>
						{
							animals.map((elem: IAnimal) => (
								<Card
									key={elem.id}
									loading={isLoading}
									className={styles.animals__card}
									onClick={() => {
										showModal();
										setModalData(elem);
									}
									}
								>
									<p><strong>Кличка:</strong> {elem.name}</p>
									<p><strong>Порода:</strong> {elem.spec.name}</p>
								</Card>

							))
						}
					</>
			}
			{
				modalData &&
				<Modal
					title={modalData.name}
					footer={null}
					open={isModalOpen}
					onCancel={handleCancel}
					centered
				>
					<p><strong>Порода:</strong> {modalData.spec.name}</p>
					<p><strong>Возраст:</strong> {modalData.age}</p>
					<p><strong>Рост:</strong> {modalData.height ? <span>{modalData.height} {modalData.heightUnit}</span> : <span>Неизвестно</span>}</p>
					<p><strong>Вес:</strong> {modalData.weight ? <span>{modalData.weight} {modalData.weightUnit}</span> : <span>Неизвестно</span>}  </p>
				</Modal>
			}
			<Pagination
				defaultCurrent={1}
				defaultPageSize={5}
				total={count}
				className={styles.animals__pagination}
				onChange={page => {
					if (page === 0) {
						setAnimalNumber(0)
					} else {
						setAnimalNumber((page - 1) * 5)
					}

				}}
			/>
		</div>
	)
}