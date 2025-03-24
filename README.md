# Naath Archive

Naath Archive is a web application designed to preserve and showcase cultural heritage. This project is built using React, Vite, and Tailwind CSS.

## Project Structure

```plaintext
naath-archive/
├── .git/
├── .github/
│   └── workflows/
│       └── ci.yml
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── CTA.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── WaitingListForm.jsx
│   │   └── ui/
│   │       ├── button.jsx
│   │       └── switch.jsx
│   ├── hooks/
│   │   └── useTheme.js
│   ├── lib/
│   │   ├── mongodb.js
│   │   └── utils.js
├── .env
├── .gitignore
├── counter.js
├── index.html
├── javascript.svg
├── main.js
├── package.json
├── postcss.config.js
├── README.md
├── style.css
├── tailwind.config.js
└── vite.config.js


$$

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/naath-archive.git
   cd naath-archive
   ```

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a .env file in the root directory and add your MongoDB URI:

   ```sh
   VITE_MONGODB_URI=your_mongodb_uri
   ```

3. Running the Development Server:

   ```sh
   npm run dev
   ```

4. Building for Production:

   ```sh
   npm run build
   ```

5. Previewing the Production Build:

   ```sh
   npm run preview
   ```

### `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run build
        run: npm run build

      - name: Run tests
        run: npm test
```

1. License

    This project is licensed under the MIT License.
