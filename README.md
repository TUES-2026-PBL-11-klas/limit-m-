<div align="center">

  <h1>Screen Time Tracker with Streak System</h1>
  
  <p>
    Android app that tracks daily screen time and motivates users with a streak system based on personal limits.
  </p>
</div>

<br />

## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
  * [Docker Cluster](#whale-docker-cluster)
- [Usage](#eyes-usage)
- [Roadmap](#compass-roadmap)
- [License](#warning-license)
- [Contact](#handshake-contact)

## :star2: About the Project

Screen Time Tracker with Streak System is a mobile app for Android and iOS that:

- Tracks daily screen time (with focus on social media and games).
- Lets each user set a personal daily limit.
- Builds a streak when the user stays under the limit.
- Resets the streak when the user exceeds the limit.

The goal is to help users form healthier digital habits through clear feedback and simple rules.

### :camera: Screenshots

TBD – mobile UI screenshots will be added later.

### :space_invader: Tech Stack

- **Client**: React Native (Expo)
- **Server**: Java, Spring Boot
- **Database**: PostgreSQL
- **DevOps**: Docker, Docker Compose

### :dart: Features

- **User accounts**: registration and login.
- **Daily reports**: automatic creation of a daily screen time report per user.
- **User limits**: configurable daily screen time limit per user.
- **Streak system**:
  - Streak increases when the user stays under the limit.
  - Streak resets when the user exceeds the limit.
- **Remote backend & anti-cheat friendly design** (validation on the server side).

### :key: Environment Variables

Backend (Spring Boot) expects:

- `SPRING_DATASOURCE_URL`
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `SPRING_JPA_HIBERNATE_DDL_AUTO` (optional, e.g. `update`)

When running with Docker Compose these are already provided in `docker-compose.yml`.

## :toolbox: Getting Started

### :bangbang: Prerequisites

- Node.js and npm (for the Expo/React Native frontend).
- Java 21+ (or matching your Spring Boot setup) and Maven (for the backend, if not using Docker).
- Docker & Docker Compose (for the local cluster).

### :gear: Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd limit-me
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Backend uses Maven and has no extra manual install step beyond JDK and Maven.

### :running: Run Locally

**Frontend (Expo app):**

```bash
cd frontend
npx expo start
```

**Backend (Spring Boot, without Docker):**

1. Start a local PostgreSQL instance and create a database named `screentracker`.
2. Make sure `application.properties` in `backend` has the correct DB credentials.
3. Run:

```bash
cd backend
./mvnw spring-boot:run
```

### :whale: Docker Cluster

To run the backend and PostgreSQL in a local Docker cluster:

```bash
docker compose up --build
```

This will start:

- `db`: PostgreSQL 16 with database `screentracker`.
- `backend`: Spring Boot backend on port `8080` connected to the `db` service.

## :eyes: Usage

- Create an account from the mobile app.
- Set your daily screen time limit.
- Let the app collect your daily usage data and generate reports.
- Watch your streak grow when you stay under your limit; it resets if you exceed it.

## :compass: Roadmap

- [ ] Implement user registration and login endpoints.
- [ ] Implement daily report ingestion from the mobile client.
- [ ] Implement streak calculation logic on the backend.
- [ ] Add anti-cheat checks and validations.
- [ ] Polish UI/UX and add charts for statistics.

## :warning: License

This project is currently for educational use for the OOP, RS, DB, and VOT courses.

## :handshake: Contact

Team **Kekscheta** – Screen Time Tracker project.

