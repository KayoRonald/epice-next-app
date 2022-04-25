<h1 align="center">
    <strong>EPICE</strong>
</h1>
<p align="center">
Aplicações demonstradas/desenvolvidas no EPICE 2022
</p>
<p align="center">
    <img src="public/img/svg/undraw_everywhere_together_bdmn.svg" alt="EPICE" width="450"/>
</p>

O 'EPICE' é um evento que ocorre anualmente sempre trazendo novas pessoas de várias áreas da informática, sempre levando um pouco de conhecimento para os novatos que estão chegando e para aqueles que estão saindo. Epice, aprendizado contínuo.

## 🤔 **Como contribuir?**

- Faça um `fork` desse repositório;
  
- Cria uma `branch` com a sua feature: `git checkout -b minha-feature`;
  
- Faça `commit` das suas alterações: `git commit -m 'feat: Minha nova feature'`;

- Faça push para a sua branch: `git push origin minha-feature`.

### **💻 Tecnologias e Dependência**

Esse projeto foi feito utilizando as seguintes tecnologias:

| Tecnologias | Sites |
| ------ | ------ |
| Nextjs | https://nextjs.org/ |
| Chakra-ui | https://chakra-ui.com/ |
| Styled Components | https://styled-components.com |
| serverless | https://www.serverless.com/plugins/serverless-mysql |
| nodemailer | https://nodemailer.com/about/ |
| TypeScript | https://www.typescriptlang.org/ |

<hr/>

### 🚀 **Como rodar o projeto?**

 **Pré-requisito**
 
<blockquote>

- É necessário possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador (recomendado a versão LTS).

- Também, é preciso ter um gerenciador de pacotes o npm e npx já vem por padrão ao instalar o node.j ou **[Yarn](https://www.npmjs.com/package/yarn)**.

- É necessário possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador.
  
</blockquote>

<br/>

**1. Faça um clone do repositório:**

```bash 
  https://github.com/KayoRonald/epice-next-app/
```

**2. Executando a Aplicação:**

Abrindo o terminal, você pode executar o seguinte comando para entrar no diretório do projeto:

```bash
  cd epice-next-app
```

**3. Como instalar as dependências**
Nesse caso, você pode usar o yarn ou npm para instalar e rodar a aplicação.

```bash
yarn 
```
Mas se for usar o npm, e for mandar uma pullrequest, lembre-se de apagar o aqruivo package-lock.json (por causa da vercel, que vai mandar apagar)
```bash
npm install
```

**4. Como rodar o projeto**

```bash
yarn dev
```
```bash
npm run dev
```

<hr/>

## 🎲 Banco de dados e Nodemailer
 
### Banco de dados:
Você pode criar uma conta no site: [remotemysql](remotemysql.com), e usar o banco de dados que ele oferece. E colocar suas credenciais no arquivo `.env` na riaz de seu projeto.

Para realizar a conexão com banco de dados, basta alterar essas informações ou usar os serviços do remoteMySql
```.env
# conexão com banco de dado
MYSQL_HOST=
MYSQL_DATABASE=
MYSQL_USER=
MYSQL_PASSWORD=
```
Conexão com a base de dados
```ts
// conexão com banco de dados: https://www.remotemysql.com/phpmyadmin/
import mysql from 'serverless-mysql';
export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});
```

### Nodemailer
Para utilizar o email é necessário usar o [oauth2](https://dev.to/chandrapantachhetri/sending-emails-securely-using-node-js-nodemailer-smtp-gmail-and-oauth2-g3a). Depois você pode configurar o projeto usando suas credenciais, ou usar outro sistema de envio de email como a sendgrid.
```.env
EMAIL=YOUR_GOOGLE_EMAIL_HERE
REFRESH_TOKEN=PASTE_REFRESH_TOKEN_HERE
CLIENT_SECRET=PASTE_CLIENT_SECRET_HERE
CLIENT_ID=PASTE_CLIENT_ID_HERE
```

Para evitar ataques de sql injection, foi retirado essa maneira de passar diretamente pela váriavel os valores

```ts
const result: any = await db.query('INSERT INTO EPICEDB (name,email,curso) VALUES('${name}', '${email}', '${curso}')'
```
Para evitar esses ataques, você pode mapear valores na matriz para espaços reservados (os pontos de interrogação) na mesma ordem em que são passados.

```ts
const result: any = await excuteQuery('INSERT INTO EPICEDB (name, email, curso) VALUES (?)', [[name, email, curso]]);
```
Para evitar a repetição de código, foi criada a função excuteQuery. 
Onde recebe as querys passadas no arquivo `api/subscription/index.tsx`, como exemplo. Logo em seguida, 
podemos executar ou mostrra uma mensagem de erro
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
    return results
  } catch (error: any) {
    if (error.code === 'ER_DUP_ENTRY') {
      throw Error('Esse endereço de email já está em uso')
    }
    throw Error('Ops... Ocorreu algum erro :(')
  }
}
```

## 🖥️ gitpod

Comece com seu próprio projeto usando o gitpod

<p align="center">
  <a href="https://gitpod.io/#https://github.com/KayoRonald/epice-next-app">
    <img src="https://gitpod.io/button/open-in-gitpod.svg" />
    <h3 align="center">gitpod</h3>
  </a>
</p>

<hr/>


<p align="center">
  <img src="img/nextjs.png" width="100" title="Nextjs">
  <img src="img/typescript.png" width="100" alt="TypeScript" title="TypeScript">
  <img src="img/chakra-ui.png" width="100" alt="chakra" title="chakra"
</p>

### 📝 **Licença**
Esse projeto está sobre a licença MIT. Veja o arquivo **[LICENSE](LICENSE)** para mais detalhes.
