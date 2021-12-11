// private String id;
// private String name;
// private String author;
// private ArrayList<String> movieList;

export class Playlist {

    constructor(
        private _id: string|null,
        private _name: string,
        private _author: string,
        private _movieList: Array<string>
    ){}
        
    public get id(): string|null {
        return this._id;
    }
    public set id(value: string|null) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }
    public get movieList(): Array<string> {
        return this._movieList;
    }
    public set movieList(value: Array<string>) {
        this._movieList = value;
    }


}