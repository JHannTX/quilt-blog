import { Article } from "../models/article-interfaces"

export const progressPages: Article[] = [
    {
        title: {
            title: "derp",
            subTitle: "testing derp",
            urlSegment: "derp"
        },
        sections: [
        {
            header: {
                header: "derp"
            },
            content: [
                {
                    paragraph: "derp",
                    picture: "https://i.imgur.com/9jAkP7w.jpg"
                },
                {
                    paragraph: "derp again"
                }
            ]
        }]
    },
    {
        title: {
            title: "Very First Quilt",
            subTitle: "This is to test how the formatting looks with realer text",
            urlSegment: "first"
        },
        sections: [
            {
                header: {
                    header: "Final Result",
                    description: "No other pictures to reference at this time"
                },
                content: [
                    {
                        paragraph: "Here is the final result of my very first quilt! The background looks kinda funky because it is the carpet in my bedroom. This was really fun and I highly value this quilt.",
                        picture: "https://i.imgur.com/9jAkP7w.jpg"
                    }
                ]
            }
        ]
    },
    {
        title: {
            title: "Testing no subtitle",
            urlSegment: "subtitle"
        },
        sections: [
        {
            header: {
                header: "derp"
            },
            content: [
                {
                    paragraph: "derp",
                    picture: "https://i.imgur.com/9jAkP7w.jpg"
                },
                {
                    paragraph: "derp again"
                }
            ]
        }]
    },
]