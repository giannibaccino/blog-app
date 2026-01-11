# Assumptions

## Data Structure

- Each user has exactly one company and one address
- Each company and address is unique to a single user
- All posts belong to exactly one author (user)

## Functionality

- Users are seeded from the JSONPlaceholder API modified with AI and are read-only
- Posts can only be deleted, not edited
- The filter dropdown shows author names instead of user IDs for better UX
- Default sorting is by post ID in descending order (newest first)

## UI/UX

- Confirmation dialog is required before deleting a post
- Toast notifications are shown for all success and error states
- The app uses card-based layout for displaying posts
- Empty states are shown when no posts match the current filters

## Technical

- SQLite database file is stored locally in the project
- Database connection string is included in the repository for evaluation purposes (not recommended for production)
- The app uses Server Components for data fetching and Client Components for interactive features
- Post deletion is handled via Server Actions
