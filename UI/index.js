class Posts {
    
    constructor(photoPosts){
        this.photoPosts = photoPosts.filter(item=>Posts.validate(item));
    }

    static _isStringArray(arr){
        if(Array.isArray(arr)){
            if(Array.prototype.every.call(arr,item=>typeof(item) === 'string')) {
                return true;
            }
        } 
        return false;
    }
    
    static _validateEdit(edit) {
        if(edit.hasOwnProperty('description') && typeof(edit.description) !== 'string'){
            return false;
        };
        
        if(edit.hasOwnProperty('photoLink') && (typeof(edit.photoLink) !== 'string' || edit.photoLink === '')){
            return false;
        };
        if(edit.hasOwnProperty('tags') && !Posts._isStringArray(edit.tags)){
            return false;
        };
        return true;
    }
    
    
        get(id) {
        let post = this.photoPosts.find(a => a.id === id);
        return post || false;
    }
    
    static validate(photoPost) {
        if(!photoPost.hasOwnProperty('id') || typeof(photoPost.id) !== 'string'){
            return false;
        }
        if(!photoPost.hasOwnProperty('description') || typeof(photoPost.description) !== 'string' || photoPost.description>200){
            return false;
        }
        if(!photoPost.hasOwnProperty('createdAt') || !(photoPost.createdAt instanceof Date)){
            return false;
        }
        if(!photoPost.hasOwnProperty('author') || typeof(photoPost.author) !== 'string' || photoPost.author === ''){
            return false;
        }
        if(!photoPost.hasOwnProperty('photoLink') || typeof(photoPost.photoLink) != 'string' || photoPost.photoLink === ''){
            return false;
        }
        if(!photoPost.hasOwnProperty('likes') || !Posts._isStringArray(photoPost.likes)){
            return false;
        }
        if(!photoPost.hasOwnProperty('tags') || !Posts._isStringArray(photoPost.tags)){
            return false;
        }
        return true;
    }

    remove(id){
        let post = photoPosts.findIndex(a => a.id === id);
        if(post !== -1){
            this.photoPosts.splice(post,1);
            return true;
        }
        return false;
    }
    
    add(post){
        if(Posts.validate(post)){
            this.photoPosts.push(post);
            return true;
        }
        return false;
    }
    
    addAll(newPosts){
            let invalidePosts = [];
            newPosts.forEach(item=>{
                if(!this.add(item)){
                    invalidePosts.push(item);
                }
            });
            return invalidePosts;
    }

    edit(id, edit){
        let post = this.get(id);
        if(post && Posts._validateEdit(edit)){
            if(edit.hasOwnProperty('description')){
                post.description = edit.description;
            };
            if(edit.hasOwnProperty('photoLink')){
                post.photoLink = edit.photoLink;
            };
            if(edit.hasOwnProperty('tags')){
                post.tags = edit.tags; 
            };
            return true;
        }
        return false;
    }
    
    getPage(filterConfig, skip = 0, top = 10){
        let result = this.photoPosts.slice(0,this.photoPosts.length);
        if(filterConfig.hasOwnProperty('author')){
            result = result.filter(item=>item.author === filterConfig.author);
        }
        if(filterConfig.hasOwnProperty('dateFrom') && filterConfig.dateFrom instanceof Date){
            result = result.filter(item=>item.createdAt > filterConfig.dateFrom);
        }
        if(filterConfig.hasOwnProperty('dateTo') && filterConfig.dateTo instanceof Date){
            result = result.filter(item=>item.createdAt < filterConfig.dateTo);
        }
        if(filterConfig.hasOwnProperty('tags') && Posts._isStringArray(filterConfig.tags)){
            for(let i = 0; i < filterConfig.tags.length;++i){
                result = result.filter(item=>item.tags.find(item=>item.toLocaleLowerCase() === filterConfig.tags[i].toLocaleLowerCase()));
            }
        }
        result.sort((item1,item2)=>item2.createdAt-item1.createdAt);
        return result.splice(skip,top);
	}
	
	clear(){
		this.photoPosts.splice(0,photoPosts.length+1);
	}

}
let photoPosts = [
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
		description: '',
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
];
console.log(typeof(''));
let main = new Posts(photoPosts);
console.log('main.getPhotoPosts({},0,100)');
console.log(main.getPage({},0,100));
console.log('main.getPhotoPost(\'2\')');
console.log(main.get('2'));
console.log('main.validatePhotoPost(main.getPhotoPost(\'2\'))');
console.log(Posts.validate(main.get('2')));
console.log('main.editPhotoPost(\'2\',{tags:[\'nature\',],})');
console.log(main.edit('2',{tags:['nature',],}));
console.log('main.getPhotoPost(\'2\')');
console.log(main.get('2'));
console.log('main.getPhotoPosts({tags: \'natuRe\',})');
console.log(main.getPage({tags: 'natuRe',}));
console.log('main.getPhotoPosts({tags: [\'natuRe\'],})');
console.log(main.getPage({tags: ['natuRe'],}));
console.log('main.getPhotoPost(\'4\')');
console.log(main.get('4'));
console.log('main.editPhotoPost(\'4\',{tags: [\'nice\',], description: \'like this moment\',})');
console.log(main.edit('4',{tags: ['nice',], description: 'like this moment',}));
console.log('main.getPhotoPost(\'4\')');
console.log(main.get('4'));
console.log(main.addAll([{
	id: '11',
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
	id: '12',
	description: '',
	createdAt: new Date('2019-01-12T14:00:00'),
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
},]));
console.log(main.getPage({},0,100));
console.log(main.remove('2'));
console.log(main.get('2'));
console.log(main.getPage({},0,20));

console.log(main.getPage({},0,20));

