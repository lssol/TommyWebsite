export class Image {
    link: string;
    description: string;
    isBig: boolean;
}

export class Project {
    id: number;
    name: string;
    description: string;
    category: string;
    images: Image[];
}

