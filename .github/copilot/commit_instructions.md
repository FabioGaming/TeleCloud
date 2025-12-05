# Copilot Commit Message Instructions

## 1. Use Conventional Commits Format

Valid types:
- feat
- fix
- refactor
- style
- chore
- docs
- test
- perf
- ci
- build

Format:
<type>(optional-scope): short summary

Examples:
- `feat(auth): add login form validation`
- `fix(api): correct null crash in user mapper`

## 2. Scope Rules
- Scope should reflect the feature folder (e.g. `auth`, `settings`, `home`, `shared`).
- If commit affects multiple features → omit the scope.

## 3. Summary Line
- Keep under 70 characters.
- Use imperative mood (e.g. “add”, “fix”, “update”).

## 4. Description Section
Add an optional longer description explaining:
- What changed
- Why it changed
- Implementation notes
- Any potential side effects

Example:
feat(auth): add login form validation

Added form validators and updated the UI to show inline errors.
Prevents invalid emails and ensures password length is at least 8 characters.

## 5. Auto-Generated Summaries
- You may generate a more advanced summary automatically.
- Avoid filling with generic or irrelevant fluff.

## 6. When Multiple Commits Are Suggested
- Squash if they are the same category/type.
- Otherwise keep them separate.

