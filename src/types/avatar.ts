export interface AvatarProps {
    person: {name: string, imageId: string}, 
    // ? means it can be undefined
    size?: number
}