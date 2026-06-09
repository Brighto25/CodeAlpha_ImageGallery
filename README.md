# 🖼️ Image Gallery

A vibrant, interactive image gallery built with React + Vite as part of my frontend development internship at **CodeAlpha**.

---

## ✨ Features

- **Grid layout** — clean 3-column responsive grid displaying all images
- **Image upload** — upload your own images from your device and they instantly appear in the gallery
- **Lightbox** — click any image to view it full-screen with a dark overlay
- **Default images** — gallery comes preloaded with images so it never looks empty

---

## 🛠️ Tech Stack

- **React** — component-based UI
- **Vite** — fast development server and build tool
- **CSS** — custom styling with gradients, hover effects, and transitions
- **URL.createObjectURL()** — converts uploaded files into displayable image URLs

---

## 📁 Project Structure

```
src/
  components/
    Gallery.jsx       # Renders the image grid
    ImageCard.jsx     # Displays a single image, handles click
    Lightbox.jsx      # Full-screen image overlay
    UploadButton.jsx  # Hidden file input with styled label
  App.jsx             # Root component, holds all state
  main.jsx            # Entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js installed

### Installation

```bash
# Clone the repo
git clone https://github.com/Brighto25/CodeAlpha_ImageGallery.git

# Navigate into the project
cd CodeAlpha_ImageGallery

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 📸 Screenshots

<img width="1919" height="883" alt="image_2026-06-09_14-20-13" src="https://github.com/user-attachments/assets/d5c795f8-150c-4c4e-a53f-5520d152d572" />
<img width="1918" height="1028" alt="image_2026-06-09_14-20-56" src="https://github.com/user-attachments/assets/a66201a7-af16-442a-8ae3-e56a73ff9709" />
<img width="1919" height="1064" alt="image_2026-06-09_14-21-33" src="https://github.com/user-attachments/assets/1bf98a3e-ca14-4b55-9a0f-29178cb647f7" />
<img width="1919" height="1025" alt="image_2026-06-09_14-21-48" src="https://github.com/user-attachments/assets/0f4596b5-360d-493e-84db-d84640bdac50" />


---

## 🧠 What I Learned

- **Component architecture** — how to break a UI into focused, reusable components and decide what each one is responsible for
- **Lifting state** — why state that multiple components need lives in the parent, and how to pass it down via props
- **Props and callbacks** — how child components communicate back to parents by calling functions passed as props
- **useState** — managing a list of images and a selected lightbox image as separate pieces of state
- **Array spread operator** — using `[...images, newImage]` to add items to state without mutating the original array
- **URL.createObjectURL()** — turning a raw file from an input into a URL the browser can display
- **CSS Grid** — building a clean multi-column layout with `grid-template-columns`
- **Conditional rendering** — using `&&` to only show the lightbox when an image is selected

---

## 👨‍💻 Author

**Bright Kwame Addaney**
- GitHub: [@Brighto25](https://github.com/Brighto25)
- LinkedIn: [bright-addaney](https://linkedin.com/in/bright-addaney-83139b358)

---

## 🏢 Internship

Built as part of the **CodeAlpha Frontend Development Internship** — Task 1: Image Gallery.
