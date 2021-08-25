import * as yup from "yup";

export const userSchema = yup.object().shape({
	userFirstName: yup.string().required(),
	userLastName: yup.string().required(),
	newEmail: yup.string().email().required(),
	newPassword: yup.string().min(6).max(12).required(),
	userContactNumber: yup.number().integer().required().positive(),
});
