
function importAll(r) {
    let images = {};
    r.keys().forEach((img) => {
        images[img.replace('./', '').replace(/\.(png|jpe?g|svg|webp)$/, '')] = r(img);
    });
    return images;
}

const devIcons = importAll(require.context('../../assets/devicons', false, /\.(png|jpe?g|svg)$/));

const devItems = [
    { name: 'python', title: 'Python', icon: devIcons.python },
    { name: 'js', title: 'Javascript', icon: devIcons.javascript },
    { name: 'html', title: 'HTML5', icon: devIcons.html5 },
    { name: 'css', title: 'CSS3', icon: devIcons.css3 },
    { name: 'react', title: 'React', icon: devIcons.react },
    { name: 'node', title: 'Node.JS', icon: devIcons.nodejs },
    { name: 'express', title: 'Express', icon: devIcons.express },
    { name: 'mongodb', title: 'MongoDB', icon: devIcons.mongodb },
    { name: 'jest', title: 'Jest', icon: devIcons.jest },
    { name: 'webpack', title: 'Webpack', icon: devIcons.webpack },
    { name: 'npm', title: 'NPM', icon: devIcons.npm },
    { name: 'django', title: 'Django', icon: devIcons.django },
    { name: 'numpy', title: 'Numpy', icon: devIcons.numpy },
    { name: 'pandas', title: 'Pandas', icon: devIcons.pandas },
];

export default devItems