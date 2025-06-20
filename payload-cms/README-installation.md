
##  `README-installation.md`

````md
#  Payload CMS – Installation Instructions

This file outlines how to install and run the Payload CMS project locally.

## ⚙️ Prerequisites

Before starting, ensure you have the following installed:

- **Node.js**: v18.20.2 or Node 20.9.0+
- **pnpm**: v9 or v10+
- **MongoDB Atlas account** *(free tier is fine)*

````

## Project Setup

1. **Clone the repository**

```bash
git clone https://github.com/arsumelahi21/payload-lexical-editor-challenge
cd payload-lexical-editor-challenge/payload-cms
````

2. **Install dependencies**

```bash
pnpm install
```

3. **Start the development server**

```bash
pnpm dev
```

The Payload Admin UI will be available at:

```
http://localhost:3000/admin
```

You can create your first admin user from the login screen.

---

##  Environment Variables

A `.env` file is **included in this repository** containing a **MongoDB connection string**.

This connection string was generated via **MongoDB Atlas**. It is a **testing database**, created specifically for this challenge.


>  No additional setup is required — you can immediately boot the app and interact with Payload CMS and MongoDB.

---
