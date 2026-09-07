# TypeScript Practice Sessions

> Guidance for creating and maintaining TypeScript practice sessions in She Leads Tech.

[![Part of She Leads Tech](https://img.shields.io/badge/She%20Leads%20Tech-PRACTISE-16A34A)](https://github.com/Unlock-Her-Tech)
[![Language](https://img.shields.io/badge/language-TypeScript-3178C6?logo=typescript&logoColor=white)](./)

## Sessions

| Session | Pattern | Guide |
| ---: | --- | --- |
| 01 | Fixed-length sliding windows | [Open session](Session-01-Fixed-Length-Sliding-Windows/) |

## Standard session structure

Every practice session should use the same layout:

```text
Session-XX-Topic-Name/
├── README.md
├── Problems.md
└── Solutions/
    ├── FirstProblemName.ts
    └── SecondProblemName.ts
```

- `README.md` is the session guide. It explains the pattern, prerequisites, learning goals, suggested problem order and completion criteria.
- `Problems.md` contains the exercises but does not reveal complete solutions.
- `Solutions/` contains one clearly named TypeScript file per problem or approach.

Optional material may be added only when a session needs it:

```text
├── Starter-Code/
├── Tests/
└── Resources.md
```

Avoid empty optional folders. Add them when they contain something useful.

## Naming rules

### Session folders

Use:

```text
Session-XX-Topic-Name
```

- Use a two-digit session number: `01`, `02`, `03`.
- Use title case with hyphens between words.
- Describe the technique, not a single problem.

Examples:

```text
Session-02-Variable-Length-Sliding-Windows
Session-03-Two-Pointers
Session-04-Binary-Search
```

### Solution files

Use PascalCase and describe the problem or approach:

```text
MaximumSubarrayAverage.ts
MaximumSubarrayAverageBruteForce.ts
MaximumSubarrayAverageSlidingWindow.ts
```

Do not use spaces, `copy`, `final`, contributor names or version numbers in filenames. Git already keeps the file history.

## Creating a future session

1. Choose the next available two-digit session number.
2. Create `Session-XX-Topic-Name/` using the naming rules above.
3. Copy [SESSION_TEMPLATE.md](SESSION_TEMPLATE.md) into the new folder and rename the copy to `README.md`.
4. Replace every placeholder in the copied template.
5. Add `Problems.md` with a progression from recap to challenge.
6. Create `Solutions/` and add one descriptively named file per solution.
7. Add the new session to the table at the top of this page.
8. Add it to the practice library in the [repository README](../README.md).
9. Check all links and test all included solutions before opening a pull request.

## Content boundary

Practice sessions should help learners solve problems independently:

- Link to Theory instead of copying long teaching notes.
- Put prompts and hints in `Problems.md`.
- Keep complete implementations inside `Solutions/`.
- Put recall quizzes and progress checks in [She Leads Tech Review](https://github.com/Unlock-Her-Tech/She-Leads-Tech-Review).

---

[← Back to She Leads Tech Practice](../README.md)
