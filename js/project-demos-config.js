/* =====================================================================
   PROJECT DEMOS — SETTINGS (the only file you need to edit)

   Click a project card to open a popup with a live
   prototype, a video walkthrough, or a Figma / web prototype.

   ► HOW TO ADD A DEMO TO ANY PROJECT (current or future)
     1. In the PROJECTS section, give the card a key:
          <div class="proj-card reveal" data-demo="myapp" style="...">
     2. Add an entry with the SAME key to PROJECT_DEMOS below.
        Pick ONE type:

        VIDEO (screen recording of the app, portrait, .mp4):
          myapp: {
            type:'video',
            src:'resources/videos/myapp.mp4',   // put the file in resources/videos/
            name:'My App', tagline:'Short line. <em>Highlighted part.</em>',
            about:'One or two sentences about the app.',
            logo:'🚀', accent:'#7C6CFF',
            repo:'https://github.com/szniloy/myapp',
            chapters:[['Home',0],['Checkout',12]]   // optional: [label, second]
          },

        FIGMA PROTOTYPE (or any web link, e.g. Figma Make, appetize.io):
          myapp: {
            type:'embed',
            src:'https://www.figma.com/proto/XXXX/...',   // Figma share link, or a local
                                                         // prototype: 'resources/prototypes/myapp/index.html'
            name:'My App', tagline:'...', about:'...', logo:'🚀', accent:'#7C6CFF', repo:'...'
          },
          Tip: in Figma set the prototype device to "None" so it fills the phone.

        BUILT-IN CODED PROTOTYPE (already made: 'food', 'chat', 'air'):
          myapp: { type:'prototype', prototype:'food', name:'...', ... }

     3. Leave src:'' to hide the popup until the video/link is ready.
        The card then behaves exactly like a normal card.
   ===================================================================== */
const BOOK_CALL_URL = 'https://cal.com/mdniloydev/15min';

const PROJECT_DEMOS = {
  food: {
    type:'video', src:'resources/videos/food-app.mp4',
    name:'Food App', tagline:'Order in a few taps. <em>Track every minute.</em>',
    about:'Browse the menu, pick a size, check out and watch the order move from kitchen to door in real time. Switch to the Restaurant view to see the kitchen dashboard that accepts and manages the same orders.',
    logo:'🍕', accent:'#2ECC71', repo:'https://github.com/szniloy/food_app'
  },
  chat: {
    type:'prototype', prototype:'chat',
    name:'Chats App', tagline:'Communicate with <em>family and friends.</em>',
    about:'Open a conversation and type a real message: it sends, shows a typing indicator and gets a reply. Groups, search and settings all work too.',
    logo:'💬', accent:'#36B864', repo:'https://github.com/szniloy/app_chat'
  },
  books: {
    type:'video', src:'',// ← add e.g. 'resources/videos/book-store.mp4'
    name:'Book Store', tagline:'Where stories <em>come to life.</em>',
    about:'Catalog browsing, book details, cart and checkout, recorded on a real device.',
    logo:'📚', accent:'#F7931E', repo:'https://github.com/szniloy/book_store_app',
    chapters:[['Home & discovery',0],['Book details',8],['Start reading',16]]
  },
  air: {
    type:'prototype', prototype:'air',
    name:'Air Ticket', tagline:'Book your flight. <em>Pick your seat.</em>',
    about:'Search a route, compare flights, choose seats on a live seat map and get a boarding ticket with QR code. Change the class or passengers and the prices update.',
    logo:'✈️', accent:'#1E88E5', repo:'https://github.com/szniloy/air_ticket_booking_app'
  },
  streaming: {
    type:'video', src:'',                       // ← add e.g. 'resources/videos/video-streaming.mp4'
    name:'Video Streaming', tagline:'Premium movies. <em>On your phone.</em>',
    about:'Home feed, movie details, episodes and the player, recorded on a real device.',
    logo:'🎬', accent:'#E50914', repo:'',
    chapters:[['Home feed',0],['Movie details',9],['Episodes',18]]
  }
};
