import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";

function ProfileSettings() {
	return (
		<>
			<Paper elevation={3} className="paper profile-settings">
				<h1>Profile Settings</h1>
				<div className="form-spacing-parent">
					<div className="form-spacing-child">
						<TextField
							required
							id="standard-required"
							label="Email"
							placeholder="email@example.com"
						/>
					</div>

					<div className="form-spacing-child">
						<TextField
							id="standard-password-input"
							label="Password"
							type="password"
							autoComplete="current-password"
						/>
					</div>

					<div className="form-spacing-child">
						<TextField
							id="standard-password-input"
							label="Password"
							type="password"
							autoComplete="current-password"
						/>
					</div>

					<div>
						<div className="form-spacing-child">
							<TextField
								required
								id="standard-required"
								label="First Name"
								className="form-spacing-child"
							/>
						</div>
						<div className="form-spacing-child">
							<TextField
								required
								id="standard-required"
								label="Last Name"
								className="form-spacing-child"
							/>
						</div>
					</div>
					<div className="form-spacing-child">
						<TextField required id="standard-required" label="Phone Number" />
					</div>
				</div>

				<Button
					variant="contained"
					color="primary"
					size="small"
					// className={classes.button}
					startIcon={<SaveIcon />}
				>
					Save
				</Button>
			</Paper>
		</>
	);
}

export default ProfileSettings;
