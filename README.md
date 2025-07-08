# Weather UI

A modern React application that provides a user-friendly interface for the Weather API. This application allows users to search for addresses and get weather forecasts with a beautiful, responsive UI built with Next.js, Chakra UI, and React Query.

## 🚀 Features

- 🔐 **JWT Authentication** - Secure login with the Weather API
- 📍 **Address Search** - Real-time address suggestions as you type
- 🌤️ **Weather Forecast** - 7-day forecast with weather icons
- 🎨 **Modern UI** - Beautiful interface built with Chakra UI
- ⚡ **Performance** - Optimized with React Query for caching and state management
- 📱 **Responsive** - Works perfectly on desktop and mobile devices

## 🛠 Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Chakra UI](https://chakra-ui.com/) - Component library
- [React Query](https://tanstack.com/query) - Data fetching and caching
- [date-fns](https://date-fns.org/) - Date formatting
- [Framer Motion](https://www.framer.com/motion/) - Animations

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── address-Input.tsx      # Address input with suggestions
│   ├── context/
│   │   ├── weather-context.tsx    # Weather context definition
│   │   └── weather-provider.tsx   # Weather context provider
│   ├── hooks/
│   │   ├── useWeather.ts          # Custom hook for weather context
│   │   └── wheater-api/queries/
│   │       ├── use-weather-suggestions.ts  # Address suggestions query
│   │       └── use-weather-forecast.ts     # Weather forecast query
│   ├── services/
│   │   └── weather.service.ts     # API service layer
│   ├── utils/
│   │   ├── constants/constants.ts # Weather icons and headers
│   │   ├── helpers/date.helper.ts # Date formatting helper
│   │   └── types/
│   │       └── weather.type.ts    # TypeScript interfaces
│   ├── weather/
│   │   └── components/
│   │       └── weather-forecast/
│   │           └── weather-forecast.tsx    # Weather forecast card
│   ├── providers/
│   │   └── index.tsx              # App-level providers
│   └── layout.tsx                 # Root layout
```

## 🌦️ Weather Context Architecture

The app uses a global context to manage the selected location and its weather forecast. This allows any component to access or update the current location and forecast data.

- **Context:** `WeatherContext` provides `{ location, setLocation, forecast }`.
- **Provider:** `WeatherProvider` wraps the entire app and manages state and data fetching.
- **Custom Hook:** `useWeather()` is used to access the context in any component.

### Example Usage
```tsx
import { useWeather } from '@/app/hooks/useWeather';

const MyComponent = () => {
  const { location, forecast, setLocation } = useWeather();
  // ...
};
```

## 🔍 Address Search & Suggestions

The `AddressInput` component provides real-time suggestions as you type, using a debounced query. Selecting a suggestion updates the global context and triggers a forecast fetch.

- **Debounced input** (300ms)
- **Loading and error states**
- **Click to select a suggestion**

## 📅 Weather Forecast Display

The `WeatherForecast` component displays a 7-day forecast for the selected location. Each card shows:
- Formatted date (e.g., "25 de junio de 2024")
- Current, min, and max temperature
- Precipitation
- A large weather icon on the right, based on the forecast type

### Weather Icons
The icons are mapped in `src/app/utils/constants/constants.ts`:

```
export const WEATHER_ICONS = {
  clear: '☀️',
  cloudy: '☁️',
  rainy: '🌧️',
  snowy: '❄️',
  stormy: '⛈️',
};
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Weather API running on `http://localhost:3000`

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
```

2. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

3. **Start the development server:**
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3001`

## 🔐 Authentication

The application requires authentication with the Weather API. Use these default credentials:

- **Username:** `admin` | **Password:** `password`
- **Username:** `user` | **Password:** `password`

## 📱 Usage

1. **Login** - Enter your credentials to authenticate with the Weather API
2. **Search Addresses** - Start typing an address in the input field
3. **View Suggestions** - Real-time suggestions will appear as you type
4. **Select Location** - Click on a suggestion to select it
5. **View Forecast** - The 7-day weather forecast will be displayed with icons

## 🔧 API Integration

The application integrates with the Weather API endpoints:

- `POST /auth/login` - Authentication
- `GET /geocoding/suggestions` - Address suggestions (requires auth)
- `GET /weather/forecast` - Weather forecast (requires auth)

## 🎨 UI Components

### AddressInput
A smart input component that:
- Shows real-time suggestions as you type
- Debounces API calls (300ms delay)
- Displays loading states
- Handles errors gracefully
- Closes on outside click
- Updates the global weather context

### WeatherForecast
A forecast card that:
- Shows the selected location
- Displays a 7-day forecast with formatted dates
- Shows a large weather icon for each day
- Uses a responsive, modern layout

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Environment Variables

Make sure to set the correct API URL for your production environment:

```env
NEXT_PUBLIC_API_URL=https://your-weather-api.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.


