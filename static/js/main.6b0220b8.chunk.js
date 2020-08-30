(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/Profile_Picture.21ab7c5e.jpg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(2),s=a.n(c),l=(a(12),a(3)),r=a(4),o=a(6),m=a(5),u=(a(13),function(e){var t=e.handleSectionClick;return i.a.createElement("div",{className:"sidenav"},i.a.createElement("img",{src:a(14),className:"avatar",alt:"avatar"}),i.a.createElement("h2",{className:"main-name"},"Aviram Tiwary"),i.a.createElement("p",{className:"subtitle"},'"Full Stack Developer"'),i.a.createElement("div",{className:"sections-list"},i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("about")}},"About Me"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("skills")}},"Skills"),i.a.createElement("p",{className:"section-list-element",onClick:function(){return t("projects")}},"Projects")))}),h=(a(15),function(e){var t=e.bio;return i.a.createElement("div",{className:"about-container"},i.a.createElement("p",null,t))}),d=(a(16),function(e){var t=e.skill;return i.a.createElement("div",{className:"skill-card"},t)}),p=(a(17),function(e){var t=e.skills;return i.a.createElement("div",{className:"skills-container"},i.a.createElement("h3",null,"Tech Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.techSkills.map((function(e){return i.a.createElement(d,{skill:e})}))),i.a.createElement("h3",null,"Interpersonal Skills"),i.a.createElement("div",{className:"industry-skill-container"},t.interpersonalSkills.map((function(e){return i.a.createElement(d,{skill:e})}))))}),f=(a(18),function(e){var t=e.project;return i.a.createElement("div",{className:"project-card"},i.a.createElement("p",null,i.a.createElement("b",null,"Name:")," ",t.name),i.a.createElement("p",null,i.a.createElement("b",null,"Aim:")," ",t.Aim),i.a.createElement("p",null,i.a.createElement("b",null,"Learning-Outcome:")," ",t.LearningOutcome),i.a.createElement("p",null,i.a.createElement("b",null,"Link:")," ",i.a.createElement("a",{href:t.link},t.link)," "))}),g=(a(19),function(e){var t=e.projects;return i.a.createElement("div",{className:"projects-container"},i.a.createElement("div",{className:"industry-skill-container"},t.projectList.map((function(e){return i.a.createElement(f,{project:e})}))))}),v=(a(20),function(e){var t=e.selectedHeading,a=e.selectedQuote,n=e.selectedSection,c=e.about,s=e.skills,l=e.projects;return i.a.createElement("div",{className:"section-container"},i.a.createElement("div",{className:"section-heading-container"},i.a.createElement("h1",{className:"main-heading"},t),i.a.createElement("p",{className:"main-quote"},a)),i.a.createElement("div",{className:"section-component"},{about:i.a.createElement(h,{bio:c.bio}),skills:i.a.createElement(p,{skills:s}),projects:i.a.createElement(g,{projects:l})}[n]))}),k=(a(21),function(e){var t=e.handleSectionClick,a=e.selectedHeading,n=e.selectedQuote,c=e.selectedSection,s=e.about,l=e.skills,r=e.projects;return i.a.createElement("div",{className:"portfolio-container"},i.a.createElement("div",{className:"sidenav-container"},i.a.createElement(u,{handleSectionClick:t})),i.a.createElement("div",{className:"main-section-container"},i.a.createElement(v,{selectedSection:c,selectedHeading:a,selectedQuote:n,about:s,skills:l,projects:r})))}),b={heading:"About Me",quote:"If you love life, don't waste time, \nfor time is what life is made up of",bio:"Self-motivated and a proven team player, Full Stack Developer with 1+ years of experience in building web pages. Determined and passionate to achieve a high bar of perfection. \n\nAviram has a vision to improve the lives of others by finding solutions to real-world problems and helping them to achieve with just one click."},E={heading:"Skills",quote:"Build your skills, not your resume",techSkills:["JavaScript","ReactJS","Redux","Angular","HTML","CSS","Bootstrap","C++","C","GitHub"],interpersonalSkills:["Communication","Time Management","Leadership","Management"]},S={heading:"Projects",quote:"Ahh, Learning alone is boring, implementation is the real fun",projectList:[{name:"Weather Application using Angular",Aim:"The aim of this project is to make a weather application using Angular. The website brings basic features where a user can see the weather forecast of a searched city. The website fetches the data from OpenWeatherMap.org API and helps to display temperature, weather description, etc, of the searched city.",LearningOutcome:"This project enhances the fundamental principles of Angular, TypeScript, and API (Application Programming Interface). The project helps me to gain experience in writing Flexible and responsive code by making reusable components.",link:"https://github-7ergny.stackblitz.io "},{name:"Time Tracking Application using ReactJs",Aim:"The aim of this project is to make a time tracker website. The website brings basic features where a user can make an account, set their work, and track the time spent in completing the work. Responsive use of CSS plays a great role to enhance the user interface of the website.",LearningOutcome:"This project enhances the fundamental principles of ReactJs, ECMAScript, and React routers. The project helps me to gain experience in writing Flexible and responsive code by making reusable components.",link:"https://wizardly-borg-d1fcaa.netlify.app/"},{name:"Trip Advisor using Front-End and Back-End Development",Aim:"The aim of this project is to develop a travel advice website which shows all the basic details of a city such as restaurants, hotels, and most visited places. The user interface and authentication system of this project are made by using Html, CSS, javascript, and PHP.",LearningOutcome:"This project enhances the basic concept of Html, CSS, Javascript, and PHP as a result, it helps me to use this technology effectively and brings Innovation and creativity to the websites."},{name:"Weather Scraper",Aim:"This is an API call project which forecast the weather for searched city. It provides info of temperature and wind speed of the searched place.",LearningOutcome:"This project fetch the data from Openweathermap.org and by making an API call it shows the weather forecast of searched city.",link:"https://github.com/aviram8919/Weather-Scraper"}]},w=(a(22),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleSectionClick=function(t){e.setState({selectedSection:t,selectedHeading:e.state[t].heading,selectedQuote:e.state[t].quote})},e.state={selectedSection:"",selectedHeading:"",selectedQuote:"",about:null,skills:null,projects:null},e}return Object(r.a)(a,[{key:"componentWillMount",value:function(){this.setState({about:b,skills:E,projects:S,selectedHeading:b.heading,selectedQuote:b.quote,selectedSection:"about"})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(k,{handleSectionClick:this.handleSectionClick,selectedSection:this.state.selectedSection,selectedHeading:this.state.selectedHeading,selectedQuote:this.state.selectedQuote,about:this.state.about,skills:this.state.skills,projects:this.state.projects}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6b0220b8.chunk.js.map