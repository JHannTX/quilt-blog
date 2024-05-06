import { Article } from "../models/article-interfaces"

export const designingPages: Article[] = [
    {
        title: {
            title: "design",
            subTitle: "testing design",
            urlSegment: "design"
        },
        sections: [
        {
            header: {
                header: "design"
            },
            content: [
                {
                    paragraph: "design",
                    picture: "https://i.imgur.com/9jAkP7w.jpg"
                },
                {
                    paragraph: "design again"
                }
            ]
        }]
    },
]