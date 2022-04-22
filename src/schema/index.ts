import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Esse campo é obrigatório."),
  email: yup.string().email("Email inválido.").required("Esse campo é obrigatório."),
  curso: yup.string().required("Esse campo é obrigatório."),
})