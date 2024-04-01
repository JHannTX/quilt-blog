export interface Article {
    title: Title;
    sections: Sections[];
}

export interface Title {
    title: string;
    subTitle?: string
    urlSegment: string;
}

export interface Sections {
    header: SectionHeader;
    content: SectionContent[];
}

export interface SectionHeader {
    header: string;
    description?: string;
}

export interface SectionContent {
    paragraph: string;
    picture?: string;
    // add alt text or create a picture object
}