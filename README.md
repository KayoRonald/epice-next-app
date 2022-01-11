<h1 align="center">
    <strong>Epice</strong>
</h1>
<p align="center">
Aplicações demonstradas/desenvolvidas no EPICE 2021
</p>
<p align="center">
    <img src="public/img/svg/undraw_everywhere_together_bdmn.svg" alt="Epice" width="450"/>
</p>

O 'EPICE' é um evento que ocorre anualmente sempre trazendo novas pessoas de varias áreas da informática, sempre levando um pouco de conhecimento para os novatos que estão chegando e para aqueles que estão saindo. Epice, aprendizado contínuo.

## 🤔 **Como contribuir?**

- Faça um `fork` desse repositório;
  
- Cria uma `branch` com a sua feature: `git checkout -b minha-feature`;
  
- Faça `commit` das suas alterações: `git commit -m 'feat: Minha nova feature'`;

- Faça push para a sua branch: `git push origin minha-feature`.

### **💻 Tecnologias e Dependência**

Esse projeto foi feito utilizando as seguintes tecnologias:

> - **[Nextjs](https://nextjs.org/)**
>
> - **[Chakra-ui](https://chakra-ui.com/)**
>
> - **[Styled Components](https://styled-components.com/)**
>  
> - **[TypeScript](https://www.typescriptlang.org/)**
>
> - **[serverless-mysql](https://www.serverless.com/plugins/serverless-mysql)**
>
> - **[nodemailer](https://nodemailer.com/about/)**

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

Caso você queira, podera ser usado o yarn ou npm. 

```bash
yarn 
```
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

## 🎲 Banco de dados

Para realizar a conexão com banco de daod, basta alterar essas informações ou usar os serviços do remoteMySql

```ts
// conexão com banco de daods: https://www.remotemysql.com/phpmyadmin/
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
No arquivo `api/subscription/index.tsx`, é onde vai ser feito o cadastro dos usuários.
```ts
  try {
    const results = await db.query(
      `INSERT INTO EPICEDB (name,email,curso) VALUES('${name}', '${email}', '${curso}')`
    );
    await db.end();
    console.log(results)
    return res.status(200).send('')
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Falha na conexão code erro `EMAIL-300`' });
  }
};
```
## 🖥️ gitpod

Comece com seu próprio projeto usando o gitpod

<p align="center">
  <a href="https://gitpod.io/#https://github.com/gitpod-io/template-python-django">
    <img src="https://gitpod.io/button/open-in-gitpod.svg" />
    <h3 align="center">gitpod</h3>
  </a>
</p>

<hr/>


<p align="center">
  <img src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png" width="100" title="Nextjs">
  <img src="github/typescript.png" width="100" alt="TypeScript" title="TypeScript">
  <img src="github/chakra-ui.png" width="100" alt="chakra" title="chakra"
</p>

### 📝 **Licença**
Esse projeto está sobre a licença MIT. Veja o arquivo **[LICENSE](LICENSE)** para mais detalhes.
