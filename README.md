# ionic-dark-mode

Dark mode in ionic is not that hard, To implement dark mode in your application clone my repo and copy the dark mode code from variable.scss and use in your application
Am made changes to dynamically change theme(dark to light and light to dark) with mediaquery, code in home.page.ts and home.page.html


HOW THIS WORKS🤔?
It works by changing the applications body class, if you guys inspect and see while toggling button you can able to see bellow thing for dark mode👇
> <body class="dark">

When app or page refreshes its automatically change from dark to light
We can use localstorage to handle this, implementation👇

>  updateDarkMode() {
>    document.body.classList.toggle('dark', this.dark);
>    localStorage.setItem('Dark', JSON.stringify(this.dark));
>  }

When the button toggled, it captures the boolean value and store it locally!
Then want make our implementation to stay the same mode after app refresh or page resfresh👇

Make this changes in app.component.ts
>  ngOnInit(){
>    let dark = localStorage.getItem('Dark');
>    if(dark) {
>      document.body.classList.add('dark');
>    }
> }

