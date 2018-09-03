
// TODO A wall of available commands

$(document).ready (function() {

  let $terminal = $ ('#terminal');
  let historyDisplayedIndex = -1;
  let lastDisplayedIndex = -1;

  let termHistory = [];

  // Text options
  let wakeUp = "Wake up, Neo...",
  knock = "Knock, knock, Neo...",
  about = 'My name is Sally Ragab, and I am a Front End Developer.',
  writeCode = "I write code",
  learnMore = "Learn more",
  quote = "There is no spoon.",
  listCommands = 'Available commands: [about] [bio] [clear] [contact] [skills] [social] [porfolio] [quote]',
  commandNotFound = 'Command not found. Don\'t worry, it\'s probably just a glitch in the Matrix. Gli Glitch in the Matrix trix.',
  skills = "Main: HTML5, CSS3, ReactJS, D3, GIT and Github.\n Familiar with: Haxe, OpenFL, Python, THREE.js, Node.js.",
  contact = "Contact me on Twitter -> @sally_dev"
  // let

  let arrowNavigationMode = false;

  let quotes = [
    "There is no spoon.",
    "Follow the white rabbit.",
    "Don't think you are, know you are.",
    "There's a difference between knowing the path and walking the path.",
    "Free your mind",
    "I can only show you the door. You're the one that has to walk through it.",
    "The time has come to make a choice.",
    "Choi: \"It just sounds to me like you need to unplug, man.",
    "You've been living in a dream world, Neo.",
    "What is \"real\"? How do you define \"real\"?",
    "Welcome to the real world.",
    "Because you have been down there Neo, you know that road, you know exactly where it ends. And I know that's not where you want to be.",
    "A déjà vu is usually a glitch in the Matrix. It happens when they change something.",
    "Do you believe that my being stronger or faster has anything to do with my muscles in this place? Do you think that's air you're breathing now?",
    "Neo: I know kung fu. \nMorpheus: [eyeing him, hand on chin] Show me.",
    "Trinity: Neo... nobody has ever done this before. \nNeo: That's why it's going to work.",
    "Neo: I thought it wasn't real. \nMorpheus: Your mind makes it real.",
    "The answer is out there, Neo, and it's looking for you. and it will find you if you want it to.",
    "So what do you need? Besides a miracle.",
    "I can only show you the door. You're the one that has to walk through it.",
    "Morpheus: [to Neo who is choosing the red pill] Remember... all I'm offering is the truth. Nothing more."
  ];

  function getRandomQuote() {
    var randomIndex = Math.round(Math.random() * (quotes.length-1));
    console.log("Random index generated is " + randomIndex);
    return quotes[randomIndex];
  }

  let list = "For a list of available commands, type 'help'";

  function generateContactHTML() {
    let contact = $('<ul id="abilities"></ul>');

    let codewars = $('<li></li>');
    let github = $('<li></li>');
    let linkedin = $('<li></li>');
    let twitter = $('<li></li>');


    let githubLink = $('<a>Github</a>').attr({
      'href': 'https://github.com/kallaway/',
      'target': '_blank'
    });

    let twitterLink = $('<a>Twitter</a>').attr({
      'href': 'http://www.codewars.com/users/sally_dev',
      'target': '_blank'
    });

    let linkedinlink = $('<a>LinkedIn</a>').attr({
      'href': 'https://ca.linkedin.com/in/sallyragab',
      'target': '_blank'
    })

    codewars.append(codewarsLink);
    github.append(githubLink);
    Linkedin.append(linkedinLink);
    twitter.append(twitterLink);


    console.log("$$$ Github element is currently: ");
    console.log(github);

    contact.append(codewars);
    contact.append(github);
    contact.append(linkedin);
    contact.append(twitter);

    console.log("*** Working with the DOM: contactEl - ");
    console.log(contact);
    return contact;

    arrowNavigationMode = true;
  }

  function generatePortfolioHTML() {
    let portfolioContainer = $('<div></div>');

    let portfolioLink = $('<a>here</a>').attr({
      'href': 'https://codepen.io/kallaway/',
      'target': '_blank'
    });

    let portfolioText = "You can see my portfolio of projects live ";

    portfolioContainer.append(portfolioText);
    portfolioContainer.append(portfolioLink);

    return portfolioContainer;
  }

  function generateSkillHTML() {
    let skillsFullOne = $('<div id="skills"></div>');

    let skillsFull = $('<div id="skills"><p>> list skill</p><p>> where &lt;skill&gt; is one of:<skill><p class= "subresult">HTML5, CSS3, ReactJS, D3, GIT and Github, </p></div><div id="familiar"><p>> list familiar area:</p><p>> where &lt;area&gt; is one of:</p><p class="subresult">Haxe,OpenFL, Python, THREE.js, Node.js</p></div>')
  }

  // <li><i class="fa fa-suitcase"></i> <a href="https://www.vretta.com/" target="_blank">work</a></li>

  let shortBio = 'Self-taught web developer, absolutely passionate about coding and the future of technology. I am constantly learning and expanding my skills. While you are reading this, I am probably busy learning something new. I am interested in habit development, language learning (currently French), startups.';
  let typeSpeedSuperFast = 30;
  let typeSpeedSlow = 75;
  let typeSpeedFast = 60;

  var autotype = function(el, text, i, interval) {
    if (i < text.length) {
      $(el).append(text[i++]);
      setTimeout(function () { autotype(el, text, i, interval); }, interval);
      return $(el);
    };

    function clearTerminal() {
      $('.term-output').remove();
    }
  }
  }
}
