# Alias Imports

## What is an Alias?

An Alias is a shortcut for a file or folder path.

Instead of writing long relative paths like:

```tsx
import Sidebar from "../../../components/dashboard/Sidebar/Sidebar";
```

we can write:

```tsx
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
```

Here:

`@` points to the `src` folder.

---

## Why do we use Alias?

As projects grow, files become deeply nested.

For example:

```text
src/
├── components/
│   └── dashboard/
│       └── Sidebar/
│           └── Sidebar.tsx
│
├── layouts/
│   └── DashboardLayout.tsx
```

Without Alias:

```tsx
import Sidebar from "../components/dashboard/Sidebar/Sidebar";
```

If DashboardLayout moves to another folder:

```text
src/
├── layouts/
│   └── dashboard/
│       └── DashboardLayout.tsx
```

The import becomes:

```tsx
import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
```

If the file moves again:

```tsx
import Sidebar from "../../../components/dashboard/Sidebar/Sidebar";
```

The path keeps changing.

With Alias:

```tsx
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
```

The import never changes, no matter where the current file is located.

---

## Advantages

- Cleaner imports.
- Easier to read.
- Easier to maintain.
- Prevents long relative paths.
- Makes moving files much easier.
- Common in professional React projects.

---

## When should we use Alias?

Use Alias when importing files from another folder.

Example:

```tsx
import Header from "@/components/dashboard/Header/Header";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import Button from "@/components/ui/Button";
import useTheme from "@/hooks/useTheme";
```

---

## When should we NOT use Alias?

If the file is in the same folder.

Example:

```tsx
import SidebarItem from "./SidebarItem";
```

or

```tsx
import sidebarData from "./sidebar.data";
```

Using Alias here is unnecessary.

❌

```tsx
import SidebarItem from "@/components/dashboard/Sidebar/SidebarItem";
```

✔

```tsx
import SidebarItem from "./SidebarItem";
```

---

## Project Example (Devfolio)

Good

```tsx
import Header from "@/components/dashboard/Header/Header";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
```

Good

```tsx
import SearchBar from "./SearchBar";
```

---

## Best Practice

- Use `@` for imports outside the current folder.
- Use `./` for files inside the same folder.
- Use `../` only when moving one level up inside the same feature.

This keeps the project clean and consistent.

---

## Interview Question

### What is an Alias Import?

Alias Import is a shortcut that maps a symbol (such as `@`) to a folder (usually `src`) to avoid long relative paths and improve code readability and maintainability.





# Using : 

###### tsconfig.app.json 

Add the following inside compilerOptions:

"baseUrl": ".",
"paths": {
  "@/*": ["src/*"]
}


"ignoreDeprecations": "6.0", if baseUrl don't work.  

##### vite.config.ts

import path from "node:path";

Then add:

resolve: { alias: { "@": path.resolve(__dirname, "./src"), }, },