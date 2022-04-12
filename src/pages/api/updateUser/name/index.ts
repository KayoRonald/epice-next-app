import type { NextApiResponse } from 'next'
import excuteQuery from '@/lib/db';
import { ExtendedNextApiRequest } from '@/utils/interface';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email("Email inválido.").required("Esse campo é obrigatório."),
})

export default async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body
  if ((await schema.isValid(req.body))) {
    try {
      const result: any = await excuteQuery('UPDATE `EPICEDB` SET `name` = ? WHERE `EPICEDB`.`email` = ?', [name, email]);
      res.status(200).json({
        success: true,
        data: result,
        message: `Alteração feita com sucesso! Seu nome foi alterado para ${name}`
      });
      console.log(result)
    } catch (error: any) {
      return res.status(400).json({
        error: true,
        status: 'error',
        message: error.message
      });
    }
  } else {
    return res.status(400).json({
      message: "Campos inválidos! Verifique se está tudo preenchido"
    })
  }
};
