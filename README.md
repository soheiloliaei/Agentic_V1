# Bitcoin Agentic Desktop - AI-Powered Financial Case Management

A modern, responsive desktop application for Bitcoin-related financial case management with AI-powered assistance.

## 🚀 Live Demo

Visit the live application: **[Bitcoin Agentic Desktop](https://soheiloliaei.github.io/Agentic_V1/)**

## 🎯 Overview

The Bitcoin Agentic Desktop is a sophisticated web application designed for financial professionals managing Bitcoin-related cases. It features an intuitive interface with AI-powered assistance, providing comprehensive case management capabilities.

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Layout**: 30%-40%-30% panel distribution that adapts to different screen sizes
- **Dynamic Height Synchronization**: Panels automatically adjust height based on content
- **Collapsible Modules**: Smooth animations for expanding/collapsing content sections
- **ShadCN Design System**: Consistent styling with professional shadows and borders
- **Dark Mode Ready**: Built with modern CSS variables for easy theme switching

### 🛠️ Core Functionality
- **Customer Information Management**: Comprehensive customer profiles and account details
- **Case Summary**: Compact case overview with key metrics and status indicators
- **Previous Cases/Transactions**: Collapsible history with search capabilities
- **Knowledge Base**: Integrated reference materials and documentation
- **AI Copilot**: Intelligent assistant for case analysis and recommendations

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Breakpoint System**: Smooth transitions across different screen sizes
- **Touch-Friendly**: Intuitive interactions for mobile devices
- **Cross-Browser**: Compatible with all modern browsers

## 🏗️ Architecture

### Frontend Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: ES6+ features for dynamic interactions
- **ShadCN Components**: Consistent UI component library

### Design System
- **Typography**: Professional font hierarchy
- **Color Scheme**: Carefully selected color palette with CSS variables
- **Spacing**: Consistent spacing system throughout the application
- **Shadows**: Sophisticated shadow system for depth and hierarchy

## 🎨 UI Components

### Panel System
```css
/* 30%-40%-30% Layout */
.grid-cols-3 {
  grid-template-columns: 30% 40% 30%;
}

/* Responsive Breakpoints */
@media (max-width: 1400px) { /* Tablet layout */ }
@media (max-width: 1024px) { /* Mobile layout */ }
```

### Collapsible Modules
- **Smooth Animations**: 300ms transitions for expand/collapse
- **State Management**: JavaScript-powered state tracking
- **Accessibility**: ARIA labels and keyboard navigation

### Dynamic Height System
- **Auto-Adjustment**: Panels sync height based on content
- **Smooth Transitions**: Animated height changes
- **Content Awareness**: Responsive to module expansion/collapse

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for fonts and assets

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/soheiloliaei/Agentic_V1.git
   cd Agentic_V1
   ```

2. **Open the application:**
   - Open `index.html` in your web browser
   - Or access the live version at: https://soheiloliaei.github.io/Agentic_V1/

### Development
For local development with hot reload:
```bash
# Install dependencies (if using Node.js development)
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
Agentic_V1/
├── index.html                    # GitHub Pages entry point
├── bitcoin_agentic_desktop_p0.html  # Main application
├── src/                          # Source components
│   ├── components/
│   │   └── ui/                   # UI components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── textarea.tsx
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── App.tsx                  # Main app component
│   └── App.css                  # Global styles
├── tailwind.config.js           # Tailwind CSS configuration
├── package.json                 # Project dependencies
└── README.md                    # This file
```

## 🎯 Key Features Breakdown

### Customer Information Module
- **Account Selection**: Personal/Business account switching
- **Profile Management**: Comprehensive customer details
- **Status Tracking**: Real-time status indicators

### Case Management
- **Case Summary**: Compact overview with key metrics
- **Priority Levels**: Visual priority indicators
- **Status Tracking**: Current case status with color coding
- **Problem Identification**: AI-powered issue detection

### Historical Data
- **Previous Cases**: Searchable case history with collapsible interface
- **Transaction History**: Detailed transaction records
- **Pattern Recognition**: AI-assisted pattern identification

### AI Copilot
- **Intelligent Assistance**: Context-aware recommendations
- **Case Analysis**: Automated case evaluation
- **Knowledge Base Integration**: Instant access to relevant documentation
- **Natural Language Processing**: Conversational interface

## 🔧 Customization

### Theming
The application uses CSS variables for easy theming:
```css
:root {
  --primary: #000000;
  --secondary: #6b7280;
  --background: #ffffff;
  --foreground: #000000;
  --muted: #f3f4f6;
  --border: #e5e7eb;
  /* ... more variables */
}
```

### Responsive Breakpoints
```css
/* Tablet */
@media (max-width: 1400px) {
  .grid-cols-3 { grid-template-columns: 35% 30% 35%; }
}

/* Mobile */
@media (max-width: 1024px) {
  .grid-cols-3 { grid-template-columns: 1fr; }
}
```

## 🌟 Performance Features

- **Optimized Loading**: Efficient resource loading
- **Smooth Animations**: Hardware-accelerated transitions
- **Memory Management**: Efficient DOM manipulation
- **Accessibility**: WCAG 2.1 compliant

## 🔒 Security Features

- **Data Validation**: Client-side input validation
- **Secure Communication**: HTTPS-only in production
- **Privacy Protection**: No sensitive data stored locally

## 🚀 Deployment

### GitHub Pages
The application is automatically deployed to GitHub Pages:
1. Push changes to the `main` branch
2. GitHub Pages automatically builds and deploys
3. Access at: https://soheiloliaei.github.io/Agentic_V1/

### Custom Domain
To use a custom domain:
1. Add a `CNAME` file to the repository root
2. Configure DNS settings
3. Update GitHub Pages settings

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- **Live Application**: https://soheiloliaei.github.io/Agentic_V1/
- **Repository**: https://github.com/soheiloliaei/Agentic_V1
- **Issues**: https://github.com/soheiloliaei/Agentic_V1/issues

---

**Bitcoin Agentic Desktop** - Modern financial case management powered by AI 🚀
