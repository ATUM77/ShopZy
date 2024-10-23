
# ShopZy - E-commerce Platform

## Overview

**ShopZy** is a modern, Angular-based e-commerce web application designed to provide a seamless and user-friendly shopping experience. The project serves as a robust foundation for building scalable, interactive online stores using a powerful frontend architecture. With its component-driven design, ShopZy allows for modular development, making it ideal for both small- and large-scale e-commerce websites.

## Key Features

- **Product Listings**: Users can browse a wide variety of products, categorized for easy navigation. Each product listing includes images, descriptions, and prices.
- **Product Categories & Subcategories**: Users can filter products based on categories and subcategories, dynamically loading the relevant items.
- **Cart and Checkout System**: A fully functional shopping cart that allows users to add, remove, and manage products before proceeding to checkout.
- **User Authentication**: Secure login, registration, and profile management, including the ability to update user details and view order history.
- **Cart Persistence**: Cart items are maintained for logged-in users, even after logging out and back in.
- **Responsive Design**: The UI is optimized for various screen sizes, ensuring a great experience on both desktop and mobile devices.
- **Admin Dashboard (Future)**: A dedicated admin interface for managing products, categories, orders, and users.
- **Scalable Architecture**: Built with Angular’s modular structure, making it easy to extend and scale as the project grows.

## Technology Stack

- **Frontend**: 
  - Angular 18 (with TypeScript)
  - HTML5
  - CSS3
  - Bootstrap 5 for responsive design
- **Backend** (not included, but designed for integration):
  - Node.js (or any backend that supports REST API integration)
  - JWT-based authentication
- **Testing**:
  - Karma for unit testing
  - Protractor for end-to-end testing (optional)
- **Build Tools**: Angular CLI for scaffolding, building, and running the project locally.

## Installation and Setup

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (version 14 or higher)
- **Angular CLI**

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ATUM77/ShopZy.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ShopZy
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   ng serve --port 4209
   ```

5. Open your browser and go to: [http://localhost:4209]
(http://localhost:4209).

## Code Structure

The project follows Angular’s modular structure, dividing key features into distinct modules and components:

- **Pages Module**: Handles different pages like products, categories, cart, and more.
  - **ProductComponent**: Responsible for displaying individual product details and product listings. Includes logic for filtering products based on categories.
  - **CategoryProductsComponent**: Displays products filtered by category, with dynamic route-based navigation to different categories.
  - **CartComponent**: Manages the shopping cart, including adding/removing items, and proceeding to the checkout.
  - **AuthComponent**: Manages user authentication (login, registration, and profile management).
  
- **Services Module**: Handles the communication with the backend APIs.
  - **ProductService**: Fetches product and category data, manages cart operations, and interacts with the backend to update products and categories.
  - **LoginService**: Manages user authentication, including login, registration, and token handling.

- **Shared Module**: Contains reusable components and services.
  - **CardComponent**: A reusable product card used across various sections of the app.
  - **OfferCardComponent**: A specialized component to display promotional offers.
  
- **Routing**: 
  - **Dynamic Route Navigation**: For categories and products, leveraging Angular Router to navigate based on dynamic category/product IDs.
  - Example: `/products/:id` for category-specific product listings.

## User Flows

- **Product Browsing**: 
  - Users can browse products through categories listed in a dropdown. Clicking on a category dynamically loads products based on category ID.
  - Product filtering occurs using services to fetch relevant products based on user interactions.

- **Add to Cart and Checkout**:
  - Products can be added to the cart via a dedicated “Add to Cart” button. 
  - Users can review items, adjust quantities, and proceed to checkout.

- **User Authentication**:
  - Users can register, log in, and manage their profile. Session persistence is handled via JWT tokens stored in the browser’s session storage.

## API Integration (Backend)

The project integrates with a RESTful backend via various API endpoints, with `ProductService` managing these operations. API endpoints include:
- **Products**: Fetch, add, update, delete products.
- **Categories**: Fetch categories and subcategories.
- **Cart**: Add, remove, and fetch cart items.
- **Authentication**: Login, registration, and user profile management.
  
## Future Enhancements

1. **Admin Dashboard**:
   - A dashboard for admins to manage products, categories, users, and orders.
   - CRUD functionality for adding, updating, and removing products and categories.

2. **Payment Gateway Integration**:
   - Integrate payment gateways like PayPal or Stripe for secure payments.
   - Include order confirmation and email notifications.

3. **Wishlist Functionality**:
   - Allow users to save products to a wishlist for future reference.

4. **Order History and Tracking**:
   - Users can track the status of their orders and view past purchases.

5. **Improved Search and Filtering**:
   - Add advanced product filtering options (price range, ratings, etc.) and a global search feature.

## Contributing

Contributions are welcome! If you’d like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

Make sure to write clear, concise commit messages and include documentation for new features.

### Team Members:
- أحمد محمد عبد العليم
- أحمد محمود عبد اللطيف
- رانا جمال أحمد
- رنا عادل فرج
- محمود أحمد محمد
- نهال محمد جلال