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
        let post = this.photoPosts.findIndex(a => a.id === id);
        if(post !== -1){
            this.photoPosts.splice(post,1);
            return true;
        }
        return false;
    }
    
    getNextId(){
        let id = 0;
        this.photoPosts.forEach(el=>{if(Number(el.id)>id) id = Number(el.id);});
        return String(id+1);
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