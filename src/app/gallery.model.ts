export class Image {
    link: string;
    description: string;
    isBig: boolean;
    images: Image[];
    width: number;
    height: number;

}

export class Project {
    id: string;
    name: string;
    game: boolean;
    description: string;
    category: string;
    mainImage: Image;
    images: Image[];
}

