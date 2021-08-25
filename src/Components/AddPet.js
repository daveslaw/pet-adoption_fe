import React from "react";
import { useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { Form, Button, Col, Row } from "react-bootstrap";
import { petSchema } from "../Validations/petSchema";

function AddPet() {
	const [petName, setPetName] = useState("");
	const [petStatus, setPetStatus] = useState("");
	const [petType, setPetType] = useState("");
	const [breed, setBreed] = useState("");
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [petColor, setPetColor] = useState("");
	const [petBio, setPetBio] = useState("");
	const [allergy, setAllergy] = useState("");

	const handlePetColor = (e) => {
		setPetColor(e.target.value);
	};

	const handlePetName = (e) => {
		setPetName(e.target.value);
	};

	const handleBreed = (e) => {
		setBreed(e.target.value);
	};

	const handleWeight = (event) => {
		setWeight(event.target.value);
	};

	const handleHeight = (event) => {
		setHeight(event.target.value);
	};

	const handlePetBio = (event) => {
		setPetBio(event.target.value);
	};

	const handleStatus = (event) => {
		setPetStatus(event.target.value);
	};

	const handlePetType = (event) => {
		setPetType(event.target.value);
	};

	const handleAllergy = (event) => {
		setAllergy(event.target.value);
	};
	// useEffect(() => {
	// 	console.log(statusValue);
	// });

	//

	const submitPetForm = async () => {
		const petData = {
			petName: petName,
			petType: petType,
			petStatus: petStatus,
			breed: breed,
			petColor: petColor,
			height: height,
			weight: weight,
			petBio: petBio,
			allergy: allergy,
		};
		const isValid = await petSchema.isValid(petData);
		console.log(isValid, petData);

		if (isValid) {
			axios
				.post(`http://localhost:3001/addpet`, {
					pet_id: uuid(),
					petName: petName,
					petType: petType,
					petStatus: petStatus,
					breed: breed,
					petColor: petColor,
					height: height,
					weight: weight,
					petBio: petBio,
					allergy: allergy,
				})
				.then((response) => {
					console.log(response);
				})
				.catch((error) => console.log(error));
		} else
			alert(
				"Please note the name, type and status fields are required. Also the height and weight fields require an integer input."
			);
	};

	return (
		<div>
			<Form className="form-wrapper">
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Name</Form.Label>
						<Form.Control value={petName} onInput={handlePetName} />
					</Form.Group>

					<Form.Group
						as={Col}
						controlId="formGridState"
						onChange={handlePetType}
					>
						<Form.Label>Type</Form.Label>
						<Form.Select>
							<option>Choose type here</option>
							<option value={"Dog"}>Dog</option>
							<option value={"Cat"}>Cat</option>
							<option value={"Bird"}>Bird</option>
							<option value={"Horse"}>Horse</option>
							<option value={"Other"}>Other</option>
						</Form.Select>
					</Form.Group>

					<Form.Group
						onChange={handleStatus}
						defaultValue="Choose Status"
						as={Col}
						controlId="formGridZip"
					>
						<Form.Label>Status</Form.Label>
						<Form.Select onChange={handleStatus} defaultValue="Choose Status">
							<option>Choose status here</option>
							<option value={"Fostered"}>Fostered</option>
							<option value={"Adopted"}>Adopted</option>
							<option value={"None"}>None</option>
						</Form.Select>
					</Form.Group>
				</Row>

				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Height (cm)</Form.Label>
						<Form.Control value={height} onInput={handleHeight} />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Weight (kg)</Form.Label>
						<Form.Control value={weight} onInput={handleWeight} />
					</Form.Group>
				</Row>

				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Color</Form.Label>
						<Form.Control value={petColor} onInput={handlePetColor} />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Breed</Form.Label>
						<Form.Control value={breed} onInput={handleBreed} />
					</Form.Group>

					<Form.Group as={Col}>
						<Form.Label>Allergies</Form.Label>
						<div onChange={handleAllergy} key={`inline-radio`} className="mb-3">
							<Form.Check
								value={"Yes"}
								inline
								label="Yes"
								name="group1"
								type="radio"
								id={`inline-radio-1`}
							/>
							<Form.Check
								value={"No"}
								inline
								label="No"
								name="group1"
								type="radio"
								id={`inline-radio-2`}
							/>
						</div>
					</Form.Group>
				</Row>

				<Row className="mb-3">
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Pet Biography</Form.Label>
						<Form.Control
							placeholder="Short bio of your furry friend"
							as="textarea"
							rows={2}
							value={petBio}
							onInput={handlePetBio}
						/>
					</Form.Group>
				</Row>

				<Button
					className="submit-pet-button"
					onClick={submitPetForm}
					variant="primary"
				>
					Submit Pet
				</Button>
			</Form>
		</div>
	);
}

export default AddPet;
