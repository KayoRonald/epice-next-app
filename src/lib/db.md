```ts
import { db } from '../connection';

export default async function excuteQuery(query: any, values: any) {
  try {
    const results = await db.transaction()
      .query(query, values)
      .query((rows: any) => {
        if (rows.affectedRows == 0) {
          throw Error('Este email não existe em nosso banco de dados')
        }
      })
      .commit();// execute the queries
    console.log(results)
    return results
  } catch (error: any) {
    console.log(error)
    console.log(error.code)
    if (error.code === 'ER_DUP_ENTRY') {
      throw Error('Esse endereço de email já está em uso')
    }
    throw Error('Ops... Ocorreu algum erro :(')
  }
}
```