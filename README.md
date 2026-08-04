# Skyscanner Backpack Flight Scheduler

A React web application built with Skyscanner's Backpack design system for selecting flight dates.

## 🚀 Features

- **Flight Schedule Interface**: Clean, professional header with Backpack styling
- **Interactive Calendar**: Full-featured Backpack calendar component for date selection
- **Continue Button**: Call-to-action button positioned below the calendar
- **Responsive Design**: Mobile-friendly layout with proper spacing
- **React State Management**: Uses `useState` for date selection management
- **Comprehensive Testing**: Full test suite with Jest and React Testing Library

## 🛠️ Built With

- **React 17.0.2**: Modern React with hooks
- **Skyscanner Backpack**: Official design system components
  - `bpk-component-calendar`: Calendar functionality
  - `bpk-component-button`: Styled buttons
  - `bpk-component-text`: Typography
- **SCSS**: Styled with Backpack mixins and variables
- **Jest & React Testing Library**: Complete test coverage

## 📦 Installation

This project was created using the official Skyscanner Backpack template:

```bash
npx create-react-app@3.4.1 my-app --scripts-version=@skyscanner/backpack-react-scripts --template @skyscanner/backpack --use-npm
```

### Dependencies

```bash
npm install bpk-component-calendar --save-dev
```

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayoub-glitsh/skyscanner-backpack-flight-scheduler.git
   cd skyscanner-backpack-flight-scheduler
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run tests**
   ```bash
   npm test
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🧪 Testing

The application includes comprehensive tests:

- ✅ Component renders without crashing
- ✅ "Flight Schedule" title is displayed
- ✅ "Continue" button is present and functional
- ✅ Calendar component is rendered with navigation

Run tests with:
```bash
npm test
```

## 📁 Project Structure

```
src/
├── App.js          # Main application component
├── App.scss        # Styles using Backpack mixins
├── App.test.js     # Jest tests
├── setupTests.js   # Test configuration
└── index.js        # React entry point
```

## 🎨 Components Used

### BpkCalendar
- Full date selection functionality
- Custom date formatting utilities
- Minimum date restriction (today onwards)
- Week starts on Monday configuration

### BpkButton
- Continue action button
- Backpack styling and interactions

### BpkText
- "Flight Schedule" heading
- Proper typography sizing (xxl style)

## 🔧 Configuration

### Date Formatting
Custom utility functions for Backpack calendar:
- `formatMonth()`: Month and year display
- `formatDateFull()`: Complete date description
- `daysOfWeek[]`: Week configuration array

### Styling
SCSS with Backpack mixins:
- Responsive breakpoints
- Backpack color schemes
- Proper spacing using Backpack variables

## 📱 Responsive Design

- Desktop: Full calendar width with proper margins
- Mobile: Optimized layout with reduced padding
- Tablet: Adaptive spacing and component sizing

## 🔗 Links

- [Skyscanner Backpack Documentation](https://www.skyscanner.design/)
- [Backpack GitHub Repository](https://github.com/Skyscanner/backpack)
- [Create React App Documentation](https://create-react-app.dev/)

## 🏆 Job Simulation

This project was built as part of a Skyscanner job simulation, demonstrating:
- Professional React development practices
- Skyscanner Backpack design system expertise
- Component integration and state management
- Test-driven development approach
- Modern frontend development workflows

---

Built with ❤️ using Skyscanner Backpack Design System