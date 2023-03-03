import {
    faCompactDisc,
    faFileInvoice,
    faCloudSunRain,
    faClipboardCheck,
    faCalculator,
    faImage,
    faShip,
    faSkullCrossbones,
    faPalette,
    faSquareXmark,
    faHandScissors,
} from '@fortawesome/free-solid-svg-icons';

const apps = [
    {
        name: 'Music library',
        repository: 'music-library',
        live: null,
        preview: '',
        icon: faCompactDisc,
        description:
            'Music library where the user can store the information of the albums they own or' +
            ' want. The user is then able to filter the database based on different criteria to' +
            ' using advanced patterns (examples are included in the filter text input). Table' +
            ' contents can also be sorted out by artist, album or release year. Any individual' +
            ' entry can be deleted manually.',
        techStack: ['react', 'firebase'],
        otherTools: ['Discogs API'],
        featured: true,
    },
    {
        name: 'CV generator',
        repository: 'cv-generator',
        live: null,
        preview: '',
        icon: faFileInvoice,
        description:
            'Generate your CV based on a give template inputting your own information. This' +
            ' project is the first contact with React and it meant to serve as an introduction to' +
            ' its basic concepts, e.g., props, component states and rendering.',
        techStack: ['react'],
        otherTools: [],
        featured: true,
    },
    {
        name: 'Weather app',
        repository: 'weather-app',
        live: null,
        preview: '',
        icon: faCloudSunRain,
        description:
            'Webb app to check the weather forecast in any location. ' +
            ' want. The user is then able to filter the database based on different criteria to' +
            ' using advanced patterns (examples are included in the filter text input). Table' +
            ' contents can also be sorted out by artist, album or release year. Any individual' +
            ' entry can be deleted manually.',
        techStack: ['html', 'css', 'js', 'webpack'],
        otherTools: ['OpenWeatherMap API', 'Geolocation API'],
    },
    {
        name: 'To-do manager',
        repository: 'todo-list',
        live: null,
        preview: '',
        icon: faClipboardCheck,
        description:
            'To-do task manager that allows the user to create, edit and delete tasks, grouping' +
            'them in projects.',
        techStack: ['html', 'css', 'js', 'webpack'],
        otherTools: ['OpenWeatherMap API', 'Geolocation API'],
    },
    {
        name: 'Calculator',
        repository: 'calculator-webpage',
        live: null,
        preview: '',
        icon: faCalculator,
        description:
            'Fully working calculator able to sum, subtract, multiply and divide any two decimal' +
            ' numbers. The user is also able to carry the result of an operation onto the next.' +
            ' A failsafe is also in place when attempting to divide by zero. The calculator' +
            ' includes a function to correct the input at any point by deleting characters. It' +
            ' also includes full keyboard support.',
        techStack: ['html', 'css', 'js'],
        otherTools: [],
        featured: true,
    },
    {
        name: 'Fetch me a gif',
        repository: 'fetch-me-a-gif',
        live: null,
        preview: '',
        icon: faImage,
        description:
            'Simple webb app to retrieve a GIF given some keywords designed as a practice exercise' +
            'to learn the basics of asynchronous code and how to work with APIs',
        techStack: ['html', 'css', 'js', 'webpack'],
        otherTools: ['Giphy API'],
    },
];

const games = [
    {
        name: 'Battleship',
        repository: 'battleship',
        live: null,
        preview: '',
        icon: faShip,
        description:
            'A minimalist design for the Battleship game. This project is set out as an introduction' +
            ' to test drive development (TDD). As part of this philosophy, test are arranged' +
            ' before the actual functionalities are implemented in the game code.',
        techStack: ['html', 'css', 'js', 'jest'],
        otherTools: [],
        featured: true,
    },
    {
        name: 'One Piece: Wanted',
        repository: 'memory-card',
        live: null,
        preview: '',
        icon: faSkullCrossbones,
        description:
            'One Piece themed memory card game. The goal is to locate the whereabouts of all the' +
            ' members of the Worst Generation, without repetition. The goal of the project is to' +
            ' React concepts such as functional hooks and lifecycle methods.',
        techStack: ['react'],
        otherTools: [],
        featured: true,
    },
    {
        name: 'Etch-A-Sketch',
        repository: 'etch-a-sketch',
        live: null,
        preview: '',
        icon: faPalette,
        description:
            'Interactive web-based Etch-A-Sketch where you can draw while holding any mouse' +
            ' button. It includes the possibility to modify the density of the grid, i.e. the' +
            ' number of drawing squares (1–100). Additionally it includes three different paint' +
            ' modes.',
        techStack: ['html', 'css', 'js'],
        otherTools: [],
        featured: true,
    },
    {
        name: 'Tic-Tac-Toe',
        repository: 'tic-tac-toe',
        live: null,
        preview: '',
        icon: faSquareXmark,
        description:
            'Game of Tic-Tac-Toe. You can play against another human player or against a robot.' +
            ' The game keeps the score of the rounds played and the whole game can be reset.',
        techStack: ['html', 'css', 'js'],
        otherTools: [],
    },

    {
        name: 'Rock, paper, scissors',
        repository: 'rock-paper-scissors',
        live: null,
        preview: '',
        icon: faHandScissors,
        description:
            'First project part of The Odin Project Full JavaScript Course meant to introduce' +
            ' the aspiring programmer to the basic concepts of how to implement interactivity to' +
            ' a webpage using JavaScript',
        techStack: ['html', 'css', 'js'],
        otherTools: [],
    },
];

export { apps, games };
