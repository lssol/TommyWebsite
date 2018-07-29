export class Image {
    link: string;
    description: string;
    isBig: boolean;
}

export class Project {
    id: string;
    name: string;
    game: boolean;
    description: string;
    category: string;
    images: Image[];
}

