CommuteWise – Smart commute analysis for business locations.
=========================

Smart commute analysis for business locations. A web application that helps users find and evaluate business locations based on distance and commute time, and fuel costs. The project integrates Google Maps APIs to provide an interactive map and autocomplete search functionality for business locations.

🚀 Features
-----------

-   **Business Search & Autocomplete:** Users can search for businesses using Google Places Autocomplete.
-   **Interactive Map:** Displays business locations on an embedded Google Map.
-   **Commute Distance & Time Calculation:** Calculates and displays the distance and estimated travel time to a selected business.
-   **Fuel Cost Estimation:** Provides an estimate of yearly fuel costs based on commute distance.
-   **Real-Time Geocoding:** Converts user search input into latitude and longitude for mapping.

📂 Project Structure
--------------------

- 📦 Yelp-Company-Case-Project
-  ┣ 📂 components
-  ┃ ┣ 📜 distance.tsx      # Calculates distance, commute time, and fuel costs
-  ┃ ┣ 📜 map.tsx           # Displays businesses on an interactive Google Map
-  ┃ ┣ 📜 places.tsx        # Handles location search and autocomplete functionality
-  ┣ 📂 pages
-  ┃ ┣ 📜 _app.tsx          # Main entry point for the Next.js application
-  ┃ ┣ 📜 index.tsx         # Homepage UI with search and map integration
-  ┣ 📂 styles              # Contains global CSS styles
-  ┣ 📜 next.config.js       # Next.js configuration
-  ┣ 📜 package.json        # Project dependencies and scripts
-  ┣ 📜 README.md           # Documentation`

🛠️ Technologies Used
---------------------

-   **Next.js** - React-based framework for frontend development.
-   **Google Maps API** - Used for displaying maps and calculating distances.
-   **Google Places Autocomplete API** - Enables dynamic location search.
-   **TypeScript** - Strongly typed JavaScript for maintainability.
-   **React Hooks** - Manages component state and side effects.

🎯 How It Works
---------------

1.  **Search for a location:** Users type in a business name or address, and suggestions appear dynamically.
2.  **View business location:** The selected location is marked on an interactive map.
3.  **Get commute details:** Distance and estimated travel time are displayed.
4.  **See fuel cost estimates:** Based on distance, fuel efficiency, and gas prices.

🖼️ Preview
-----------
## 🎥 Demo

Check out the demo video of **CommuteWise**:  
<video width="600" controls>
  <source src="https://raw.githubusercontent.com/RaghuRaikar/CommuteWise/main/CommuteWise.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>



🚀 Getting Started
------------------

### 1️⃣ Clone the repository

`git clone https://github.com/RaghuRaikar/Yelp-Company-Case-Project.git`  
`cd Yelp-Company-Case-Project`

### 2️⃣ Install dependencies

`npm install`

### 3️⃣ Start the development server

`npm run dev`

### 4️⃣ Open in browser

Go to `http://localhost:3000` to use the app.

🔮 Future Enhancements
----------------------

-   Add user reviews and ratings for businesses.
-   Implement authentication to save user preferences.
-   Optimize fuel cost calculations for multiple vehicle types.

🤝 Contributing
---------------

Contributions are welcome! Feel free to submit a pull request or open an issue.
