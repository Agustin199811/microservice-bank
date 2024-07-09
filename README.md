# Spring Boot Bank Accounts using Dockerfile

This project provides a robust API for managing bank accounts, enabling functionalities such as account creation, balance inquiries, and transactions. It allows users to create new accounts, retrieve account details, and perform deposits and withdrawals. This API enhances the efficiency of banking operations by providing real-time access to account information, ensuring seamless transaction processing, and improving customer satisfaction through transparent and accessible financial services.

## Project Status

This project is currently in development and is being worked on for version 1.0.0.

## Technologies Used

- Java 17
- Spring Boot
- Maven
- MySQL
- Spring Data JPA
- Docker

## Installation and Setup

1. Clone this repository to your local machine using the following command:
    ```bash
    git clone https://github.com/Agustin199811/spring-docker-bank.git

2. Import the project into your preferred IDE (e.g., IntelliJ IDEA or Eclipse) as a Maven project.

3. Run the Spring Boot application. The application will be available at `http://localhost:8082`.
    - Navigate to the root directory of your project (where your docker-compose.yml file is located).
        - `Build the Docker Compose`:
            ```bash
             docker-compose build
        - `Run the Docker container:`
            ```bash
             docker-compose up

## Usage


The Accounts REST API exposes the following endpoints:

- `GET /accounts`: Retrieve all accounts.
- `GET /accounts/{id}`: Retrieve an account by ID.
- `POST /accounts`: Create a new account.
- `PUT /accounts/{id}/deposit`: Deposit money into an account.
- `PUT /accounts/{id}/withdraw`: Withdraw money from an account.

The Customers REST API exposes the following endpoints:

- `GET /customers`: Retrieve all customers.
- `POST /customers`: Create a new customer.

The User Auth REST API exposes the following endpoints:

- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Login with your account.

You can use tools such as Postman or cURL to send HTTP requests to these endpoints.

## Contribution

If you wish to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -am 'Add a new feature'`.
4. Push your changes to your forked repository: `git push origin my-new-feature`.
5. Create a new pull request and describe your changes in detail.

## License

This project is licensed under the MIT License. You can find more information in the `LICENSE` file.

## Contact
Authors: Toapanta Agustin; Llano Edison

If you have any questions or suggestions, feel free to contact the development team at (toapantaagustin9c@gmail.com).