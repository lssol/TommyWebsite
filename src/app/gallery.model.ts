export class Image {
    link: string;
    description: string;
    isBig: boolean;
    images: Image[];
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

