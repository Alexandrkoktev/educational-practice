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
		photoLink: 'sgdf',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
		photoLink: 'photo.png',
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
	photoLink: 'photo.png',
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
	photoLink: 'photo.png',
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
main.clear();
console.log(main.getPage({},0,20));
