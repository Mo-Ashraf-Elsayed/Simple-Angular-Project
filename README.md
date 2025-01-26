# Simple Angular Project

This is a simple Angular project consisting of multiple components to demonstrate routing, lazy loading, and various interactive features.

## Project Structure

The project includes six main components:

1. **Navbar** - A fixed navigation bar at the top of the page. It dynamically changes height on scroll and returns to its original state when the scroll reaches the top.
2. **Home** - The landing page of the application, shown when the user visits the root URL.
3. **About** - A placeholder page containing dummy text (Lorem ipsum).
4. **Portfolio** - A gallery of images displayed as cards. When an image is clicked, it appears in a full-screen overlay. The user can flip through images with two buttons to navigate.
5. **Contact** - A form with four input fields. The label of each input dynamically appears when the user starts typing in the corresponding input field.
6. **Footer** - A fixed footer at the bottom of the page.

## Features

- **Navbar**: The height of the navbar decreases when the user scrolls down. It returns to its normal height when the scroll position is at the top (scrollTop = 0).
- **Lazy Loading**: All components except for the navbar and footer are lazy-loaded via Angular's routing mechanism.
- **Routing**: Routing is set up so that the user can navigate between components through the links in the navbar.

## Routing and Lazy Loading

This Angular project uses lazy loading to load the components (About, Portfolio, and Contact) only when they are accessed via the navbar links.

### Routing Configuration

```typescript
export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent, title: "Home" },
  {
    path: "about",
    loadComponent: () => import("./components/about/about.component").then((c) => c.AboutComponent),
    title: "About",
  },
  {
    path: "portfolio",
    loadComponent: () => import("./components/portfolio/portfolio.component").then((c) => c.PortfolioComponent),
    title: "Portfolio",
  },
  {
    path: "contact",
    loadComponent: () => import("./components/contact/contact.component").then((c) => c.ContactComponent),
    title: "Contact",
  },
  { path: "**", component: NotFoundComponent, title: "404" },
];
```

### Component Details

- **Navbar**: The navbar adjusts its height on scroll:
  - Decreases height when scrolling down.
  - Returns to its original height when scrolling to the top of the page.
- **Home**: This is the landing page that appears when the user navigates to the root URL.

- **About**: This component contains placeholder text ("Lorem ipsum") for the About page.

- **Portfolio**:

  - Displays a gallery of images as cards.
  - When an image is clicked, it is displayed in a full-screen overlay.
  - The overlay has navigation buttons to flip through images.

- **Contact**: This form component has four input fields. When the user types into any of the fields, the corresponding label appears dynamically above the input.

## Technologies Used

- Angular
- TypeScript
- CSS & Bootstrap (for styling)
- Angular Router (for navigation and lazy loading)

## Conclusion

This is a simple yet interactive Angular project that demonstrates routing, lazy loading, and a variety of UI interactions, such as dynamic label display and gallery image viewing.

### [LinkedIn](https://www.linkedin.com/in/mohammed-ashraf0/)

### [Live Demo](https://simple-angular-project.vercel.app/#/home)
