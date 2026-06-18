<p align="center">
  <img src="frontend/public/YoMessage.png" alt="YoMessage Banner" width="100%" />
</p>

<h1 align="center">YoMessage</h1>

<p align="center">
  <b>Real-time messaging app with a stunning, fully customizable UI</b><br/>
  Built with React 19 · Express 5 · Socket.IO · MongoDB · Clerk Auth
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white" alt="Express 5" />
  <img src="https://img.shields.io/badge/Socket.IO-4-010101?logo=socketdotio&logoColor=white" alt="Socket.IO" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Clerk-Auth-6C47FF?logo=clerk&logoColor=white" alt="Clerk" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white" alt="Docker" />
</p>

---

## ✨ Highlights

| Feature                      | Description                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| 💬 **Real-time Chat**        | Instant messaging powered by Socket.IO with live online/offline status indicators                     |
| 🔐 **Secure Authentication** | Clerk-based auth with webhook sync — sign up, sign in, and user management out of the box             |
| 🖼️ **Image & Video Sharing** | Send images and videos in chat with media upload to ImageKit CDN                                      |
| 🎨 **27 Theme Presets**      | Aurora, Nebula, Synthwave, Cyber, Galaxy and more — switch accent colors instantly                    |
| 🌗 **Dark / Light Mode**     | System-aware toggle with smooth transitions and persistent preference                                 |
| 🏞️ **16 Chat Wallpapers**    | Choose from world cities (Tokyo, Paris, NYC), superheroes (Batman, Spider-Man), or abstract gradients |
| ⌨️ **Keyboard Sounds**       | Optional tactile keystroke sound effects for an immersive typing experience                           |
| 📱 **Fully Responsive**      | Adaptive sidebar and chat layout — works seamlessly on mobile, tablet, and desktop                    |
| 🔍 **Conversation Search**   | Quickly filter and find contacts and active conversations                                             |
| 🐳 **Docker Ready**          | Multi-stage Dockerfile for production-ready single-container deployment                               |
| ⚡ **React Compiler**        | Babel React Compiler preset enabled for optimized re-renders                                          |
| 🩺 **Health Check + Cron**   | Built-in `/health` endpoint with a 14-minute keep-alive cron to prevent cold starts                   |

---

## 🛠️ Tech Stack

### Frontend

| Technology                                     | Purpose                                         |
| ---------------------------------------------- | ----------------------------------------------- |
| [React 19](https://react.dev)                  | UI library with latest concurrent features      |
| [Vite 8](https://vite.dev)                     | Lightning-fast dev server & bundler             |
| [React Router 8](https://reactrouter.com)      | Client-side routing                             |
| [Zustand 5](https://zustand.docs.pmnd.rs)      | Lightweight global state management (persisted) |
| [Tailwind CSS 4](https://tailwindcss.com)      | Utility-first styling                           |
| [HeroUI 3](https://heroui.com)                 | Beautifully designed React component library    |
| [Lucide React](https://lucide.dev)             | Modern icon set                                 |
| [Clerk React](https://clerk.com)               | Authentication UI components                    |
| [Socket.IO Client](https://socket.io)          | WebSocket client for real-time events           |
| [Axios](https://axios-http.com)                | HTTP client for REST API calls                  |
| [React Hot Toast](https://react-hot-toast.com) | Elegant toast notifications                     |
| React Compiler (Babel)                         | Automatic memoization and render optimization   |

### Backend

| Technology                                                                | Purpose                                                      |
| ------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [Express 5](https://expressjs.com)                                        | Web framework and REST API                                   |
| [Socket.IO 4](https://socket.io)                                          | WebSocket server for real-time bidirectional messaging       |
| [MongoDB](https://www.mongodb.com) + [Mongoose 9](https://mongoosejs.com) | NoSQL database with ODM for users and messages               |
| [Clerk Express](https://clerk.com)                                        | Server-side authentication middleware + webhook verification |
| [ImageKit](https://imagekit.io)                                           | Cloud-based image & video storage and CDN delivery           |
| [Multer](https://github.com/expressjs/multer)                             | Multipart file upload handling                               |
| [dotenv](https://github.com/motdotla/dotenv)                              | Environment variable management                              |
| [cron](https://www.npmjs.com/package/cron)                                | Scheduled health-check keep-alive job                        |

### Deployment

| Technology                                             | Purpose                                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| [Docker](https://www.docker.com)                       | Multi-stage containerized build (frontend build → backend build → slim runtime) |
| [Node 22 Bookworm Slim](https://hub.docker.com/_/node) | Lightweight production runtime image                                            |
| [MongoDB Atlas](https://www.mongodb.com/atlas)         | Managed cloud database                                                          |
| [ImageKit CDN](https://imagekit.io)                    | Global media delivery network                                                   |
| [Clerk Cloud](https://clerk.com)                       | Managed authentication service                                                  |
| Single-container monolith                              | Express serves both the API (`/api/*`) and the Vite-built SPA from `/public`    |

---

## 📁 Project Structure

```
YoMessage/
├── frontend/                    # React SPA (Vite)
│   ├── public/                  # Static assets (logo, wallpapers, sounds)
│   │   ├── YoMessage.png        # App banner image
│   │   ├── logo.png             # Favicon / logo
│   │   ├── auth.png             # Auth page hero image
│   │   ├── wallpapers/          # Chat wallpaper images
│   │   └── sounds/              # Keystroke sound effects
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/            # AuthHeader, AuthHeroPanel, AuthActionPanel, AuthCardShell
│   │   │   └── chat/            # ChatSidebar, ChatHeader, ChatComposer, MessageList, MessageBubble
│   │   ├── context/             # ThemeContext, WallpaperContext
│   │   ├── data/                # Theme presets & wallpaper definitions
│   │   ├── hooks/               # useKeyboardSound, useMediaQuery, useScrollToBottom, useSelectedConversation
│   │   ├── lib/                 # Axios instance configuration
│   │   ├── pages/               # AuthPage, ChatPage
│   │   ├── store/               # Zustand stores (useAuthStore, useChatStore)
│   │   ├── styles/              # HeroUI theme preset CSS
│   │   ├── App.jsx              # Root component with routing
│   │   ├── main.jsx             # Entry point (ClerkProvider + BrowserRouter)
│   │   └── index.css            # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/                     # Express API + Socket.IO
│   ├── src/
│   │   ├── controllers/         # auth.controller, message.controller
│   │   ├── lib/                 # db.js, socket.js, imagekit.js, cron.js
│   │   ├── middleware/          # auth.middleware (Clerk), upload.middleware (Multer)
│   │   ├── models/              # User model, Message model (Mongoose)
│   │   ├── routes/              # auth.route, message.route
│   │   ├── seeds/               # Database seed scripts
│   │   ├── webhooks/            # Clerk webhook handler (user.created, user.updated, user.deleted)
│   │   └── index.js             # Server entry point
│   └── package.json
│
├── Dockerfile                   # Multi-stage production build
├── .dockerignore
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 22
- **npm** ≥ 10
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (or local MongoDB)
- A [Clerk](https://clerk.com) application (publishable + secret keys)
- _(Optional)_ An [ImageKit](https://imagekit.io) account for media uploads

### 1. Clone the repository

```bash
git clone https://github.com/AngelixFlorez/YoMessage.git
cd YoMessage
```

### 2. Configure environment variables

**Backend** — create `backend/.env`:

```env
PORT=3000
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/YoMessage_db

CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
CLERK_WEBHOOK_SIGNING_SECRET=whsec_...

IMAGEKIT_PRIVATE_KEY=private_...

FRONTEND_URL=http://localhost:5173
FRONTEND_URL_2=http://localhost:5174
NODE_ENV=development
```

**Frontend** — create `frontend/.env`:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
```

### 3. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Run in development

Open **two terminals**:

```bash
# Terminal 1 — Backend (port 3000)
cd backend
npm run dev

# Terminal 2 — Frontend (port 5173)
cd frontend
npm run dev
```

The Vite dev server proxies `/api` requests to the backend automatically.

---

## 🐳 Docker Deployment

Build and run the production container:

```bash
docker build \
  --build-arg VITE_CLERK_PUBLISHABLE_KEY=pk_test_... \
  -t yomessage .

docker run -p 3001:3001 \
  -e MONGO_URI="mongodb+srv://..." \
  -e CLERK_PUBLISHABLE_KEY="pk_test_..." \
  -e CLERK_SECRET_KEY="sk_test_..." \
  -e CLERK_WEBHOOK_SIGNING_SECRET="whsec_..." \
  -e IMAGEKIT_PRIVATE_KEY="private_..." \
  yomessage
```

The container serves both the SPA and the API on port **3001**.

---

## 🔗 API Reference

All API routes are prefixed with `/api` and require authentication via Clerk.

| Method | Endpoint                      | Description                                                  |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| `GET`  | `/health`                     | Health check (public)                                        |
| `GET`  | `/api/auth/check`             | Verify current user session                                  |
| `GET`  | `/api/messages/users`         | List all users (excluding self)                              |
| `GET`  | `/api/messages/conversations` | List active conversations sorted by last message             |
| `GET`  | `/api/messages/:id`           | Get message history with a specific user                     |
| `POST` | `/api/messages/send/:id`      | Send a message (text and/or media via `multipart/form-data`) |
| `POST` | `/api/webhooks/clerk`         | Clerk webhook endpoint (user sync)                           |

### WebSocket Events

| Event            | Direction       | Payload                                                    |
| ---------------- | --------------- | ---------------------------------------------------------- |
| `getOnlineUsers` | Server → Client | `string[]` — array of online user IDs                      |
| `newMessage`     | Server → Client | `Message` object — incoming message for real-time delivery |

---

## 📄 License

This project is open source and available under the [ISC License](https://opensource.org/licenses/ISC).

---

<p align="center">
  Made with 💜 by <a href="https://github.com/AngelixFlorez">AngelixFlorez</a>
</p>
