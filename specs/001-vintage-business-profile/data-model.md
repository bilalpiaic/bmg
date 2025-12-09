# Data Model: Vintage Business Profile

## Entities

### BusinessProfile

Represents the main business profile.

- **`title`**: `string` - The main title of the business profile.
- **`tagline`**: `string` - A short tagline for the business.
- **`description`**: `string` - A longer description of the business.
- **`sections`**: `Section[]` - An array of sections within the profile.

### Section

Represents a section of the business profile.

- **`id`**: `string` - A unique identifier for the section (e.g., "about", "services").
- **`title`**: `string` - The title of the section.
- **`content`**: `string` (Markdown) - The content of the section in Markdown format.
