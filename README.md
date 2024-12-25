# FoodOrdering

FoodOrdering is a React-based web application that allows users to browse, select, and order food from various restaurants. The application provides a seamless and user-friendly interface for food ordering.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- Browse restaurants and their menus
- Add items to the cart
- Remove items from the cart
- Clear the cart
- Search for restaurants
- Filter top-rated restaurants
- View restaurant details and menu

## Technologies Used
- **Frontend**: React, JavaScript, CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **API**: Fetch API

## Installation

### Prerequisites
- Node.js and npm

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/shreyxs9/FoodOrdering.git
   cd FoodOrdering
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
To start the development server, run:
```bash
npm start
```
This will start the application on `http://localhost:3000`.

## Project Structure
- `src/`: Contains the main source code for the application.
  - `App.jsx`: Main application component.
  - `Body.jsx`: Component for displaying the list of restaurants and search functionality.
  - `CatItems.jsx`: Component for displaying individual menu items and adding them to the cart.
  - `Grocery.jsx`: Component for displaying grocery items (placeholder).
  - `Header.jsx`: Component for the application header.
  - `RestrauntMenu.jsx`: Component for displaying the restaurant menu.
  - `ResCategory.jsx`: Component for displaying restaurant categories.
  - `Shimmer.jsx`: Component for displaying loading shimmer effect.
- `utils/`: Contains utility files and Redux slices.
  - `appStore.js`: Configures the Redux store.
  - `cartSlice.js`: Redux slice for managing cart state.
  - `useRestrauntMenu.js`: Custom hook for fetching restaurant menu data.
  - `useOnlineStatus.js`: Custom hook for checking online status.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or feedback, please contact:
- Your Name: [your-email@example.com](mailto:your-email@example.com)
- GitHub: [your-username](https://github.com/your-username)
