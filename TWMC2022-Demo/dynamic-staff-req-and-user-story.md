# Requirements for Dynamic Faculty

## Dynamic Filtering of Staff Members
- **Staff Grouping**: Each staff member belongs to a specific group (e.g., Pastor, Administration, Music).
- **Filtered Display**: Staff members should only appear in the section (card or accordion) that corresponds to their assigned group.

## Data Structure
The `Items` collection contains data for all staff members. Each item includes:
- **Group**: The category the staff member belongs to (e.g., "Pastor").
- **Title**: Name of the staff member.
- **Position**: Staff member's role or job title.
- **Email** and **Phone**: Contact details.
- **Link** and **Target**: Optional links for more information.
- **Image**: URL of the staff member’s image.
- **Caption**: Optional description or tagline for the staff member.

## Grouping Logic
- A predefined list of groups is defined in the code (e.g., "Administration, Music, Worship").
- Each accordion panel corresponds to one group and displays only the staff members belonging to that group.

## Styling Requirements
- **Card/Accordion Layout**: Staff members displayed in a card layout or accordion panel must adhere to specific styles for:
  - Images
  - Captions
  - Contact details
- **Responsive Design**: Cards should include responsive styling to adjust for different screen sizes.

## Dynamic Behavior
- **Accordion Functionality**: Panels should collapse/expand when clicked, using Bootstrap’s accordion functionality.
- **Card Links**: Staff member cards should link to more details when a `Link` attribute is present.

## Content Filtering
- Staff members are filtered by:
  - Exact or partial match between the `Group` attribute and the corresponding panel’s group name.
- The filtering process:
  - Normalizes case.
  - Trims whitespace for consistency.

---

## User Story
As a website visitor,  
I want to view staff members grouped by their respective teams or departments  
So that I can easily find and contact specific staff members.

---

## Acceptance Criteria

### Pastors Section
- A standalone section displays cards for staff members with the `Group` attribute set to "Pastor."

### Accordion Panels for Other Groups
- Each accordion panel displays staff members whose `Group` attribute matches or contains the panel's title.

### Dynamic Display
- Staff members not belonging to a listed group are not displayed.
- Panels only display matching staff members.

### Visual Design
- Each card includes:
  - Staff member's image.
  - Name.
  - Position.
  - Optional contact details (email, phone).
- Panels expand/collapse smoothly, adhering to accessibility standards.

### Error Handling
- Missing Data: If a staff member has missing information (e.g., no image or email):
  - Alternative text is displayed.
  - Missing fields are gracefully left blank.
