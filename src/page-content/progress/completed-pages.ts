import { Article } from "../models/article-interfaces"

export const completedPages: Article[] = [
    {
        title: {
            title: "completed",
            subTitle: "testing completed",
            urlSegment: "completed"
        },
        sections: [
        {
            header: {
                header: "completed"
            },
            content: [
                {
                    paragraph: "completed",
                    picture: "https://i.imgur.com/9jAkP7w.jpg"
                },
                {
                    paragraph: "completed again"
                }
            ]
        }]
    },
]