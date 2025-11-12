# Abcd Portal.live - Content Creation Platform

A modern, user-friendly web-based content creation and management platform for creating, managing, and organizing various types of content.

## Features

- **Content Creation**: Create different types of content including articles, blog posts, news, tutorials, and announcements
- **Rich Metadata**: Add titles, categories, authors, and tags to organize your content
- **Preview Functionality**: Preview content before saving it
- **Content Management**: View, edit, and delete created content
- **Local Storage**: Content persists in browser local storage
- **Export Capability**: Export all content as JSON for backup or migration
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, gradient-based design with smooth animations

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/trueRama/abcd_index.git
   cd abcd_index
   ```

2. Open `index.html` in your web browser

   No build process or dependencies required - it's pure HTML, CSS, and JavaScript!

### Usage

#### Creating Content

1. Fill in the content creation form:
   - **Title**: Enter a descriptive title for your content
   - **Category**: Select the content type (Article, Blog, News, Tutorial, or Announcement)
   - **Author**: Enter the author's name
   - **Content Body**: Write your content in the textarea
   - **Tags**: Add comma-separated tags for better organization

2. Click **Create Content** to save your content

#### Preview Content

- Click the **Preview** button to see how your content will look before saving
- The preview modal shows all content details including formatted metadata and tags

#### Managing Content

- View all created content in the right panel
- Click **View Full** to see complete content in the preview modal
- Click **Delete** to remove individual content items
- Click **Export All** to download all content as a JSON file
- Click **Clear All** to remove all content (with confirmation)

## File Structure

```
abcd_index/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
├── script.js       # Content management functionality
└── README.md       # This file
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, flexbox, and grid
- **JavaScript (ES6+)**: Content management logic with classes and local storage
- **LocalStorage API**: Client-side data persistence

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Features in Detail

### Content Categories

- **Article**: General articles and written content
- **Blog**: Personal blog posts and opinions
- **News**: News updates and announcements
- **Tutorial**: Educational and instructional content
- **Announcement**: Important announcements and notices

### Data Storage

Content is stored in the browser's localStorage, allowing data to persist across sessions. The data structure includes:

```json
{
  "id": 1234567890,
  "title": "Content Title",
  "category": "article",
  "author": "Author Name",
  "body": "Content body text...",
  "tags": ["tag1", "tag2"],
  "createdAt": "2025-11-12T06:49:00.000Z"
}
```

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue on GitHub.
