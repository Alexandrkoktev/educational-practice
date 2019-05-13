let Controller = (function () {
    let photoPostsList;
    let userName = '';
    let lastFilterConfig = {};
    let pageNumber = 1;
    return {
        restore(){
            let lPhosts = JSON.parse(localStorage.getItem('lPhosts'));
            if (lPhosts === null) {
                photoPostsList = new Posts([
                    {
                        id: '1',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'https://www.anime-planet.com/images/characters/chika-fujiwara-149354.jpg?t=1549070006',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nofilter',
                        ],
                    },
                    {
                        id: '2',
                        description: '',
                        createdAt: new Date('2019-02-01T12:00:00'),
                        author: 'Alexandr',
                        photoLink: 'https://i.ytimg.com/vi/0sLaYGjGIDo/maxresdefault.jpg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'sdf',
                        ],
                    },
                    {
                        id: '3',
                        description: '',
                        createdAt: new Date('2019-01-03T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'https://vignette.wikia.nocookie.net/absolute/images/6/6c/1404725714539.jpg/revision/latest?cb=20141114181322&path-prefix=ru',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '4',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'http://www.animeonline.cc/uploads/posts/2018-07/1530900014_004.jpg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '5',
                        description: '',
                        createdAt: new Date('2018-01-01T13:00:00'),
                        author: 'Alexandr',
                        photoLink: 'http://animeonline.su/zend/site/upload/screenshots/16166/100014/442020.jpg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'school',
                        ],
                    },
                    {
                        id: '6',
                        description: 'Dolphin is a common name of aquatic mammals within the infraorder Cetacea. The term dolphin usually refers to the extant families Delphinidae (the oceanic dolphins), Platanistidae (the Indian river dolphins), Iniidae (the new world river dolphins), and Pontoporiidae (the brackish dolphins), and the extinct Lipotidae (baiji or Chinese river dolphin). There are 40 extant species named as dolphins.',
                        createdAt: new Date('2019-03-01T14:00:00'),
                        author: 'vlad',
                        photoLink: 'https://steamuserimages-a.akamaihd.net/ugc/856101944688070842/853AAC1A4465F050856DDDD6DDDDDCACBBE405CC/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'nofilter',
                        ],
                    },
                    {
                        id: '7',
                        description: '',
                        createdAt: new Date('2018-12-01T14:12:00'),
                        author: 'Alexandr',
                        photoLink: 'https://i.ytimg.com/vi/JgWOjwmf7LU/maxresdefault.jpg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'bigcity',
                        ],
                    },
                    {
                        id: '8',
                        description: '',
                        createdAt: new Date('2017-01-10T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4Wm5Iv_I0-ViBz0baMbhTT2O8QY1ALY7UhhvTJRKdBk_IpAq',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '9',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'https://i.pinimg.com/736x/83/aa/a6/83aaa66c4f3fd179b13f544b0a94a335.jpg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '10',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'http://animevost.club/_sf/9/36867113.jpg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'filter',
                        ],
                    },
                    {
                        id: '11',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'http://pm1.narvii.com/6395/b8c73337db89f13c478524e378590b806edb30c7_00.jpg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '12',
                        description: '',
                        createdAt: new Date('2019-01-12T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'https://i.ytimg.com/vi/B6comOyoWJk/maxresdefault.jpg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '13',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'https://pa1.narvii.com/6520/deb037807fe01f6cee9142c1bc3cd09c65ef8522_hq.gif',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '14',
                        description: 'Dolphin is a common name of aquatic mammals within the infraorder Cetacea. The term dolphin usually refers to the extant families Delphinidae (the oceanic dolphins), Platanistidae (the Indian river dolphins), Iniidae (the new world river dolphins), and Pontoporiidae (the brackish dolphins), and the extinct Lipotidae (baiji or Chinese river dolphin). There are 40 extant species named as dolphins.',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'http://i3.beon.ru/45/20/2352045/59/83741959/1e42eb25ec05.jpeg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '15',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'http://i3.beon.ru/45/20/2352045/59/83741959/1e42eb25ec05.jpeg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '16',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'http://i3.beon.ru/45/20/2352045/59/83741959/1e42eb25ec05.jpeg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '17',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'http://i3.beon.ru/45/20/2352045/59/83741959/1e42eb25ec05.jpeg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '18',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'vlad',
                        photoLink: 'http://i3.beon.ru/45/20/2352045/59/83741959/1e42eb25ec05.jpeg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '19',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'http://i3.beon.ru/45/20/2352045/59/83741959/1e42eb25ec05.jpeg',
                        likes: [
                            'Alexandr',
                            'Vlad',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                    {
                        id: '20',
                        description: '',
                        createdAt: new Date('2019-01-01T14:00:00'),
                        author: 'Alexandr',
                        photoLink: 'http://i3.beon.ru/45/20/2352045/59/83741959/1e42eb25ec05.jpeg',
                        likes: [
                            'Petia',
                            'Vera',
                        ],
                        tags: [
                            'lp',
                            'nature',
                            'nofilter',
                        ],
                    },
                ]);
            } else {
                lPhosts.forEach(item => item.createdAt = new Date(item.createdAt));
                photoPostsList = new Posts(lPhosts);
            }
        },
        logIn() {
            let login = document.getElementsByClassName('login-form')[0].elements.login.value;
            if(login !==''){
                userName = login;
                View.hideLogInWindow();
                View.showUserInteface(userName);
                View.showAdd();
                View.showOptions();
                document.getElementsByClassName('add')[0].addEventListener('click', View.showAddWindow);
                document.getElementsByClassName('logout')[0].addEventListener('click', Controller.logOut);
                Controller.showPhotoPosts();
                Controller.saveUser();
                return true;
            }
        },
        add(){
            let path = document.getElementsByClassName('add-form')[0].elements.path.value;
            let description = document.getElementsByClassName('add-form')[0].elements.description.value;
            let tags = document.getElementsByClassName('add-form')[0].elements.tags.value;
            if(path!==''){
                photoPostsList.add({
                    id: photoPostsList.getNextId(),
                    description: description,
                        createdAt: new Date(),
                        author: userName,
                        photoLink: path,
                        likes: [],
                        tags: tags.split('#'),
                });
                View.hideAddWindow();
                Controller.savePhotos();
                Controller.showPhotoPosts();
            }
        },
        logOut() {
            userName = '';
            View.showGuestInterface();
            View.hideAdd();
            Controller.showPhotoPosts();
            View.hideOptions();
            Controller.saveUser();
            document.getElementsByClassName('signin')[0].addEventListener('click', View.showLogInWindow);
            document.getElementsByClassName('login-button')[0].addEventListener('click', Controller.logIn);
        },
        loadMore(){
            View.removeLoad(wall);
            let photoPosts = photoPostsList.getPage(lastFilterConfig,pageNumber*10);
            pageNumber++;
            photoPosts.forEach(el=>View.showPost(wall,el));
            let tmp  = (photoPostsList.getPage(lastFilterConfig,pageNumber*10,1)).length;
            if(photoPostsList.getPage(lastFilterConfig,pageNumber*10,1).length!==0){
                View.showLoad(wall);
            }
        },
        showPhotoPosts() {
            View.removeAll(wall);
            pageNumber = 1;
            let photoPosts = photoPostsList.getPage(lastFilterConfig);
            if (photoPosts.length === 0) {
                View.removeAll(wall);
            } else {
                photoPosts.forEach(item => View.showPost(wall, item));
                if (photoPosts.length === 10 && photoPostsList.getPage(lastFilterConfig,10,1).length === 1) {
                    View.showLoad(wall);
                }
                if (userName === '') {
                    View.hideOptions();
                }
            }
        },
        savePhotos() {
            localStorage.removeItem('lPhosts');
            localStorage.setItem('lPhosts', JSON.stringify(photoPostsList.photoPosts));
        },
        saveUser(){
            localStorage.removeItem('userName');
            localStorage.setItem('userName', JSON.stringify(userName));
        },
        likePhotoPost(post){
            let postTmp = photoPostsList.get(post.id);
            if(postTmp){
                let index = postTmp.likes.indexOf(userName);
                if(index===-1){
                    postTmp.likes.push(userName);
                } else{
                    postTmp.likes.splice(index,1);
                }
                View.replacePost(wall,postTmp);
                Controller.savePhotos();
            }
        },
        deletePost(id){
            View.hideDeleteWindow();
            photoPostsList.remove(id);
            Controller.savePhotos();
            Controller.showPhotoPosts();
        },
        editPost(post){
            let path = document.getElementsByClassName('edit-form')[0].elements.path.value;
            let description = document.getElementsByClassName('edit-form')[0].elements.description.value;
            let tags = document.getElementsByClassName('edit-form')[0].elements.tags.value;
            if(path!==''){
                photoPostsList.edit(post.id,{
                    id: post.id,
                    description: description,
                        createdAt: post.createdAt,
                        author: post.author,
                        photoLink: path,
                        likes: post.likes,
                        tags: tags.split('#'),
                });
                View.hideEditWindow();
                Controller.savePhotos();
                Controller.showPhotoPosts();
            }
        },
        getFilter(){
            let filter = {};
            let dateFrom = document.getElementsByClassName('filters')[0].elements.dateFrom.value;
            let dateTo = document.getElementsByClassName('filters')[0].elements.dateTo.value;
            let tags = document.getElementsByClassName('filters')[0].elements.tags.value;
            let author = document.getElementsByClassName('filters')[0].elements.name.value;
            if(author!==''){
                filter.author = author;
            }
            if(tags!==''){
                filter.tags = tags.split('#');
            }
            if(dateFrom!==''){
                filter.dateFrom = new Date(dateFrom);
            }
            if(dateTo!==''){
                filter.dateTo = new Date(dateTo);
            }
            lastFilterConfig = filter;
            Controller.showPhotoPosts();
        },
        start() {
            Controller.restore();
            Controller.showPhotoPosts();
            Controller.savePhotos();
            document.getElementsByClassName('submit-add')[0].addEventListener('click', Controller.add);
            document.getElementsByClassName('date-from-filter')[0].addEventListener('input', Controller.getFilter);
            document.getElementsByClassName('date-to-filter')[0].addEventListener('input', Controller.getFilter);
            document.getElementsByClassName('name-filter')[0].addEventListener('input', Controller.getFilter);
            document.getElementsByClassName('tags-filter')[0].addEventListener('input', Controller.getFilter);
            Controller.logOut();
        },
    }
}());
Controller.start();