# Abcd Portal.live - Usage Guide

## Quick Start

1. Open `index.html` in your web browser
2. Start creating content!

## Creating Your First Content

### Step 1: Fill in the Content Form

1. **Title**: Enter a descriptive title for your content
   - Example: "Welcome to Our Platform"

2. **Category**: Select from the dropdown:
   - Article
   - Blog Post
   - News
   - Tutorial
   - Announcement

3. **Author**: Enter the author's name
   - Example: "John Doe"

4. **Content Body**: Write your content
   - This is the main text area for your content
   - No character limit

5. **Tags**: Add comma-separated tags (optional)
   - Example: "technology, guide, tutorial"
   - Tags help organize and categorize your content

### Step 2: Preview (Optional)

Click the **Preview** button to see how your content will look before saving. This opens a modal showing:
- Formatted title
- Category badge
- Author and date
- Full content body
- Tags

### Step 3: Save Your Content

Click **Create Content** to save. You'll see:
- A success notification
- Your content appears in the "Created Content" panel
- The form resets for creating new content

## Managing Content

### View Content

In the "Created Content" panel, each content item displays:
- Title
- Category badge (color-coded)
- Author and creation date
- Content preview (first 150 characters)
- Tags

Click **View Full** to see the complete content in a modal.

### Delete Content

Click the **Delete** button on any content item. You'll be asked to confirm before deletion.

### Clear All Content

Click **Clear All** at the top of the content list to remove all content. You'll be asked to confirm this action.

### Export Content

Click **Export All** to download all your content as a JSON file. The file will be named:
```
abcd-portal-content-{timestamp}.json
```

This is useful for:
- Backing up your content
- Migrating to another system
- Sharing with team members

## Content Categories

Each category has a unique color badge:

- **Article** (Blue): General articles and written content
- **Blog** (Purple): Personal blog posts and opinions  
- **News** (Orange): News updates and announcements
- **Tutorial** (Green): Educational and instructional content
- **Announcement** (Pink): Important announcements and notices

## Tips and Best Practices

### Writing Content

- **Be Clear**: Use descriptive titles that explain what the content is about
- **Use Tags**: Add relevant tags to make content easier to find later
- **Preview First**: Always preview before saving to catch any formatting issues
- **Regular Exports**: Export your content regularly as a backup

### Organizing Content

- Use consistent tagging across similar content
- Choose the most appropriate category for each piece
- Use the author field to track who created what
- Delete outdated content to keep the list manageable

### Data Management

- **Local Storage**: Content is stored in your browser's localStorage
- **Browser Specific**: Content saved in one browser won't appear in another
- **Private Browsing**: Content may not persist in incognito/private mode
- **Clear Data**: Clearing browser data will delete all stored content
- **Export Regularly**: Always export important content for backup

## Keyboard Shortcuts

While in form fields:
- **Tab**: Move to next field
- **Shift + Tab**: Move to previous field
- **Enter**: Submit form (when in text input fields)

## Troubleshooting

### Content Not Appearing

- Refresh the page
- Check if browser localStorage is enabled
- Ensure JavaScript is enabled in your browser

### Preview Not Working

- Make sure all required fields are filled:
  - Title
  - Category
  - Author
  - Content Body

### Export Not Working

- Ensure pop-ups are not blocked
- Check browser downloads folder
- Try a different browser if issues persist

### Content Lost After Closing Browser

- Content is stored locally in your browser
- If using private/incognito mode, data may not persist
- Export your content regularly as a backup

## Browser Support

Recommended browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Advanced Usage

### Importing Exported Content

Currently, the platform doesn't have a built-in import feature, but you can:
1. Open browser's Developer Console (F12)
2. Paste this code:
```javascript
localStorage.setItem('abcd_portal_contents', 'YOUR_EXPORTED_JSON_HERE');
location.reload();
```

### Backing Up Data

For regular backups:
1. Click **Export All** regularly
2. Store the JSON files in a safe location
3. Use descriptive names for different versions

## Getting Help

For issues or questions:
- Check the README.md for technical details
- Open an issue on GitHub
- Review this usage guide thoroughly

## Version

Current Version: 1.0.0  
Last Updated: November 2025
