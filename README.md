# LocalCause | Digital Homes for Local Heroes

> **"Because those who help everyone else deserve a home too."**

## 🌍 The Mission

Local non-profit organizations are the backbone of our communities. They feed the hungry, rescue animals, support the
elderly, and clean our environment. Yet, many of them struggle with a fundamental digital challenge: **Visibility**.

Existing website solutions are often:

* **Too Expensive**: Recurring monthly fees for Wix/Squarespace eat into donation funds.
* **Too Complex**: WordPress requires constant maintenance, security updates, and plugins.
* **Too Technical**: Custom code is unmaintainable by volunteers.

**LocalCause** solves this by providing a **Digital Infrastructure Factory** for local heroes.

---

## 🏗️ The Solution: "Zero-Cost, Zero-Maintenance"

This project is a **White Label Website Starter** designed specifically for non-profits. It is built on a modern "
Git-backed" architecture that ensures:

1. **Zero Hosting Costs**: Deploys to Vercel's Hobby Tier (free forever for non-profit use).
2. **Zero Maintenance**: No database to manage, no plugins to update. It is a static site with a visual editing layer.
3. **100% Editable**: Utilizing **TinaCMS**, volunteers can edit text, upload images, and change colors directly on the
   page—no coding required.

### Tech Stack

* **Framework**: Next.js 15 (App Router)
* **CMS**: TinaCMS (Git-backed content management)
* **Styling**: Tailwind CSS
* **Icons**: Lucide React

---

## 🚀 Getting Started

### Prerequisites

This project requires **Node.js v20 (LTS)**. An `.nvmrc` file is included for convenience.

If you use **nvm**, simply run:

```bash
nvm use
```

If you are on macOS and encounter errors with `better-sqlite3`, ensure you have the Xcode Command Line Tools installed:

```bash
xcode-select --install
```

### Local Development

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nunosilva-dev/localcause-starter.git
   cd localcause-starter
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   This starts both the Next.js app and the TinaCMS local server.

4. **Access the Admin Interface**
   Open [http://localhost:3000/admin](http://localhost:3000/admin) to start editing content locally.

---

## ☁️ Production & Tina Cloud

To enable visual editing for your organization on the live website:

1. **Create a Tina Cloud Project**: Connect your GitHub repository at [app.tina.io](https://app.tina.io).
2. **Environment Variables**: Add your `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` to your Vercel project.
3. **Invite Editors**: Invite the non-profit's staff as "Editors" in the Tina Cloud dashboard so they can manage the
   site without technical knowledge.

---

## 🎨 Customization Guide

This starter is a **White Label** product. You can transform it for *any* organization in minutes.

### 1. Brand Identity

Go to **Global Settings** in the Admin panel:

* **Brand Color**: Pick a HEX color. The entire site (buttons, highlights, links) will instantly adapt.
* **Logo**: Upload the organization's logo.
* **Organization Name**: Used in footer and metadata.

### 2. Donation Block

The Donation section is dynamic and high-contrast:

* **Toggle Visibility**: Turn it off if the org isn't ready to accept donations.
* **Methods**: Add unlimited donation methods (IBAN, MBWay, PayPal, etc.).

---

*Built with ❤️ by the LocalCause Community. Based in Portugal.*