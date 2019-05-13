
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
        node.querySelectorAll('.button-like')[0].onclick = function(){
            Controller.likePhotoPost(post);
        };
        node.querySelectorAll('.options')[0].onclick = function(){
            View.showDeleteOrEditWindow(post);
        };
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
        document.getElementsByClassName('load-more')[0].addEventListener('click', Controller.loadMore);
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
        let likeButtons = document.getElementsByClassName('button-like');
        for (let element of likeButtons) {
            element.setAttribute('disabled', 'false');
        }
    }
    static hideOptions(){
        let buttons = document.getElementsByClassName('options');
        for (let element of buttons) {
            element.setAttribute('style', 'display: none');
        }
        let likeButtons = document.getElementsByClassName('button-like');
        for (let element of likeButtons) {
            element.setAttribute('disabled', 'true');
        }
    }
    static showGuestInterface(){
        let head = document.querySelectorAll('header')[0];
        let logout = document.getElementsByClassName('userintf');
        if(logout[0]){
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
    static showLogInWindow() {
        document.getElementsByClassName('login-window')[0].setAttribute('style', 'display: flex');
        document.querySelectorAll('.cancel-login')[0].onclick = function(){
            View.hideLogInWindow();
        };
    }
    static hideLogInWindow() {
        document.getElementsByClassName('login-window')[0].setAttribute('style', 'display: none');
    }
    static showDeleteWindow(id) {
        document.getElementsByClassName('delete-window')[0].setAttribute('style', 'display: flex');
        document.querySelectorAll('.submit-delete')[0].onclick = function(){
            Controller.deletePost(id);
        };
        document.querySelectorAll('.cancel-delete')[0].onclick = function(){
            View.hideDeleteWindow();
        };
    }
    static hideDeleteWindow() {
        document.getElementsByClassName('delete-window')[0].setAttribute('style', 'display: none');
    }
    static showEditWindow(post) {
        document.getElementsByClassName('edit-window')[0].setAttribute('style', 'display: flex');
        document.getElementsByClassName('edit-form')[0].elements.path.value = post.photoLink;
        document.getElementsByClassName('edit-form')[0].elements.description.value = post.description;
        document.getElementsByClassName('edit-form')[0].elements.tags.value = post.tags.join('#');
        document.querySelectorAll('.submit-edit')[0].onclick = function(){
            Controller.editPost(post);
        };
        document.querySelectorAll('.cancel-edit')[0].onclick = function(){
            View.hideEditWindow();
        };
    }
    static hideEditWindow() {
        document.getElementsByClassName('edit-window')[0].setAttribute('style', 'display: none');
    }
    static showAddWindow() {
        document.getElementsByClassName('add-window')[0].setAttribute('style', 'display: flex');
        document.querySelectorAll('.cancel-add')[0].onclick = function(){
            View.hideAddWindow();
        };
    }
    static hideAddWindow() {
        document.getElementsByClassName('add-window')[0].setAttribute('style', 'display: none');
    }
    static showDeleteOrEditWindow(post) {
        document.getElementsByClassName('delete-or-edit')[0].setAttribute('style', 'display: flex');
        document.querySelectorAll('.delete-button')[0].onclick = function(){
            View.showDeleteWindow(post.id)
            View.hideDeleteOrEditWindow();
        };
        document.querySelectorAll('.edit-button')[0].onclick = function(){
            View.showEditWindow(post);
            View.hideDeleteOrEditWindow();
        };
        document.querySelectorAll('.cancel-delete-or-edit')[0].onclick = function(){
            View.hideDeleteOrEditWindow();
        };
    }
    static hideDeleteOrEditWindow() {
        document.getElementsByClassName('delete-or-edit')[0].setAttribute('style', 'display: none');
    }
}
let wall = document.getElementsByClassName("wall")[0];

