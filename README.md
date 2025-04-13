# Google Calendar Clone

A MERN application that adds events on the calendar like Google Calendar.

## Project Overview

This application lets you add, delete, update events on calendar. Built with Vite + React.js, MongoDB, and Node.js.

## Features

### 1. Add Events
- Add events on the calendar on specific date and time
- Events contains there category to identify

### 2. Drag and Drop Events
- User can drag any event and can drop at specific date and time
- Real time updation of events in database

### 3. User Experience
- Responsive design
- Real-time database updation

## Technology Stack

- **Frontend**: Vite + React
- **Backend**: Node.js
- **Database**: MongoDB
- **State Management**: React Redux and Hooks
- **Styling**: Tailwind CSS

## Installation

1. Clone the repository:
```bash
git clone https://github.com/RohitVerma2003/Google-Calendar-Clone.git
cd Google-Calendar-Clone
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

4. Seed the database with initial data:
```bash
npm run /backend/starter/goalsStarter.js
npm run /backend/starter/taskStarter.js
```

5. Start the backend development server:
```bash
npm run dev
```

6. Start the frontend development server:
```bash
cd frontend
npm run dev
```

## Development

### Building for Production
```bash
npm run build
```

### Starting Production Server
```bash
npm start
```

## Acknowledgments

- React.js team for the amazing libraray
- MongoDB team for the reliable database

## Support

For support, please create an issue in the repository or contact [RohitVerma2003](https://github.com/RohitVerma2003).

---

Built with ❤️ by [RohitVerma2003](https://github.com/RohitVerma2003)
