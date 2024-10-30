// typing.d.ts
export type Post = {
    title: string;
    summary: string;
    image: any; // Adjust this type as necessary
    slug: {
        current: string; // Define slug as an object with a 'current' property
    };
};
