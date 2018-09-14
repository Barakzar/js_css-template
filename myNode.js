const USER_EMAIL = Symbol();
class User {
    set Email(value) {
        if(!/@/.test(value)) throw new Error(`invalid email: ${value}`);
        this[USER_EMAIL] = value; 
    }
    get Email() {
        return this[USER_EMAIL];
    }
}