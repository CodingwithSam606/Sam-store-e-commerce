🛒 SamStore - E-Commerce Application

GitHub repo sizeGitHub starsGitHub forks

SamStore is a full-stack e-commerce web application built with React and .NET Core. It allows users to browse products by category, manage a shopping cart, and simulate a checkout process.

🚀 Features

    Product Catalog: Browse a list of products with images and detailed descriptions.
    Category Filtering: Filter products by Men's, Women's, Children's clothing, and Electronics.
    Product Modal: Click any product to see a detailed view.
    Shopping Cart: 
        Add items to cart.
        Remove individual items.
        Persistent cart state (until server restart).
    Checkout Page: Review order summary and place orders.
    Contact Page: Simple contact form for user inquiries.
    Responsive Design: Fully responsive layout using CSS Grid and Flexbox.

    
🛠️ Tech Stack
Frontend:

    React.js
    React Router (Navigation)
    Axios (API Calls)
    CSS3 (Custom Styling)

Backend:

    .NET Core (Minimal API)
    C#
    Entity Framework Core (In-Memory Database)

⚙️ Prerequisites

Before running this project, make sure you have the following installed:

    Node.js (v14 or higher) - Download Here
    .NET SDK (v6.0 or higher) - Download Here

🏃 How to Run the Project
Follow these steps to get the application running on your local machine.
1. Clone the Repository

git clone https://github.com/CodingwithSam606/Sam-store-e-commerce.git

2. Run the Backend (Server) 

Open a terminal in the project root: 

cd samstore-api
dotnet restore
dotnet run

Keep this terminal open. The API should be running on http://localhost:5149 (or similar port).

3. Run the Frontend (Client) 

Open a new terminal window: 

cd sam-store
npm install
npm start

The React app should automatically open in your browser at http://localhost:3000.


📁 Project Structure

/
├── sam-store/        # React Frontend (Client)
│   ├── src/
│   │   ├── components/  # Navbar, ProductCard, CartSidebar, etc.
│   │   ├── pages/       # Home, Checkout, Contact
│   │   └── services/    # API logic (axios)
│   └── package.json
│
├── samstore-api/     # .NET Backend (Server)
│   ├── Program.cs       # Main API logic and Database
│   └── .csproj
│
└── README.md


📸 Screenshots

![alt text](<Screenshot (243).png>) 
![alt text](<Screenshot (244).png>)


👤 Author 

Samuel Asalu 

     GitHub: @CodingwithSam606 
     

Feel free to fork this project and improve it! 
