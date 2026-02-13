# 💕 Valentine's Day 2026

A romantic, interactive web page to ask that special someone to be your valentine. Features beautiful animations, playful button interactions, and heartfelt messages.

## ✨ Features

- **Romantic Design**: Beautiful gradient background with pink and lavender colors
- **Floating Hearts**: Continuous animated hearts floating in the background
- **Interactive Buttons**:
  - **Yes Button**: Triggers confetti celebration and displays a romantic message
  - **No Button**: Playfully runs away when you try to hover or click it
- **Confetti Explosion**: Celebratory confetti animation when "Yes" is clicked
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **No Dependencies**: Pure HTML, CSS, and JavaScript (no build process needed)

## 🚀 Quick Start

### Local Testing

1. Clone this repository or download the files
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies needed

### GitHub Pages Deployment

1. **Create a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Valentine's Day website"
   ```

2. **Create a new repository on GitHub** (make it PUBLIC for free GitHub Pages)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/valentine-day-2026.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save and wait ~2 minutes

5. **Your site will be live at**: `https://YOUR_USERNAME.github.io/valentine-day-2026/`

## 📁 Project Structure

```
valentine-day-2026/
├── index.html              # Main HTML page
├── css/
│   ├── style.css          # Core styles (layout, colors, typography)
│   └── animations.css     # Keyframe animations
├── js/
│   ├── main.js            # Button interactions & confetti
│   └── hearts.js          # Floating hearts background
├── README.md              # This file
└── .gitignore             # Git ignore file
```

## 🎨 Customization

### Change Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --romantic-red: #e63946;
    --soft-pink: #ffb3c6;
    --light-pink: #ffc8dd;
    --lavender: #cdb4db;
}
```

### Personalize Messages

Edit the text in `index.html`:

- **Main question**: Line 31 (`<h1 class="main-title">`)
- **Subtitle**: Lines 35-37 (`<p class="subtitle">`)
- **Success message**: Lines 52-57 (`.success-message`)

### Adjust Animations

Modify timing and effects in `css/animations.css` and the JavaScript files.

## 🧪 Testing Checklist

- [ ] Open `index.html` in browser - page displays correctly
- [ ] Hover over "No" button - it moves away
- [ ] Click "Yes" button - confetti appears, success message shows
- [ ] Hearts float continuously in background
- [ ] Test on mobile device or simulator
- [ ] Check responsiveness at different screen sizes
- [ ] Verify no console errors

## 🌐 Browser Support

- Chrome (desktop & mobile) ✅
- Safari (desktop & iOS) ✅
- Firefox ✅
- Edge ✅

## 📱 Mobile Optimization

This site is specifically optimized for mobile viewing, as it's likely to be shared via text message. All touch interactions work smoothly on iOS and Android devices.

## 💡 Tips

- **Test on mobile first**: Your recipient will likely view it on their phone
- **Share the link**: Send the GitHub Pages URL via text or message
- **Screenshot the moment**: Capture their reaction when they click "Yes"!
- **Personalize**: Add inside jokes, pet names, or personal touches to make it extra special

## 🛠️ Technical Details

- **No build process**: Direct HTML/CSS/JS for easy deployment
- **No dependencies**: No npm, webpack, or external libraries
- **Lightweight**: Fast loading (~2 seconds)
- **Works offline**: After first load, works without internet

## 📄 License

This project is free to use for personal romantic purposes. Feel free to customize and share!

## ❤️ Made with Love

Created with love for Valentine's Day 2026. May your special someone say "Yes!" 💕

---

**Happy Valentine's Day!** 🌹
