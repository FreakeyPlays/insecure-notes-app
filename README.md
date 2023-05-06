<p align="center">
  <a href="https://www.hs-esslingen.de/" target="blank"><img src="https://www.hs-esslingen.de/typo3conf/ext/he_templates/Resources/Public/img/logo_claim_de.svg" width="300" alt="HSE Logo" /></a>
</p>

# Insecure Notes Application

## 📌 - Description

This Insecure notes Application was made in the IT Security course at HS-Esslingen.
The Technology used in this Project is VueJS, NestJS and PostgresSQL.

This project sets up a Basic frontend with a Login and Register Page and a Notes Page.
The Backend has endpoints for all CRUD operations for the Notes and the Users.
To get a overview of the API you can have a look in the `*.controller.ts` files in the backend directory.
The Database will be empty on first start, but you can create a User via the SignUp Page.

**⚠️ Warning:** This Project is a insecure Application and should not be used in Production.
All Insecurities are inserted on purpose to learn how to avoid them.
This Project is only for educational purposes.

## 🐋 - Docker Installation

1. Install and Start Docker
2. Navigate to the root directory of the Project

```bash
cd insecure-notes-app
```

3. Create a `.env` file in the root directory with the Data from the `.env.sample` file
4. Run `docker-compose up` in the root directory
5. Open `http://localhost:8080` in your Browser (Or change the Port to your liking in the `.env` file)

## ⚙️ - Dev Installation

1. Clone the Repository

```bash
git clone https://github.com/FreakeyPlays/insecure-notes-app.git
```

2. Install a PostgreSQL Database

3. Navigate to the root directory of the Project

```bash
cd insecure-notes-app
```

4. Install the Dependencies of frontend and backend (in the corresponding directories)

```bash
npm install
```

5. Create a `.env` file in the backend directory with the Data from the `.env.sample` file and the Data of the installed Database
6. Start the backend

```bash
npm run start:dev
```

7. Start the frontend

```bash
npm run serve
```

8. Open `http://localhost:8080` in your Browser
