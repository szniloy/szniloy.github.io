# portfolio_web

Portfolio website of **Md Sahiduzzaman Niloy**, Mobile App Developer (Kotlin · KMP · UI/UX).
Live: https://szniloy.github.io/portfolio_web/

## Project structure

```
portfolio_web/
├── index.html                       Page content (all sections)
├── css/
│   ├── style.css                    Site styles
│   └── project-demos.css            Project popup styles
├── js/
│   ├── main.js                      Site effects: loader, menu, sliders, counters
│   ├── project-demos-config.js      ← Project popup settings (edit this one)
│   └── project-demos.js             Popup engine + built-in prototypes
└── resources/                       All media in one place
    ├── brand/                       Logo + browser tab icons (favicon)
    ├── images/                      Project card images
    ├── videos/                      Demo recordings (.mp4)
    └── prototypes/                  Prototype files
        └── food-app/                Photos used inside the Food App prototype
```

## Project demos (popup prototype / video)

Clicking a project card opens a popup with a live demo of the app on a phone, plus a side panel to jump between screens.

### Add a demo to a project

1. In `index.html`, give the project card a key:
   ```html
   <div class="proj-card reveal" data-demo="myapp" style="--i:6;--proj-color:#7C6CFF;">
   ```
2. In `js/project-demos-config.js`, add an entry with the same key and pick one type.

**Video** (portrait screen recording, `.mp4`, ideally under 20 MB):
```js
myapp: {
  type:'video', src:'resources/videos/myapp.mp4',
  name:'My App', tagline:'Short line. <em>Highlighted part.</em>',
  about:'One or two sentences about the app.',
  logo:'🚀', accent:'#7C6CFF', repo:'https://github.com/szniloy/myapp',
  chapters:[['Home',0],['Checkout',12]]   // optional, [label, seconds]
},
```

**Figma prototype** (or any web link, or a local prototype such as `resources/prototypes/myapp/index.html`). In Figma, set the prototype device to **None**:
```js
myapp: { type:'embed', src:'https://www.figma.com/proto/....', name:'My App', tagline:'...', about:'...', logo:'🚀', accent:'#7C6CFF', repo:'...' },
```

**Built-in coded prototype**: `food`, `chat` and `air` (`type:'prototype', prototype:'food'`).

### Notes
- `src:''` keeps the popup hidden until the video or link is ready. The card then works like a normal card.
- Book Store (`books`) and Video Streaming (`streaming`) are ready for videos: add `resources/videos/book-store.mp4` and `resources/videos/video-streaming.mp4`, then fill in their `src`.
- To change a project card image, replace the file in `resources/images/` and keep the same name.
