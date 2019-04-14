
class View{
    static _createNode(post){
        let template = document.querySelector('#node-temp');
        let node = template.content.cloneNode(true);
        node.querySelectorAll('.note')[0].setAttribute('id', post.id);
        node.querySelector('#name').innerHTML = post.author; 
        node.querySelector('#date').innerHTML = post.createdAt.toDateString();
        node.querySelector('#photo').setAttribute('src',post.photoLink);
        node.querySelector('#amount-likes').innerHTML = post.likes.length;
        let str = '';
        post.tags.forEach(element => {
            str+='#'+element;
        });
        node.querySelector('#tags').innerHTML = str;
        node.querySelector('#discription').innerHTML = post.description;
        return node;
    }
    static showPost(wall, post){
        wall.appendChild(View._createNode(post));
    }
    static removeLoad(wall){
        let load = document.getElementById('load');
        if(load !== null){
            wall.removeChild(load);
        }
    }
    static showLoad(wall){
        
        if(wall.querySelector('#load') === null){
            let load = document.querySelector('#load-temp');
            wall.appendChild(load.content.cloneNode(true));
        }
    }
    static removeNote(wall, id){
        let note = document.getElementById(id);
        if(note){
            wall.removeChild(note);
        }
    }
    static showAdd(){
        document.getElementById('add').setAttribute('style','display: relative');
    }
    static hideAdd() {
        document.getElementById('add').setAttribute('style', 'display: none');
    }
    static showOptions(){
        let buttons = document.getElementsByClassName('options');
        for (let element of buttons) {
            element.setAttribute('style', 'display: relative');
        }
    }
    static hideOptions(){
        let buttons = document.getElementsByClassName('options');
        for (let element of buttons) {
            element.setAttribute('style', 'display: none');
        }
    }
    static showGuestInteface(){
        let head = document.querySelectorAll('header')[0];
        let logout = document.getElementsByClassName('userintf');
        if(logout){
            head.removeChild(logout[0]);
        }
        head.appendChild(document.querySelector('#guest-temp').content.cloneNode(true));
    }
    static replacePost(wall, post) {
        let node = document.getElementById(post.id);
        if(node !== null){
            wall.replaceChild(View._createNode(post), node);
        }
    }
    static removeAll(wall){
        while(wall.firstChild){
            wall.removeChild(wall.firstChild);
        }

    }
    static showUserInteface(name){
        let head = document.querySelectorAll('header')[0];
        let signin = document.getElementsByClassName('signin');
        if(signin){
            head.removeChild(signin[0]);
        }
        let logout = document.querySelector('#user-temp').content.cloneNode(true);
        logout.querySelector('#user').innerHTML = name;
        head.appendChild(logout);
    }
}
let wall = document.getElementsByClassName("wall")[0];
View.showPost(wall, {
    id: '20',
    description: 'Oceanic dolphins or Delphinidae are a widely distributed family of dolphins that live in the sea. Thirty extant species are described. They include several big species whose common names contain "whale" rather than "dolphin", such as the killer whale and the pilot whales. Delphinidae is a family within the superfamily Delphinoidea, which also includes the porpoises (Phocoenidae) and the Monodontidae (beluga whale and narwhal). River dolphins are relatives of the Delphinoidea.Oceanic dolphins or Delphinidae are a widely distributed family of dolphins that live in the sea. Thirty extant species are described. They include several big species whose common names contain "whale" rather than "dolphin", such as the killer whale and the pilot whales. Delphinidae is a family within the superfamily Delphinoidea, which also includes the porpoises (Phocoenidae) and the Monodontidae (beluga whale and narwhal). River dolphins are relatives of the Delphinoidea.',
    createdAt: new Date('2019-01-01T14:00:00'),
    author: 'Alexandr',
    photoLink: 'img/02.jpg',
    likes: [
        'Petia',
        'Vera',
    ],
    tags: [
        'lp',
        'nature',
        'nofilter',
    ],
});
View.hideAdd();
View.showAdd();
View.hideOptions();
View.showPost(wall, {
    id: '19',
    description: 'Oceanic dolphins or Delphinidae are a widely distributed family of dolphins that live in the sea. Thirty extant species are described. They include several big species whose common names contain "whale" rather than "dolphin", such as the killer whale and the pilot whales. Delphinidae is a family within the superfamily Delphinoidea, which also includes the porpoises (Phocoenidae) and the Monodontidae (beluga whale and narwhal). River dolphins are relatives of the Delphinoidea.Oceanic dolphins or Delphinidae are a widely distributed family of dolphins that live in the sea. Thirty extant species are described. They include several big species whose common names contain "whale" rather than "dolphin", such as the killer whale and the pilot whales. Delphinidae is a family within the superfamily Delphinoidea, which also includes the porpoises (Phocoenidae) and the Monodontidae (beluga whale and narwhal). River dolphins are relatives of the Delphinoidea.',
    createdAt: new Date('2019-01-01T14:00:00'),
    author: 'Alexandr',
    photoLink: 'img/02.jpg',
    likes: [
        'Petia',
        'Vera',
    ],
    tags: [
        'lp',
        'nature',
        'nofilter',
    ],
},);
View.showPost(wall, {
    id: '18',
    description: 'Oceanic dolphins or Delphinidae are a widely distributed family of dolphins that live in the sea. Thirty extant species are described. They include several big species whose common names contain "whale" rather than "dolphin", such as the killer whale and the pilot whales. Delphinidae is a family within the superfamily Delphinoidea, which also includes the porpoises (Phocoenidae) and the Monodontidae (beluga whale and narwhal). River dolphins are relatives of the Delphinoidea.Oceanic dolphins or Delphinidae are a widely distributed family of dolphins that live in the sea. Thirty extant species are described. They include several big species whose common names contain "whale" rather than "dolphin", such as the killer whale and the pilot whales. Delphinidae is a family within the superfamily Delphinoidea, which also includes the porpoises (Phocoenidae) and the Monodontidae (beluga whale and narwhal). River dolphins are relatives of the Delphinoidea.',
    createdAt: new Date('2019-01-01T14:00:00'),
    author: 'Alexandr',
    photoLink: 'img/02.jpg',
    likes: [
        'Petia',
        'Vera',
    ],
    tags: [
        'lp',
        'nature',
        'nofilter',
    ],
},);
View.showLoad(wall);
View.showUserInteface('Ptax');
View.replacePost(wall, {
    id: '20',
    description: 'Oceanic dolphins or Delphinidae are a widely distributed family of dolphins that live in the sea. Thirty extant species are described. They include several big species whose common names contain "whale" rather than "dolphin", such as the killer whale and the pilot whales. Delphinidae is a family within the superfamily Delphinoidea, which also includes the porpoises (Phocoenidae) and the Monodontidae (beluga whale and narwhal). River dolphins are relatives of the Delphinoidea.Oceanic dolphins or Delphinidae are a widely distributed family of dolphins that live in the sea. Thirty extant species are described. They include several big species whose common names contain "whale" rather than "dolphin", such as the killer whale and the pilot whales. Delphinidae is a family within the superfamily Delphinoidea, which also includes the porpoises (Phocoenidae) and the Monodontidae (beluga whale and narwhal). River dolphins are relatives of the Delphinoidea.',
    createdAt: new Date('2019-01-01T14:00:00'),
    author: 'Roma',
    photoLink: 'img/02.jpg',
    likes: [
        'Petia',
        'Vera',
    ],
    tags: [
        'lp',
        'nature',
        'nofilter',
    ],
});
View.removeAll(wall);
let a = main.getPage({});
a.forEach(element=>View.showPost(wall,element));
View.showLoad(wall);

