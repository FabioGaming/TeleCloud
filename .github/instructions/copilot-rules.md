# GitHub Copilot Review Instructions

When reviewing code in this repository, follow these guidelines:

---

## 1. Clean Architecture Enforcement

- The code must follow **true feature-based clean architecture**:
   - UI/presentation layers must not contain domain logic, business rules, or direct database access.
   - Domain layer must only contain business entities, validation, and core domain logic.
   - Application/use case layer must orchestrate domain logic and coordinate persistence, depending only on abstractions (interfaces/ports) for infrastructure concerns.
   - No direct SurrealDB queries, HTTP calls, file system access, or external service calls should exist in the domain or UI layers.
   - An **infrastructure/adapters layer** must contain all concrete implementations for SurrealDB query execution, HTTP clients, file system access, and external service integrations, which are consumed by the application/use case layer via abstractions.
- If any code violates this structure, comment clearly on:
   - What layer the violation occurs in
   - Why it is a violation
   - How to fix it according to clean architecture principles

---

## 2. SurrealDB Query Rules

- **All SurrealDB queries must be stored in `.surql` files**.
- Queries must **not appear in `.ts`, `.tsx`, `.js`, or `.jsx` files**.
- If a query string is found in code, comment something along the lines of:
   - “This SurrealDB query must be moved to a `.surql` file in the feature's infrastructure/data layer (for example, `features/<feature>/infrastructure/db/queries/<query-name>.surql`). The application/use case layer should reference this query via a repository or data-access abstraction, rather than embedding the query string directly in UI or domain code.”
- `.surql` files should be placed according to clean architecture principles: typically in the **infrastructure/data layer** of the relevant feature or bounded context, and only accessed from the **application/use case layer** through well-defined interfaces (e.g., repositories or services), not directly from UI or domain layers.

---

## 3. Default Checks

- After enforcing the above rules, also perform **default Copilot review checks**, including:
   - Basic syntax and type issues
   - Common JavaScript/TypeScript mistakes
   - Basic security vulnerabilities or unsafe patterns
- Do **not comment on formatting or style issues** unless they cause functional or security problems.

---

## 4. Feedback Guidelines

- Only comment on violations or issues; **do not leave unnecessary or generic comments**.
- Provide **clear explanations** of violations and recommended fixes.
- Focus first on the architecture rules, then on any other critical issues identified by Copilot.

---

### Notes

- These instructions apply to **all files in the repository**, including `.ts`, `.tsx`, `.js`, `.jsx`, and `.surql`.
- Copilot will automatically use these instructions when reviewing pull requests.
