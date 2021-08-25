const yup = require("yup");

export const loginSchema = yup.object().shape({
	password: yup.string().required(),
	email: yup.string().email().required(),
});
