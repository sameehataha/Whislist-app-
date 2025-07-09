# Whislist-app-
A clean and intuitive wishlist/todo app built with vanilla JavaScript. Features include adding items, marking complete, deleting, and persistent local storage. Dark theme with Material Design icons.
# Wishlist App

A simple, elegant wishlist/todo application built with vanilla JavaScript, HTML, and CSS. Keep track of your wishes and tasks with a clean, dark-themed interface.

## Features

- ✨ **Add Items**: Easily add new wishlist items with a simple input field
- ✅ **Mark Complete**: Check off items as you complete or obtain them
- 🗑️ **Delete Items**: Remove items you no longer need
- 💾 **Persistent Storage**: Your wishlist is saved locally and persists between browser sessions
- 🎨 **Dark Theme**: Clean, modern dark interface that's easy on the eyes
- 📱 **Responsive Design**: Works well on different screen sizes

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Styling with custom properties and modern CSS features
- **Vanilla JavaScript**: Interactive functionality and DOM manipulation
- **Local Storage**: Client-side data persistence
- **Material Icons**: Google Material Design icons for UI elements
- **UI Light Library**: Component library for consistent styling

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional installations required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wishlist-app.git
```

2. Navigate to the project directory:
```bash
cd wishlist-app
```

3. Open `index.html` in your web browser:
```bash
open index.html
```
Or simply double-click the `index.html` file.

## Usage

1. **Adding Items**: Type your wishlist item in the input field and click "Add" or press Enter
2. **Marking Complete**: Click the checkbox next to any item to mark it as complete
3. **Deleting Items**: Click the delete icon (🗑️) next to any item to remove it
4. **Persistence**: Your items are automatically saved and will be there when you return

## File Structure

```
wishlist-app/
├── index.html          # Main HTML structure
├── index.js            # JavaScript functionality
├── style.css           # Custom styles and theme
└── README.md           # This file
```

## Key Features Explained

### UUID Generation
Each wishlist item gets a unique identifier using a custom UUID function, ensuring reliable item management.

### Local Storage Integration
All wishlist items are automatically saved to your browser's local storage, so your list persists between sessions.

### Event Delegation
Efficient event handling using event delegation for dynamic content interaction.

### Responsive Design
The app adapts to different screen sizes while maintaining usability.

## Customization

### Changing the Theme
Modify the CSS custom properties in `style.css`:
```css
:root {
  --text-color-primary: #f9fafb;
  --background-color: #111827;
}
```

### Styling Components
The app uses the UI Light component library. You can override styles or add custom CSS in `style.css`.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with ES6+ support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [UI Light](https://uilight.netlify.app/) for the component library
- [Google Material Icons](https://fonts.google.com/icons) for the icons
- [Google Fonts](https://fonts.google.com/) for typography

---

**Happy Wishing! 🌟**
