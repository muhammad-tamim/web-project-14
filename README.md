# Project Name: Payoo

## Project Description: 

Payoo is a Mobile Financial Services app built with HTML, CSS, and JavaScript. I created this project to practice DOM manipulation and event handling in JavaScript. In this project, I can log in and log out, and after successfully logging in with a number and PIN, I can perform different actions like adding money, cashing out, transferring money, getting a bonus using a coupon code, paying bills, and viewing the transaction history.

## Live Site Link:

https://web-project-14.netlify.app/

## Project Video:


## What I Learned New while Building This Project:

1. How to customization tailwind CSS:  
```css
    <style type="text/tailwindcss">
        @theme {
        --color-primary: #FF2800;
      }
    </style>
```  
2. If we want to handle toggle using tailwind CSS, we have to use if-else and add and remove: 
```js
function handleToggle(id, status) {
    const element = document.getElementById(id);

    if (status === "block") {
        element.classList.remove("hidden");
        element.classList.add("block");
    }
    else if (status === "hidden") {
        element.classList.remove("block");
        element.classList.add("hidden");
    }
}
```
but if we used raw css instead of tailwind css, then  we don't need extra if-else block: 
```js
function handleToggle(id, status) {
    document.getElementById(id).style.display = "status";
}
```

3. How to redirect one html file to another html file using ```window.location.href``` properties.

![page navigation](assets/screenshots/page-navigation.gif)

## Challenges I faced while Building This Project:

1. I spent several hours designing the login page. At first, I couldn’t make it vertically and horizontally centered. Then I struggled with positioning the logo image with a background properly.  
   
![login-page](assets/screenshots/login-page.png)


## Contact With Me: 

[![Gmail](./assets/images/gmail.png "contact2tamim@gmail.com")](mailto:contact2tamim@gmail.com)
[![LinkedIn](./assets/images/linkedin.png "https://www.linkedin.com/in/tamim-muhammad/")](https://www.linkedin.com/in/tamim-muhammad/)

---

### Thank you so much for checking out my project! If you have any suggestions or feedback, feel free to share them.

