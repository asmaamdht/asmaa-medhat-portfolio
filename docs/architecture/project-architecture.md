# Project Architecture (MVP)

## Overview

Devfolio is a portfolio builder that allows users to create a professional portfolio through a dashboard.

The project consists of two main parts:

1. Dashboard
2. Portfolio Website

The dashboard is used to manage data, while the portfolio website displays that data to visitors.

---

## MVP Goal

The first version of Devfolio focuses on building a single portfolio template.

The user will:

* Fill in personal information.
* Add skills.
* Add projects.
* Add experience.
* Preview the portfolio.

After completing the MVP, additional templates and advanced features will be added.

---

## Architecture Philosophy

This project follows a simple and scalable architecture.

Rules:

* Keep the project organized.
* Create folders only when there is a real need.
* Separate reusable components from business features.
* Build the MVP first, then scale gradually.

---

## Folder Structure

```text
src/
│
├── app/
│
├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│   ├── ui/
│   ├── common/
│   └── layout/
│
├── features/
│
├── hooks/
│
├── layouts/
│
├── pages/
│
├── routes/
│
├── services/
│
├── styles/
│
├── types/
│
├── utils/
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

---

## Folder Responsibilities

### app/

Contains global application configuration.

Examples:

* Providers
* Context
* Global configuration

---

### assets/

Stores static assets.

Examples:

* Images
* Icons
* Fonts

---

### components/

Reusable UI components.

Examples:

* Button
* Input
* Modal
* Card
* Spinner

These components should not contain business logic.

---

### features/

Contains business logic grouped by feature.

Future examples:

* profile
* projects
* skills
* dashboard
* portfolio

Each feature owns its own components, types, services, and hooks if needed.

---

### hooks/

Reusable custom React hooks.

Examples:

* useTheme
* useLocalStorage
* useDebounce

---

### layouts/

Shared page layouts.

Examples:

* DashboardLayout
* PortfolioLayout

---

### pages/

Application pages.

Examples:

* DashboardPage
* PortfolioPage
* NotFoundPage

---

### routes/

Application routing configuration.

---

### services/

Responsible for API communication.

Examples:

* github.service.ts
* portfolio.service.ts

---

### styles/

Global styles and shared CSS files.

---

### types/

Global TypeScript types.

Examples:

* User
* Project
* Skill

---

### utils/

Utility functions.

Examples:

* formatDate()
* slugify()
* calculateYears()

---

## Development Rules

* Build the MVP first.
* Keep components reusable.
* Avoid unnecessary folders.
* Keep features isolated.
* Write clean and maintainable code.

---

## Future Improvements

After completing the MVP, the project will support:

* Multiple portfolio templates
* Authentication
* Backend integration
* Image uploads
* Resume generation
* AI-generated summaries
* Theme customization
* Portfolio sharing

