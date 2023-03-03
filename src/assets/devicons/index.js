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
    js: { name: 'js', title: 'Javascript', icon: devIcons.javascript },
    html: { name: 'html', title: 'HTML5', icon: devIcons.html5 },
    css: { name: 'css', title: 'CSS3', icon: devIcons.css3 },
    sass: { name: 'sass', title: 'SASS', icon: devIcons.sass },
    react: { name: 'react', title: 'React', icon: devIcons.react },
    vue: { name: 'vue', title: 'Vue', icon: devIcons.vue },
    // node: { name: 'node', title: 'Node.JS', icon: devIcons.nodejs },
    // express: { name: 'express', title: 'Express', icon: devIcons.express },
    mongodb: { name: 'mongodb', title: 'MongoDB', icon: devIcons.mongodb },
    jest: { name: 'jest', title: 'Jest', icon: devIcons.jest },
    webpack: { name: 'webpack', title: 'Webpack', icon: devIcons.webpack },
    npm: { name: 'npm', title: 'NPM', icon: devIcons.npm },
    django: { name: 'django', title: 'Django', icon: devIcons.django },
    numpy: { name: 'numpy', title: 'Numpy', icon: devIcons.numpy },
    pandas: { name: 'pandas', title: 'Pandas', icon: devIcons.pandas },
};

export default devItems;
