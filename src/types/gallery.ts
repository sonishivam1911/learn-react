interface Scientist {
    name: string;
    imageId: string;
    profession: string;
    awards: string;
    discovery: string;
}

export interface GalleryProps {
    scientist: Scientist;
    size?: number;
}


export interface GalleryItemProps {
    name: string;
    imageId: string;
    profession: string;
    size?: number;
}