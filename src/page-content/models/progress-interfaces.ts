export interface ProgressArticle {
    title: ProgressTitle;
    sections: ProgressSections;
}

export interface ProgressTitle {
    title: string;
    project?: string;
}

export interface ProgressSections{
    header: ProgressSectionHeader;
    content: ProgressSectionContent[];
}

export interface ProgressSectionHeader{
    header: string;
    description?: string;
}

export interface ProgressSectionContent {
    paragraph: string;
    picture?: string;
}