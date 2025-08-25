# 🎵 Music Academy

A modern and responsive **Music Academy website** built with **Next.js 14**, **Aceternity UI components**, and **Tailwind CSS v4**.
It provides a clean UI/UX for showcasing courses, instructors, and academy details with dark mode support.

---

## ✨ Features

* ⚡ Built with **Next.js (App Router)** for performance and SEO
* 🎨 **Aceternity UI components** for modern design
* 🌗 Dark mode with Tailwind (`class` strategy)
* 📱 Fully responsive design (mobile-first)
* 🖱️ Interactive Navbar with hover menus & animations
* 🎶 Course listing and academy info sections

---

## 🛠️ Tech Stack

* [Next.js 14](https://nextjs.org/) – React framework
* [Aceternity UI](https://ui.aceternity.com/) – Prebuilt UI components
* [Tailwind CSS v4](https://tailwindcss.com/) – Utility-first styling
* [Framer Motion](https://www.framer.com/motion/) – Smooth animations

---

## 📂 Project Structure

```
nextjs/
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   └── ui/
│   │       ├── moving-border.tsx
│   │       ├── navbar-menu.tsx
│   │       └── Spotlight.tsx
│   ├── data/
│   │   └── music_courses.json
│   ├── lib/
│   │   └── utils.ts
│   └── utils/
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/music-academy.git
cd music-academy
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## ⚙️ Configuration

* Tailwind dark mode is set to `class`
* Update course & academy content in `components`
* Add your branding (logo, images) inside `/public`

---

```bash
npm run build
npm run start
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit a PR.

---

## 📜 License

This project is licensed under the **MIT License**.