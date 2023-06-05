/* ========= CHANGE LANGUAGE ========= */
let isItalian = false;

// ENGLISH
function eng() {
  let txt = "";

  txt = "<p class='home__title'>Hi, <br>I'm <span class='home__title-color'>Samuel</span><br> I love making </p>";
  document.getElementById("home__title").innerHTML = txt;

  // txt = "<div><h1 class='space-before'>-<a href='#work' class='typewrite' id='typewrite' data-type='['videogames', '3D models', 'websites', 'tutorials', 'illustrations', 'fractals']' <span class='wrap'></span></a></h1></div>";
  // document.getElementById("typewrite").innerHTML = txt;
  txt = '["videogames", "3D models", "websites", "tutorials", "illustrations", "fractals"]';
  let typewriteElement = document.querySelector(".typewrite");
  typewriteElement.setAttribute("data-type", txt);

  txt = "Get my CV <i class='bx bxs-download'></i>";
  document.getElementById("cv-button").innerHTML = txt;

  txt = "<p class='about__subtitle'>Something about me</p>";
  document.getElementById("about__subtitle").innerHTML = txt;

  txt = "<p class='about__text1'>Welcome lucky visitor! I am a </p>";
  document.getElementById("about__text1").innerHTML = txt;
  txt = "<p class='about__text2'> years old italian student who loves programming and learning new things (think of this website as a demonstration of my passions <i class='bx bx-smile' ></i>). <br> I'm attending the upper secondary school in an Information Technology institute, but everything you see here is done by learning the skills I needed as a self-taught. <br> Indeed I like to experiment with pretty much every aspect of developing in general and trying out new things to learn from them to improve myself. <br> For now I have done work in software, web and videogame develompment, but I also occasionally experiment with fractals (2D and 3D) and do graphic design. <br>  Currently I'm not specialized in any of these fields in particular, I'm still finding the best one for me. <br>  In any case this website serves the purpose of demonstrating my latest projects, as well as to keep track of my journey through them.</p>";
  document.getElementById("about__text2").innerHTML = txt;

  txt = "<p class='back-text' id='back-text'>Hi!</p>";
  document.getElementById("back-text").innerHTML = txt;

  txt = "<p class='back-text2' id='back-text2'>It's me!</p>";
  document.getElementById("back-text2").innerHTML = txt;

  txt = "<p class='skills__subtitle' id='skills__subtitle'>Professional skills</p>";
  document.getElementById("skills__subtitle").innerHTML = txt;

  txt = "<p class='skills__text' id='skills__text'>As for programming languages, I've used HTML <i class='bx bxl-html5 ' ></i>, CSS <i class='bx bxl-css3 ' ></i>, JavaScript <i class='bx bxl-javascript ' ></i> (both vanilla and with some libraries), Python, C# (in Unity), C++ and Java, but I'm constantly learning new things about them.<br>The programs that I've used (or sperimented with) are Unity, Blender, Visual Studio, Visual Studio Code, Android Studio, Figma and others (see the image ➡️).</p>";
  document.getElementById("skills__text").innerHTML = txt;

  txt = "<p class='work__text' id='work__text'>These are some of my best projects:</p>";
  document.getElementById("work__text").innerHTML = txt;

  txt = "<p id='bx-title1'>Blender Neon Text</p>";
  document.getElementById("bx-title1").innerHTML = txt;
  txt = "<p id='bx-text1'>In this project - inspired by a tutorial of Blender Guru - I've created a neon text with my name.</p>";
  document.getElementById("bx-text1").innerHTML = txt;
  txt = "<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title2'>First Landscape</p>";
  document.getElementById("bx-title2").innerHTML = txt;
  txt = "<p id='bx-text2'>This is one of my first Blender projects I've made (2019).</p>";
  document.getElementById("bx-text2").innerHTML = txt;
  txt = "<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  // txt = "<p id='bx-title3'>Candle</p>";
  // document.getElementById("bx-title3").innerHTML = txt;
  // txt = "<p id='bx-text3'>Another project of a melting candle (using subsurface scattering).</p>";
  // document.getElementById("bx-text3").innerHTML = txt;
  // txt = "<p id='work__button'>OPEN!</p>";
  // document.getElementById("work__button").innerHTML = txt;

  // txt = "<p id='bx-title4'>Realistic Landscape</p>";
  // document.getElementById("bx-title4").innerHTML = txt;
  // txt = "<p id='bx-text4'>Here I tryed to make a realistic landscape with Terragen 4 (note the differences with the Blender one).</p>";
  // document.getElementById("bx-text4").innerHTML = txt;
  // txt = "<p id='work__button'>OPEN!</p>";
  // document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title5'>Tesla Cybertruck</p>";
  document.getElementById("bx-title5").innerHTML = txt;
  txt = "<p id='bx-text5'>Fascinated by the minimal design of this car, I decided to make my own version in Blender.</p>";
  document.getElementById("bx-text5").innerHTML = txt;
  txt = "<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title6'>My First Game</p>";
  document.getElementById("bx-title6").innerHTML = txt;
  txt = "<p id='bx-text6'>Now I'm working on a game based on squares, but it's work-in-progress yet.</p>";
  document.getElementById("bx-text6").innerHTML = txt;
  txt = "<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title7'>My First Website</p>";
  document.getElementById("bx-title7").innerHTML = txt;
  txt = "<p id='bx-text7'>I can't forget to mention this website, my last project and my favourite one for now <i class='bx bx-smile' ></i>. <br>Click to view the source code! <i class='bx bx-code-block'></i></p>";
  document.getElementById("bx-text7").innerHTML = txt;
  txt = "<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title8'>Mandelbrot Set</p>";
  document.getElementById("bx-title8").innerHTML = txt;
  txt = "<p id='bx-text8'>This is one of my favourite projects, by a tutorial of 'The Art Of Code'. Look at these beautiful colors!</p>";
  document.getElementById("bx-text8").innerHTML = txt;
  txt = "<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title9'>Rock Paper Scissors</p>";
  document.getElementById("bx-title9").innerHTML = txt;
  txt = "<p id='bx-text9'>Challenge your computer to win in this funny and simple game!</p>";
  document.getElementById("bx-text9").innerHTML = txt;
  txt = "<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title10'>Blog</p>";
  document.getElementById("bx-title10").innerHTML = txt;
  txt = "<p id='bx-text10'>Here I write about my thoughts, my life and my passions.<br>Click to visit it!</p>";
  document.getElementById("bx-text10").innerHTML = txt;
  txt = "<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title11'>C/C++ Notes</p>";
  document.getElementById("bx-title11").innerHTML = txt;
  txt = "<p id='bx-text11'>If you want to learn C++ this is the best place to do it!<br>Click to visit it!</p>";
  document.getElementById("bx-text11").innerHTML = txt;
  txt = "<p id='work__button'>OPEN!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p class='contact__text' id='contact__text'>Currently <strong>I'm not avaiable to get a job</strong> so there is no need to contact me here. <br>You can still reach me on <a href=\"https://twitter.com/medianisamuel\" target=\"_blank\">Twitter</a> if you need to <i class='bx bx-smile' ></i>.</p>";
  document.getElementById("contact__text").innerHTML = txt;

  txt = "<p id='footer__text'>Copyright &#169; Samuel Mediani 2019.<br>Customized from <i><a href='https://youtu.be/AKNvTxWOdKw'>this</a></i> template.</p>";
  document.getElementById("footer__text").innerHTML = txt;
}

// ITALIANO
function ita() {
  let txt = "";

  txt = "<p class='home__title'>Ciao, <br>sono <span class='home__title-color'>Samuel</span><br> mi piace creare </p>";
  document.getElementById("home__title").innerHTML = txt;

  // txt = "<div><h1 class='space-before'>-<a href='#work' class='typewrite' id='typewrite' data-type='['videogiochi', 'modelli 3D', 'siti web', 'tutorials', 'illustrazioni', 'frattali']' <span class='wrap'></span></a></h1></div>";
  // document.getElementById("typewrite").innerHTML = txt;
  txt = '["videogiochi", "modelli 3D", "siti web", "tutorial", "illustrazioni", "frattali"]';
  let typewriteElement = document.querySelector(".typewrite");
  typewriteElement.setAttribute("data-type", txt);
  
  txt = "Ottieni il mio CV <i class='bx bxs-download'></i>";
  document.getElementById("cv-button").innerHTML = txt;

  txt = "<p class='about__subtitle'>Qualcosa su di me</p>";
  document.getElementById("about__subtitle").innerHTML = txt;

  txt = "<p class='about__text1'>Benvenuto fortunato visitatore! Sono uno studente italiano di </p>";
  document.getElementById("about__text1").innerHTML = txt;
  txt = "<p class='about__text2'> anni che ama programmare e imparare cose nuove (pensa a questo sito come una dimostrazione delle mie passioni <i class='bx bx-smile' ></i>). <br> Frequento le superiori all'Istituto Tecnico Informatico, ma ogni cosa che vedi qui è stata fatta imparando le abilità che mi servivano da autodidatta. <br> Infatti mi piace sperimentare con la maggior parte degli aspetti dello sviluppo informatico in generale e prolete nuove cose da imparare da quest'ultimi per migliorare me stesso. <br> Per ora ho lavorato per realizzare applicazioni software, siti web e videogiochi, ma ho anche occasionalmente sperimentato con i frattali (2D e 3D) e qualche volta disegno grafica vettoriale. <br> Attualmente non sono specializzato in nessuno di questi campi in particolare, sto ancora cercando il migliore per me. <br> In ogni caso questo sito ha lo scopo di mostrare i miei ultimi progetti e tenere traccia della avventura che compio grazie a essi.</p>";
  document.getElementById("about__text2").innerHTML = txt;

  txt = "<p class='back-text' id='back-text'>Ciao!</p>";
  document.getElementById("back-text").innerHTML = txt;

  txt = "<p class='back-text2' id='back-text2'>Sono io!</p>";
  document.getElementById("back-text2").innerHTML = txt;

  txt = "<p class='skills__subtitle' id='skills__subtitle'>Abilità professionali</p>";
  document.getElementById("skills__subtitle").innerHTML = txt;

  txt = "<p class='skills__text' id='skills__text'>Per quanto riguarda i linguaggi di programmazione, ho usato HTML <i class='bx bxl-html5 ' ></i>, CSS <i class='bx bxl-css3 ' ></i>, JavaScript <i class='bx bxl-javascript ' ></i> (sia vanilla che con alcune librerie), Python, C# (in Unity), C++ e Java, ma continuo a imparare cose nuove su di essi.<br>I programmi che ho usato (o con cui ho sperimentato) sono Unity, Blender, Visual Studio, Visual Studio Code, Android Studio, Figma e altri (vedi l'immagine ➡️).</p>";
  document.getElementById("skills__text").innerHTML = txt;

  txt = "<p class='work__text' id='work__text'>Questi sono alcuni dei miei migliori progetti:</p>";
  document.getElementById("work__text").innerHTML = txt;

  txt = "<p id='bx-title1'>Blender Scritta Neon</p>";
  document.getElementById("bx-title1").innerHTML = txt;
  txt = "<p id='bx-text1'>In questo progetto - ispirato da un tutorial di Blender Guru - ho creato una scritta neon con il mio nome.</p>";
  document.getElementById("bx-text1").innerHTML = txt;
  txt = "<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title2'>Primo Paesaggio</p>";
  document.getElementById("bx-title2").innerHTML = txt;
  txt = "<p id='bx-text2'>Questo è uno dei miei primi progetti fatti con Blender (2019).</p>";
  document.getElementById("bx-text2").innerHTML = txt;
  txt = "<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  // txt = "<p id='bx-title3'>Candela</p>";
  // document.getElementById("bx-title3").innerHTML = txt;
  // txt = "<p id='bx-text3'>Un altro progetto di una candela che si scioglie (usando il subsurface scattering).</p>";
  // document.getElementById("bx-text3").innerHTML = txt;
  // txt = "<p id='work__button'>APRI!</p>";
  // document.getElementById("work__button").innerHTML = txt;

  // txt = "<p id='bx-title4'>Paesaggio Realistico</p>";
  // document.getElementById("bx-title4").innerHTML = txt;
  // txt = "<p id='bx-text4'>Qui ho provato a creare un paesaggio realistico con Terragen 4 (notare le differenze con la versione Blender).</p>";
  // document.getElementById("bx-text4").innerHTML = txt;
  // txt = "<p id='work__button'>APRI!</p>";
  // document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title5'>Tesla Cybertruck</p>";
  document.getElementById("bx-title5").innerHTML = txt;
  txt = "<p id='bx-text5'>Affascinato dal design minimale di questa macchina, ho deciso di creare la mia versione con Blender.</p>";
  document.getElementById("bx-text5").innerHTML = txt;
  txt = "<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title6'>Primo Gioco</p>";
  document.getElementById("bx-title6").innerHTML = txt;
  txt = "<p id='bx-text6'>Ora sto lavorando su un gioco basato sui quadrati, ma è ancora work-in-progress.</p>";
  document.getElementById("bx-text6").innerHTML = txt;
  txt = "<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title7'>Primo Sito</p>";
  document.getElementById("bx-title7").innerHTML = txt;
  txt = "<p id='bx-text7'>Non posso dimenticare di menzionare questo sito, il mio ultimo progetto e il mio preferito per ora <i class='bx bx-smile' ></i>. Clicca per il codice! <i class='bx bx-code-block'></i></p>";
  document.getElementById("bx-text7").innerHTML = txt;
  txt = "<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title8'>Mandelbrot Set</p>";
  document.getElementById("bx-title8").innerHTML = txt;
  txt = "<p id='bx-text8'>Questo è uno dei miei progetti preferiti, da un tutorial di 'The Art Of Code'. Guarda che bei colori!</p>";
  document.getElementById("bx-text8").innerHTML = txt;
  txt = "<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title9'>Sasso Carta Forbici</p>";
  document.getElementById("bx-title9").innerHTML = txt;
  txt = "<p id='bx-text9'>Sfida il tuo computer a vincere in questo gioco semplice e divertente!</p>";
  document.getElementById("bx-text9").innerHTML = txt;
  txt = "<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title10'>Blog</p>";
  document.getElementById("bx-title10").innerHTML = txt;
  txt = "<p id='bx-text10'>Qui scrivo sui miei pensieri, sulla mia vita e sulle mie passioni.<br>Clicca per visitarlo!</p>";
  document.getElementById("bx-text10").innerHTML = txt;
  txt = "<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p id='bx-title11'>C/C++ Notes</p>";
  document.getElementById("bx-title11").innerHTML = txt;
  txt = "<p id='bx-text11'>Se vuoi imparare C++ questo è il posto migliore per farlo!<br>Clicca per aprirlo!</p>";
  document.getElementById("bx-text11").innerHTML = txt;
  txt = "<p id='work__button'>APRI!</p>";
  document.getElementById("work__button").innerHTML = txt;

  txt = "<p class='contact__text' id='contact__text'>Attualmente <strong>non sono disponibile per ottenere un lavoro</strong> quindi non c'è nessun bisogno di contattarmi qui. <br>Se necessario, puoi comunque trovarmi su <a href=\"https://twitter.com/medianisamuel\" target=\"_blank\">Twitter</a> <i class='bx bx-smile' ></i>.</p>";
  document.getElementById("contact__text").innerHTML = txt;

  txt = "<p id='footer__text'>Copyright &#169; Samuel Mediani 2019.<br>Personalizzato da <i><a href='https://youtu.be/AKNvTxWOdKw'>questo</a></i> template.</p>";
  document.getElementById("footer__text").innerHTML = txt;
}
