function importAll(r) {
    let images = {};
    r.keys().forEach((img) => {
        images[img.replace('./', '').replace(/\.(png|jpe?g|svg|webp)$/, '')] = r(img);
    });
    return images;
}

const devIcons = importAll(require.context('../../assets/devicons', false, /\.(png|jpe?g|svg)$/));

const devItems = {
    python: { title: 'Python', icon: devIcons.python },
    js: { title: 'Javascript', icon: devIcons.javascript },
    html: { title: 'HTML5', icon: devIcons.html5 },
    css: { title: 'CSS3', icon: devIcons.css3 },
    sass: { title: 'SASS', icon: devIcons.sass },
    react: { title: 'React', icon: devIcons.react },
    vue: { title: 'Vue', icon: devIcons.vue },
    // node: {  title: 'Node.JS', icon: devIcons.nodejs },
    // express: {  title: 'Express', icon: devIcons.express },
    mongodb: { title: 'MongoDB', icon: devIcons.mongodb },
    firebase: { title: 'Firebase', icon: devIcons.firebase },
    jest: { title: 'Jest', icon: devIcons.jest },
    webpack: { title: 'Webpack', icon: devIcons.webpack },
    npm: { title: 'NPM', icon: devIcons.npm },
    django: { title: 'Django', icon: devIcons.django },
    numpy: { title: 'Numpy', icon: devIcons.numpy },
    pandas: { title: 'Pandas', icon: devIcons.pandas },
};

export default devItems;
