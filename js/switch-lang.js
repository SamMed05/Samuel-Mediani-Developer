/* ========= CHANGE LANGUAGE ========= */
let isItalian = false;

// ENGLISH
function eng() {
  let txt = "";

  txt = "<p class='home__title'>Hi, <br>I'm <span class='home__title-color'>Samuel</span><br> I love making </p>";
  let homeTitle = document.getElementById("home__title");
  if (homeTitle) homeTitle.innerHTML = txt;

  txt = '["video games", "3D models", "websites", "tutorials", "illustrations", "fractals", "music", "generative art"]';
  let typewriteElement = document.querySelector(".typewrite");
  if (typewriteElement) typewriteElement.setAttribute("data-type", txt);

  txt = "Get my CV <i class='bx bxs-download'></i>";
  let cvButton = document.getElementById("cv-button");
  if (cvButton) cvButton.innerHTML = txt;

  txt = "<p class='about__subtitle'>Something about me</p>";
  let aboutSubtitle = document.getElementById("about__subtitle");
  if (aboutSubtitle) aboutSubtitle.innerHTML = txt;

  txt = "<p class='about__text1'>Welcome lucky visitor! I am a </p>";
  let aboutText1 = document.getElementById("about__text1");
  if (aboutText1) aboutText1.innerHTML = txt;

  txt = "<p class='about__text2'> years old italian student who loves programming and learning new things (think about this website as a demonstration of it <i class='bx bx-smile' ></i>).<br> I'm currently studying Computer Science at university, but most of the projects you see here are the result of self-taught skills before I learned them at school.<br> I like experimenting with various aspects of software development and have interests in other fields as well. In general, I've always enjoyed trying out new things and learning from my experiments.<br> For now I have done personal projects related to app, web and game development, but I'm also into 3D modelling, graphic design, drawing, UI design and music production (Ableton).<br> Currently, I'm not specialized in any of these fields in particular, I'm still finding the best one for me.<br> In any case this website serves the purpose of showcasing my favorite projects, as well as to keep track of my journey through them.</p>";
  let aboutText2 = document.getElementById("about__text2");
  if (aboutText2) aboutText2.innerHTML = txt;

  txt = "<p class='back-text' id='back-text'>Hi!</p>";
  let backText = document.getElementById("back-text");
  if (backText) backText.innerHTML = txt;

  txt = "<p class='back-text2' id='back-text2'>It's me!</p>";
  let backText2 = document.getElementById("back-text2");
  if (backText2) backText2.innerHTML = txt;

  txt = "<p class='skills__subtitle' id='skills__subtitle'>Professional skills</p>";
  let skillsSubtitle = document.getElementById("skills__subtitle");
  if (skillsSubtitle) skillsSubtitle.innerHTML = txt;

  txt = "<p class='skills__text' id='skills__text'>As for programming languages, I've used HTML <i class='bx bxl-html5 ' ></i>, CSS <i class='bx bxl-css3 ' ></i>, JavaScript <i class='bx bxl-javascript ' ></i> (both vanilla and with some libraries), Python, C# (in Unity), C++ and Java, but I'm constantly learning new things about them.<br>The programs that I've used (or experimented with) are Unity, Blender, Visual Studio, Android Studio, Figma, GIMP and others (see the image ➡️).</p>";
  let skillsText = document.getElementById("skills__text");
  if (skillsText) skillsText.innerHTML = txt;

  txt = "<p class='work__text' id='work__text'>These are some of my best projects:</p>";
  let workText = document.getElementById("work__text");
  if (workText) workText.innerHTML = txt;

  txt = "<p id='bx-title1'>Blender Neon Text</p>";
  let bxTitle1 = document.getElementById("bx-title1");
  if (bxTitle1) bxTitle1.innerHTML = txt;

  txt = "<p id='bx-text1'>In this project - inspired by a tutorial of Blender Guru - I've created a neon text with my name.</p>";
  let bxText1 = document.getElementById("bx-text1");
  if (bxText1) bxText1.innerHTML = txt;

  txt = "<p id='work__button'>OPEN!</p>";
  let workButton = document.getElementById("work__button");
  if (workButton) workButton.innerHTML = txt;

  txt = "<p id='bx-title2'>First Landscape</p>";
  let bxTitle2 = document.getElementById("bx-title2");
  if (bxTitle2) bxTitle2.innerHTML = txt;

  txt = "<p id='bx-text2'>This is one of my first Blender projects I've made (2019). It's inspired by a similar work by Matt Stark.</p>";
  let bxText2 = document.getElementById("bx-text2");
  if (bxText2) bxText2.innerHTML = txt;

  txt = "<p id='work__button'>OPEN!</p>";
  let workButton2 = document.getElementById("work__button");
  if (workButton2) workButton2.innerHTML = txt;

  txt = "<p id='bx-title5'>Tesla Cybertruck</p>";
  let bxTitle5 = document.getElementById("bx-title5");
  if (bxTitle5) bxTitle5.innerHTML = txt;

  txt = "<p id='bx-text5'>Fascinated by the minimal design of this car, I decided to make my own version in Blender.</p>";
  let bxText5 = document.getElementById("bx-text5");
  if (bxText5) bxText5.innerHTML = txt;

  txt = "<p id='work__button'>OPEN!</p>";
  let workButton5 = document.getElementById("work__button");
  if (workButton5) workButton5.innerHTML = txt;

  txt = "<p id='bx-title6'>My First Game</p>";
  let bxTitle6 = document.getElementById("bx-title6");
  if (bxTitle6) bxTitle6.innerHTML = txt;

  txt = "<p id='bx-text6'>I'm working on a music based game based on square and rectangular shapes, but it's very much work-in-progress still.</p>";
  let bxText6 = document.getElementById("bx-text6");
  if (bxText6) bxText6.innerHTML = txt;

  txt = "<p id='work__button'>OPEN!</p>";
  let workButton6 = document.getElementById("work__button");
  if (workButton6) workButton6.innerHTML = txt;

  txt = "<p id='bx-title7'>My First Website</p>";
  let bxTitle7 = document.getElementById("bx-title7");
  if (bxTitle7) bxTitle7.innerHTML = txt;

  txt = "<p id='bx-text7'>I can't forget to mention this website, my last project and my favourite one for now <i class='bx bx-smile' ></i>. <br>Click to view the source code! <i class='bx bx-code-block'></i></p>";
  let bxText7 = document.getElementById("bx-text7");
  if (bxText7) bxText7.innerHTML = txt;

  txt = "<p id='work__button'>OPEN!</p>";
  let workButton7 = document.getElementById("work__button");
  if (workButton7) workButton7.innerHTML = txt;

  txt = "<p id='bx-title8'>Mandelbrot Set</p>";
  let bxTitle8 = document.getElementById("bx-title8");
  if (bxTitle8) bxTitle8.innerHTML = txt;

  txt = "<p id='bx-text8'>This is one of my coolest generative art projects, made following a tutorial of 'The Art Of Code'. Look at those beautiful colors!</p>";
  let bxText8 = document.getElementById("bx-text8");
  if (bxText8) bxText8.innerHTML = txt;

  txt = "<p id='work__button'>OPEN!</p>";
  let workButton8 = document.getElementById("work__button");
  if (workButton8) workButton8.innerHTML = txt;

  txt = "<p id='bx-title9'>Rock Paper Scissors</p>";
  let bxTitle9 = document.getElementById("bx-title9");
  if (bxTitle9) bxTitle9.innerHTML = txt;

  txt = "<p id='bx-text9'>Challenge your computer to win in this funny and simple game!</p>";
  let bxText9 = document.getElementById("bx-text9");
  if (bxText9) bxText9.innerHTML = txt;

  txt = "<p id='work__button'>OPEN!</p>";
  let workButton9 = document.getElementById("work__button");
  if (workButton9) workButton9.innerHTML = txt;

  txt = "<p id='bx-title10'>Blog</p>";
  let bxTitle10 = document.getElementById("bx-title10");
  if (bxTitle10) bxTitle10.innerHTML = txt;

  txt = "<p id='bx-text10'>Here I write about my thoughts, my life and my passions.<br>Click to visit it!</p>";
  let bxText10 = document.getElementById("bx-text10");
  if (bxText10) bxText10.innerHTML = txt;

  txt = "<p id='work__button'>OPEN!</p>";
  let workButton10 = document.getElementById("work__button");
  if (workButton10) workButton10.innerHTML = txt;

  txt = "<p id='bx-title11'>C/C++ Notes</p>";
  let bxTitle11 = document.getElementById("bx-title11");
  if (bxTitle11) bxTitle11.innerHTML = txt;

  txt = "<p id='bx-text11'>If you want to learn C++ this is the best place to do it!<br>Click to visit it!</p>";
  let bxText11 = document.getElementById("bx-text11");
  if (bxText11) bxText11.innerHTML = txt;

  txt = "<p id='work__button'>OPEN!</p>";
  let workButton11 = document.getElementById("work__button");
  if (workButton11) workButton11.innerHTML = txt;

  txt = "<p id='bx-title12'>Chrome Extensions</p>";
  let bxTitle12 = document.getElementById("bx-title12");
  if (bxTitle12) bxTitle12.innerHTML = txt;

  txt = "<p id='bx-text12'>I've experimented with the Chrome API building a few little extensions.</p>";
  let bxText12 = document.getElementById("bx-text12");
  if (bxText12) bxText12.innerHTML = txt;

  txt = "<p id='work__button'>OPEN!</p>";
  let workButton12 = document.getElementById("work__button");
  if (workButton12) workButton12.innerHTML = txt;

  txt = "<p id='bx-title13'>Windows 11 Wallpaper</p>";
  let bxTitle13 = document.getElementById("bx-title13");
  if (bxTitle13) bxTitle13.innerHTML = txt;

  txt = "<p id='bx-text13'>Inspired by a tutorial from Haritha Siriwardana, I've created a wallpaper in Blender using cloth simulation in the Windows 11 design style.</p>";
  let bxText13 = document.getElementById("bx-text13");
  if (bxText13) bxText13.innerHTML = txt;

  txt = "<p class='contact__text' id='contact__text'>Currently, <strong>I'm not available to get a job</strong> so there is no need to contact me here. <br>You can still reach me on <a href=\"https://bsky.app/profile/sam-med.bsky.social\" target=\"_blank\">Bluesky</a> if you need to <i class='bx bx-smile' ></i>.</p>";
  let contactText = document.getElementById("contact__text");
  if (contactText) contactText.innerHTML = txt;

  txt = "<p id='footer__text'>Copyright &#169; Samuel Mediani 2019.<br>Customized from this <i><a href='https://youtu.be/AKNvTxWOdKw'>template</a></i>.</p>";
  let footerText = document.getElementById("footer__text");
  if (footerText) footerText.innerHTML = txt;
}

// ITALIANO
function ita() {
  let txt = "";

  txt = "<p class='home__title'>Ciao, <br>sono <span class='home__title-color'>Samuel</span><br> mi piace creare </p>";
  let homeTitle = document.getElementById("home__title");
  if (homeTitle) homeTitle.innerHTML = txt;

  txt = '["videogiochi", "modelli 3D", "siti web", "tutorial", "illustrazioni", "frattali", "musica", "arte generativa"]';
  let typewriteElement = document.querySelector(".typewrite");
  if (typewriteElement) typewriteElement.setAttribute("data-type", txt);

  txt = "Ottieni il mio CV <i class='bx bxs-download'></i>";
  let cvButton = document.getElementById("cv-button");
  if (cvButton) cvButton.innerHTML = txt;

  txt = "<p class='about__subtitle'>Qualcosa su di me</p>";
  let aboutSubtitle = document.getElementById("about__subtitle");
  if (aboutSubtitle) aboutSubtitle.innerHTML = txt;

  txt = "<p class='about__text1'>Benvenuto fortunato visitatore! Sono uno studente italiano di </p>";
  let aboutText1 = document.getElementById("about__text1");
  if (aboutText1) aboutText1.innerHTML = txt;

  txt = "<p class='about__text2'> anni che ama programmare e imparare cose nuove (pensa a questo sito come una dimostrazione delle mie passioni <i class='bx bx-smile' ></i>).<br> Frequento l'università di Informatica, ma la maggior parte dei progetti che vedi qui sono il risultato di abilità autodidatte prima di impararle a scuola.<br> Mi piace sperimentare con vari aspetti dello sviluppo software e ho interessi anche in altri campi. In generale, ho sempre amato provare cose nuove e imparare dai miei esperimenti.<br> Per ora ho realizzato progetti personali relativi allo sviluppo di app, web e giochi, ma mi interesso anche di modellazione 3D, design grafico, disegno, design UI e produzione musicale (Ableton).<br> Attualmente non sono specializzato in nessuno di questi campi in particolare, sto ancora cercando il migliore per me.<br> In ogni caso questo sito ha lo scopo di mostrare i miei progetti preferiti, oltre a tenere traccia del mio percorso attraverso di essi.</p>";
  let aboutText2 = document.getElementById("about__text2");
  if (aboutText2) aboutText2.innerHTML = txt;

  txt = "<p class='back-text' id='back-text'>Ciao!</p>";
  let backText = document.getElementById("back-text");
  if (backText) backText.innerHTML = txt;

  txt = "<p class='back-text2' id='back-text2'>Sono io!</p>";
  let backText2 = document.getElementById("back-text2");
  if (backText2) backText2.innerHTML = txt;

  txt = "<p class='skills__subtitle' id='skills__subtitle'>Abilità professionali</p>";
  let skillsSubtitle = document.getElementById("skills__subtitle");
  if (skillsSubtitle) skillsSubtitle.innerHTML = txt;

  txt = "<p class='skills__text' id='skills__text'>Per quanto riguarda i linguaggi di programmazione, ho usato HTML <i class='bx bxl-html5 ' ></i>, CSS <i class='bx bxl-css3 ' ></i>, JavaScript <i class='bx bxl-javascript ' ></i> (sia vanilla che con alcune librerie), Python, C# (in Unity), C++ e Java, ma continuo a imparare cose nuove su di essi.<br>I programmi che ho usato (o con cui ho sperimentato) sono Unity, Blender, Visual Studio, Android Studio, Figma, GIMP e altri (vedi l'immagine ➡️).</p>";
  let skillsText = document.getElementById("skills__text");
  if (skillsText) skillsText.innerHTML = txt;

  txt = "<p class='work__text' id='work__text'>Questi sono alcuni dei miei migliori progetti:</p>";
  let workText = document.getElementById("work__text");
  if (workText) workText.innerHTML = txt;

  txt = "<p id='bx-title1'>Blender Scritta Neon</p>";
  let bxTitle1 = document.getElementById("bx-title1");
  if (bxTitle1) bxTitle1.innerHTML = txt;

  txt = "<p id='bx-text1'>In questo progetto - ispirato da un tutorial di Blender Guru - ho creato una scritta neon con il mio nome.</p>";
  let bxText1 = document.getElementById("bx-text1");
  if (bxText1) bxText1.innerHTML = txt;

  txt = "<p id='work__button'>APRI!</p>";
  let workButton = document.getElementById("work__button");
  if (workButton) workButton.innerHTML = txt;

  txt = "<p id='bx-title2'>Primo Paesaggio</p>";
  let bxTitle2 = document.getElementById("bx-title2");
  if (bxTitle2) bxTitle2.innerHTML = txt;

  txt = "<p id='bx-text2'>Questo è uno dei miei primi progetti Blender che ho realizzato (2019). È ispirato a un lavoro simile di Matt Stark.</p>";
  let bxText2 = document.getElementById("bx-text2");
  if (bxText2) bxText2.innerHTML = txt;

  txt = "<p id='work__button'>APRI!</p>";
  let workButton2 = document.getElementById("work__button");
  if (workButton2) workButton2.innerHTML = txt;

  txt = "<p id='bx-title5'>Tesla Cybertruck</p>";
  let bxTitle5 = document.getElementById("bx-title5");
  if (bxTitle5) bxTitle5.innerHTML = txt;

  txt = "<p id='bx-text5'>Affascinato dal design minimalista di questa macchina, ho deciso di creare la mia versione in Blender.</p>";
  let bxText5 = document.getElementById("bx-text5");
  if (bxText5) bxText5.innerHTML = txt;

  txt = "<p id='work__button'>APRI!</p>";
  let workButton5 = document.getElementById("work__button");
  if (workButton5) workButton5.innerHTML = txt;

  txt = "<p id='bx-title6'>Il mio primo gioco</p>";
  let bxTitle6 = document.getElementById("bx-title6");
  if (bxTitle6) bxTitle6.innerHTML = txt;

  txt = "<p id='bx-text6'>Sto lavorando a un gioco basato sulla musica basato su forme quadrate e rettangolari, ma è ancora molto in fase di sviluppo.</p>";
  let bxText6 = document.getElementById("bx-text6");
  if (bxText6) bxText6.innerHTML = txt;

  txt = "<p id='work__button'>APRI!</p>";
  let workButton6 = document.getElementById("work__button");
  if (workButton6) workButton6.innerHTML = txt;

  txt = "<p id='bx-title7'>Il mio primo sito web</p>";
  let bxTitle7 = document.getElementById("bx-title7");
  if (bxTitle7) bxTitle7.innerHTML = txt;

  txt = "<p id='bx-text7'>Non posso dimenticare di menzionare questo sito web, il mio ultimo progetto e il mio preferito per ora <i class='bx bx-smile' ></i>. <br>Fai clic per visualizzare il codice sorgente! <i class='bx bx-code-block'></i></p>";
  let bxText7 = document.getElementById("bx-text7");
  if (bxText7) bxText7.innerHTML = txt;

  txt = "<p id='work__button'>APRI!</p>";
  let workButton7 = document.getElementById("work__button");
  if (workButton7) workButton7.innerHTML = txt;

  txt = "<p id='bx-title8'>Insieme di Mandelbrot</p>";
  let bxTitle8 = document.getElementById("bx-title8");
  if (bxTitle8) bxTitle8.innerHTML = txt;

  txt = "<p id='bx-text8'>Questo è uno dei miei progetti di arte generativa più belli, realizzato seguendo un tutorial di 'The Art Of Code'. Guarda quei bellissimi colori!</p>";
  let bxText8 = document.getElementById("bx-text8");
  if (bxText8) bxText8.innerHTML = txt;

  txt = "<p id='work__button'>APRI!</p>";
  let workButton8 = document.getElementById("work__button");
  if (workButton8) workButton8.innerHTML = txt;

  txt = "<p id='bx-title9'>Carta Forbice Sasso</p>";
  let bxTitle9 = document.getElementById("bx-title9");
  if (bxTitle9) bxTitle9.innerHTML = txt;

  txt = "<p id='bx-text9'>Sfida il tuo computer a vincere in questo gioco divertente e semplice!</p>";
  let bxText9 = document.getElementById("bx-text9");
  if (bxText9) bxText9.innerHTML = txt;

  txt = "<p id='work__button'>APRI!</p>";
  let workButton9 = document.getElementById("work__button");
  if (workButton9) workButton9.innerHTML = txt;

  txt = "<p id='bx-title10'>Blog</p>";
  let bxTitle10 = document.getElementById("bx-title10");
  if (bxTitle10) bxTitle10.innerHTML = txt;

  txt = "<p id='bx-text10'>Qui scrivo dei miei pensieri, della mia vita e delle mie passioni.<br>Fai clic per visitarlo!</p>";
  let bxText10 = document.getElementById("bx-text10");
  if (bxText10) bxText10.innerHTML = txt;

  txt = "<p id='work__button'>APRI!</p>";
  let workButton10 = document.getElementById("work__button");
  if (workButton10) workButton10.innerHTML = txt;

  txt = "<p id='bx-title11'>Appunti C/C++</p>";
  let bxTitle11 = document.getElementById("bx-title11");
  if (bxTitle11) bxTitle11.innerHTML = txt;

  txt = "<p id='bx-text11'>Se vuoi imparare C++ questo è il posto migliore per farlo!<br>Fai clic per visitarlo!</p>";
  let bxText11 = document.getElementById("bx-text11");
  if (bxText11) bxText11.innerHTML = txt;

  txt = "<p id='work__button'>APRI!</p>";
  let workButton11 = document.getElementById("work__button");
  if (workButton11) workButton11.innerHTML = txt;

  txt = "<p id='bx-title12'>Estensioni Chrome</p>";
  let bxTitle12 = document.getElementById("bx-title12");
  if (bxTitle12) bxTitle12.innerHTML = txt;

  txt = "<p id='bx-text12'>Ho sperimentato con l'API di Chrome costruendo alcune piccole estensioni.</p>";
  let bxText12 = document.getElementById("bx-text12");
  if (bxText12) bxText12.innerHTML = txt;

  txt = "<p id='work__button'>APRI!</p>";
  let workButton12 = document.getElementById("work__button");
  if (workButton12) workButton12.innerHTML = txt;

  txt = "<p id='bx-title13'>Sfondo di Windows 11</p>";
  let bxTitle13 = document.getElementById("bx-title13");
  if (bxTitle13) bxTitle13.innerHTML = txt;

  txt = "<p id='bx-text13'>Ispirato da un tutorial di Haritha Siriwardana, ho creato uno sfondo in Blender utilizzando la simulazione del tessuto nello stile di design di Windows 11.</p>";
  let bxText13 = document.getElementById("bx-text13");
  if (bxText13) bxText13.innerHTML = txt;

  txt = "<p class='contact__text' id='contact__text'>Attualmente, <strong>non sono disponibile per un lavoro</strong> quindi non c'è bisogno di contattarmi qui. <br>Puoi comunque raggiungermi su <a href=\"https://bsky.app/profile/sam-med.bsky.social\" target=\"_blank\">Bluesky</a> se ne hai bisogno <i class='bx bx-smile' ></i>.</p>";
  let contactText = document.getElementById("contact__text");
  if (contactText) contactText.innerHTML = txt;

  txt = "<p id='footer__text'>Copyright &#169; 2019 Samuel Mediani.<br>Personalizzato da questo <i><a href='https://youtu.be/AKNvTxWOdKw'>template</a></i>.</p>";
  let footerText = document.getElementById("footer__text");
  if (footerText) footerText.innerHTML = txt;
}
