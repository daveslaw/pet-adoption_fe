import * as yup from "yup";

export const petSchema = yup.object().shape({
	petName: yup.string().required(),
	petType: yup.string().required(),
	petStatus: yup.string().required(),
	breed: yup.string(),
	petColor: yup.string(),
	height: yup.number().integer().positive(),
	weight: yup.number().integer().positive(),
	petBio: yup.string(),
	allergy: yup.string(),
});
