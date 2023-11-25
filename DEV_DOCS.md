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
- in the auth route a functionality has been added of login and signup with email and password using firebase auth.
- react-firebase-hooks has been used for this.

## Home 
- now moving to the home page it will be having questions [Topbar Component](src/components/topbar/Topbar.tsx)
- in this we will simply have a logo and two buttons 1. premium(later i'll integrate payment gateway) so that all the questions can be accessed easily.
- then added problems to the [problems-data](/src/problems-data/Problems.ts)
- after adding the problem started working upon problems(home page) [Home page](src/app/page.tsx)
- this is a sample data of problems 
```javascript
export type Problem = {
  id: string; 
  title: string;
  difficulty: string;
  category: string;
  order: number;
  videoId?: string;
  isPaid: Boolean; 
};
```

### youtube video modal
- for the solutions of video react-youtube is used which let's you see the solution while being on the same page.

After this portion, adding a flag in [topbar](src/components/topbar/Topbar.tsx) if the use is logged in or not, and manage login button accordingly.
Then added **react-toastify** for error and success messages.
