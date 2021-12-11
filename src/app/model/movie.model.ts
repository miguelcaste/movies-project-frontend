// private String id;
// private String title;
// private int year;
// private String image;
// private String director;
// private String actors;

export class Movie {

    constructor(
        private _id: string,
        private _title: string,
        private _year: number,
        private _image: string,
        private _director: string,
        private _actors: string
    ){}
        
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get year(): number {
        return this._year;
    }
    public set year(value: number) {
        this._year = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }
    public get director(): string {
        return this._director;
    }
    public set director(value: string) {
        this._director = value;
    }
    public get actors(): string {
        return this._actors;
    }
    public set actors(value: string) {
        this._actors = value;
    }


}