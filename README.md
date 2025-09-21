# SAJH Health Monitor 🏥

A comprehensive health monitoring app built with React Native and Expo. Track your wellness journey with features for water intake, nutrition, symptom checking, medication management, and mental health monitoring.

## Features

- **🏠 Home Dashboard**: Overview of your daily health stats
- **💧 Water Tracking**: Monitor daily water intake with interactive progress tracking
- **🥗 Nutrition Guide**: Comprehensive nutrition information and meal planning tips
- **🩺 Symptom Checker**: Check symptoms and get general health guidance
- **💊 Medications**: Track medications, dosages, and schedules
- **🧠 Mental Health**: Daily mood tracking and mental wellness resources
- **💡 Health Tips**: Evidence-based health and wellness advice

## Navigation

The app features a custom sidebar menu that can be accessed by:
- Tapping the hamburger menu (☰) in the top-left corner
- The drawer automatically closes when you select a new screen
- Tap outside the drawer to close it manually

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Project Structure

```
app/
├── screens/           # Individual health feature screens
│   ├── HomeScreen.tsx
│   ├── WaterTrackingScreen.tsx
│   ├── NutritionGuideScreen.tsx
│   ├── SymptomCheckerScreen.tsx
│   ├── MedicationsScreen.tsx
│   ├── MentalHealthScreen.tsx
│   └── HealthTipsScreen.tsx
├── HealthApp.tsx      # Main app component with navigation
└── _layout.tsx        # Root layout
components/
├── CustomDrawer.tsx   # Sidebar menu component
└── ...                # Other UI components
```

## Health Disclaimer

⚠️ **Important**: This app is for informational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical concerns.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
