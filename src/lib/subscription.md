```ts
import type { NextApiResponse } from 'next'
import * as yup from 'yup'
import excuteQuery from '@/lib/db';
import { ExtendedNextApiRequest } from '@/utils/interface';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email("Email inválido.").required("Esse campo é obrigatório."),
  curso: yup.string()
})

export default async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { name, email, curso } = req.body
  if ((await schema.isValid(req.body))) {
    try {
      const result: any = await excuteQuery('INSERT INTO EPICEDB (name, email, curso) VALUES (?)', [[name, email, curso]]);
      res.status(200).json({
        success: true,
        data: result,
        message: `Inscrição realizada com sucesso!`
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
    });
  }
}
```


```ts
import type { NextApiResponse } from 'next'
import excuteQuery from '@/lib/db';
import { ExtendedNextApiRequest } from '@/utils/interface'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().email("Email inválido.").required("Esse campo é obrigatório."),
})

export default async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { email } = req.body
  if ((await schema.isValid(req.body))) {

    try {
      const result: any = await excuteQuery('DELETE FROM `EPICEDB` WHERE `EPICEDB`.`email` = ?', [email]);
      res.status(200).json({
        success: true,
        data: result,
        message: "Deletada com sucesso! Apagamos todos seus dados de nosso banco"
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
    });
  }
};
```

## Atualizar o curso do usuário

```ts
import type { NextApiResponse } from 'next'
import excuteQuery from '@/lib/db';
import { ExtendedNextApiRequest } from '@/utils/interface';
import *as yup from 'yup'
const schema = yup.object().shape({
  email: yup.string().email("Email inválido.").required("Esse campo é obrigatório."),
  curso: yup.string()
})
export default async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  const { curso, email } = req.body
  if ((await schema.isValid(req.body))) {
    try {
      const result: any = await excuteQuery('UPDATE `EPICEDB` SET `curso` = ? WHERE `EPICEDB`.`email` = ?', [curso, email]);
      res.status(200).json({
        success: true,
        data: result,
        message: `Alteração feita com sucesso!`
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
    });
  }
};
```