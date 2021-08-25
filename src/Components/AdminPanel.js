import { React, useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import AddPet from "./AddPet.js";
import { Button } from "@material-ui/core/";

function AdminPanel() {
	const appContext = useContext(AppContext);
	const [petList, showPetList] = useState(false);
	const [userList, showUserList] = useState(false);
	const [petListButton, showPetListButton] = useState(true);
	const [userListButton, showUserListButton] = useState(true);
	const [addPet, showAddPet] = useState(false);
	const [addPetButton, showAddPetButton] = useState(true);

	const handlePetList = () => {
		showAddPet(false);
		showUserList(false);

		axios
			.get("http://www.localhost:3001/getallpets")
			.then((response) => {
				appContext.setPetDataArray(response.data.data);
			})
			.catch((error) => console.log(error));
		showPetList(true);
		showPetListButton(false);
		showAddPetButton(true);
		showUserListButton(true);
	};

	const handleUserList = () => {
		showPetList(false);
		showAddPet(false);

		axios
			.get("http://www.localhost:3001/getallusers")
			.then((response) => {
				appContext.setUserArray(response.data.data);
			})
			.catch((error) => console.log(error));
		showUserList(true);
		showUserListButton(false);
		showAddPetButton(true);
		showPetListButton(true);
	};

	const hidePetList = () => {
		showPetList(false);
		showPetListButton(true);
		showAddPetButton(true);
	};

	const hideUserList = () => {
		showUserList(false);
		showUserListButton(true);
		showAddPetButton(true);
	};

	const handleAddPet = () => {
		showUserList(false);
		showUserListButton(true);
		showPetList(false);
		showPetListButton(true);
		showAddPet(true);
		showAddPetButton(false);
	};
	//

	return (
		<div className="main-wrapper">
			<div className="admin-heading">Admin Panel</div>
			<div className="button-flex">
				{petListButton ? (
					<div className="admin-panel-buttons">
						<Button variant="contained" color="primary" onClick={handlePetList}>
							Show Pet List
						</Button>
					</div>
				) : (
					<div className="admin-panel-buttons">
						<Button variant="contained" color="primary" onClick={hidePetList}>
							Hide Pet List
						</Button>
					</div>
				)}

				{userListButton ? (
					<div className="admin-panel-buttons">
						<Button
							variant="contained"
							color="primary"
							onClick={handleUserList}
						>
							Show User List
						</Button>
					</div>
				) : (
					<div className="admin-panel-buttons">
						<Button variant="contained" color="primary" onClick={hideUserList}>
							Hide User List
						</Button>
					</div>
				)}
				{addPetButton && (
					<div className="admin-panel-buttons">
						<Button variant="contained" color="primary" onClick={handleAddPet}>
							Add Pet
						</Button>
					</div>
				)}
			</div>
			{petList && (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>Type</th>
							<th>Name</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{appContext.petDataArray.map((petItem) => {
							return (
								<tr key={petItem.pet_id}>
									<td>{petItem.pet_id}</td>
									<td>{petItem.petType}</td>
									<td>{petItem.petName}</td>
									<td>{petItem.petStatus}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			)}

			{userList && (
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>User ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Contact Number</th>
						</tr>
					</thead>
					<tbody>
						{appContext.userArray.map((userData) => {
							return (
								<tr key={userData.user_id}>
									<td>{userData.user_id}</td>
									<td>{userData.userFirstName}</td>
									<td>{userData.userLastName}</td>
									<td>{userData.email}</td>
									<td>{userData.userContactNumber}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			)}
			{addPet && <AddPet />}
		</div>
	);
}

export default AdminPanel;
