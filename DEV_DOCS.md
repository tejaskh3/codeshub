# Documentation of project

## Landing Page

- created a simple landing page using [navbar](src/components//navbar/Navbar.tsx) and a simple hero image from components and public respectively.
- In the landing page initially there is single button **Sign In**, which will open a modal.

## Auth routes

- for auth there is simply a pop up modal as of now, which asks for the  [Sign In](src/components/modals/Login.tsx) and can be changed to [Sign In](src/components/modals/Signup.tsx) and [Forgot Password](src/components/modals/Login.tsx) in place.
- here we have a parent component [Auth Modal](src/components/modals/AuthModal.tsx), which renders any one of three modals mentioned above.
- To render any one of these modal **Recoil state management library** and here is the file [Auth Modal State](src//atoms/AuthModalAtom.ts)
```javascript
type AuthModalState = {
  isOpen: boolean;
  type: "register" | "login" | "forgotPassword";
};
```