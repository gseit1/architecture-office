# Zenith Architecture Studio

A modern, aesthetic, and minimal Vue.js web application showcasing an architecture office portfolio. Built with Vue 3, Bootstrap 5, and contemporary design principles.

## 🏗️ Features

- **Modern Design**: Clean, minimal aesthetic with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Portfolio**: Filterable project gallery with categories
- **Smooth Animations**: CSS transitions and scroll-based animations
- **Vue.js Integration**: Dynamic content management with Vue 3
- **Bootstrap 5**: Modern CSS framework for responsive design

## 🎨 Design Highlights

- **Typography**: Combination of Inter and Playfair Display fonts
- **Color Scheme**: Minimal palette with gradient accents
- **Layout**: Grid-based responsive design
- **Animations**: Smooth fade-in effects and hover transitions
- **Navigation**: Fixed navbar with scroll-based styling

## 📁 Project Structure

```
architecture-template/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Custom CSS styles
│   └── js/
│       └── app.js          # Vue.js application
└── README.md               # Project documentation
```

## 🚀 Getting Started

1. **Open the project**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience

2. **Local Development Server** (optional):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. **View the site**:
   - Open your browser and navigate to `http://localhost:8000`

## 🎯 Sections

### Hero Section
- Compelling hero with background image
- Call-to-action buttons
- Smooth scroll indicator

### About Section
- Studio introduction
- Animated statistics counter
- Professional team image

### Projects Portfolio
- Filterable project gallery
- Category-based filtering (All, Residential, Commercial, Institutional, Mixed-Use)
- Hover effects with project details

### Services
- Six core service offerings
- Icon-based service cards
- Detailed service descriptions

### Contact
- Contact information display
- Professional contact details
- Social media links

## 🛠️ Customization

### Changing Colors
Update CSS variables in `assets/css/style.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --accent-color: #6c63ff;
    --secondary-color: #f8f9fa;
    /* ... other variables */
}
```

### Adding Projects
Update the projects array in `assets/js/app.js`:
```javascript
projects: [
    {
        id: 10,
        title: 'Your Project Name',
        description: 'Project description...',
        category: 'Residential', // or Commercial, Institutional, Mixed-Use
        image: 'path/to/your/image.jpg'
    }
    // ... add more projects
]
```

### Modifying Services
Update the services array in `assets/js/app.js`:
```javascript
services: [
    {
        id: 7,
        icon: 'fas fa-your-icon',
        title: 'Your Service',
        description: 'Service description...'
    }
    // ... add more services
]
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌟 Key Technologies

- **Vue.js 3**: Progressive JavaScript framework
- **Bootstrap 5**: CSS framework for responsive design
- **Font Awesome**: Icon library
- **Google Fonts**: Inter and Playfair Display fonts
- **Unsplash**: High-quality stock images

## 🎨 Design Principles

- **Minimalism**: Clean, uncluttered design
- **Typography**: Clear hierarchy and readability
- **Whitespace**: Generous spacing for breathing room
- **Consistency**: Unified design language throughout
- **Performance**: Optimized for fast loading

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

---

**Zenith Architecture Studio** - Crafting Spaces That Inspire
