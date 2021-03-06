export class Image {
    link: string;
    description: string;
    isBig: boolean;
    isVideo: boolean;
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
    overlayBackgroundColor: string;
    overlayTextColor: string;
    projectPageTextLeft: string;
    projectPageTextRight: string;
    width: number;
}

