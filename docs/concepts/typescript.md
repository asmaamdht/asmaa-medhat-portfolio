# Generic & Utility Types

---

# Generic

## What is Generic?

A Generic allows us to write reusable code that works with different data types.

Instead of creating the same function, component, or type multiple times, we create it once and let TypeScript know the data type later.

---

## Why do we use Generic?

Without Generic:

```ts
type ProjectResponse = {
    data: Project;
};

type SkillResponse = {
    data: Skill;
};

type ExperienceResponse = {
    data: Experience;
};
```

We are repeating the same structure.

---

With Generic:

```ts
type ApiResponse<T> = {
    data: T;
};
```

Usage:

```ts
type ProjectResponse = ApiResponse<Project>;

type SkillResponse = ApiResponse<Skill>;

type ExperienceResponse = ApiResponse<Experience>;
```

Now we have one reusable type.

---

## Another Example

Without Generic:

```ts
function getProject(project: Project) {
    return project;
}

function getSkill(skill: Skill) {
    return skill;
}
```

With Generic:

```ts
function getData<T>(data: T): T {
    return data;
}
```

Usage:

```ts
getData(project);

getData(skill);

getData(user);
```

The same function works with any type.

---

## When will we use Generic in this project?

- API Response
- Reusable Table
- Reusable Select
- Reusable Modal
- Custom Hooks
- Form Components

---

# Utility Types

## What are Utility Types?

Utility Types are built-in TypeScript helpers that allow us to create new types from existing ones without rewriting them.

---

## Partial

Makes every property optional.

```ts
interface Project {
    id: string;
    title: string;
    description: string;
}
```

```ts
type UpdateProject = Partial<Project>;
```

Result:

```ts
{
    id?: string;
    title?: string;
    description?: string;
}
```

Use Case:

Updating a project.

---

## Pick

Select specific properties.

```ts
type ProjectCard = Pick<Project, "title" | "description">;
```

Result:

```ts
{
    title: string;
    description: string;
}
```

Use Case:

Project Card

Project Preview

---

## Omit

Remove specific properties.

```ts
type CreateProject = Omit<Project, "id">;
```

Result:

```ts
{
    title: string;
    description: string;
}
```

Use Case:

Create API

The server generates the id.

---

## Readonly

Prevents properties from being modified.

```ts
type ReadonlyProject = Readonly<Project>;
```

```ts
project.title = "New Title";
```

❌ Error

---

## Required

Makes all optional properties required.

```ts
interface User {
    name?: string;
    email?: string;
}
```

```ts
type RequiredUser = Required<User>;
```

Result:

```ts
{
    name: string;
    email: string;
}
```

---

## Record

Creates an object with consistent key/value types.

```ts
type SocialLinks = Record<string, string>;
```

Example:

```ts
const socialLinks: SocialLinks = {
    github: "...",
    linkedin: "...",
    twitter: "...",
};
```

---

# When will we use Utility Types?

| Utility  | Use Case                  |
| -------- | ------------------------- |
| Partial  | Update APIs               |
| Pick     | Cards, Preview Components |
| Omit     | Create APIs               |
| Readonly | Config Objects            |
| Record   | Dynamic Objects           |
| Required | Validation                |

---

# Project Rules

✅ Use Generic when the same code should work with different data types.

Examples:

- API Response
- Table
- Select
- Form
- Hooks

---

✅ Use Utility Types when you already have a type and need a modified version of it.

Examples:

- Update Project
- Create Project
- Project Card
- Readonly Config



-----------------------------

## 💡 Easy Way to Remember

**Generic**

> "I don't know the data type yet."

Example:

```ts
ApiResponse<T>

-----------------------------

Utility Types ::

"I already have a type, but I need a modified version of it."

Example:

Partial<Project>

Pick<Project, "title">

Omit<Project, "id">