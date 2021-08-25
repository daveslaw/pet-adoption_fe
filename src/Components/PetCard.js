import { React, useEffect } from "react";
import { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { AppContext } from "../Context/AppContext";
import axios from "axios";

function PetCard() {
	const appContext = useContext(AppContext);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	const [modalData, setModalData] = useState({});

	useEffect(() => {
		console.log(appContext.isLoggedOut);
		axios
			.get("http://www.localhost:3001/getallpets")
			.then((response) => {
				appContext.setPetDataArray(response.data.data);
			})

			.catch((error) => console.log(error));
	});

	return (
		<>
			<div className="grid-wrapper">
				{appContext.petDataArray.map((petItem) => {
					return (
						<div
							className={"pet-card"}
							key={petItem.pet_id}
							onClick={(handleShow) => {
								setModalData(petItem);
								setShow(true);
							}}
						>
							<div>Name: {petItem.petName}</div>
							<div>Status: {petItem.petStatus}</div>
							<div>Type: {petItem.petType}</div>
							<div className="see-more">See more...</div>
						</div>
					);
				})}
				<Modal
					show={show}
					onHide={handleClose}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Body>
						<div>Name: {modalData.petName}</div>
						<div>Status: {modalData.petStatus}</div>
						<div>Type: {modalData.petType}</div>
						<div>Weight: {modalData.weight}</div>
						<div>Height: {modalData.height}</div>
						<div>Breed: {modalData.breed}</div>
						<div>Bio: {modalData.bio}</div>
						<div>Allergy: {modalData.allergy}</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</>
	);
}
export default PetCard;
