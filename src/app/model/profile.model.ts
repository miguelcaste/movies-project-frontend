// private String username; //Id
// private String password;
// private String email;
// private String image;
// private String biography;

export class Profile {

    constructor(
        private _username: string,
        private _password: string,
        private _email: string,
        private _image: string,
        private _biography: string
    ){}
        
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    public get biography(): string {
        return this._biography;
    }
    public set biography(value: string) {
        this._biography = value;
    }


}