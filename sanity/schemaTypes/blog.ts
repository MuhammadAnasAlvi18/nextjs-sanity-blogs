export default {
    name : "blogs",
    type : "document",
    title : "Blogs",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Blog Title",
        },
        {
            name: "slug",
            type: "slug",
            title: "Blog Slug",
            options: {
                source: "title",
            }
        },
        {
            name: "titleImage",
            type: "image",
            title: "Blog Title Image",
        },
        {
            name: "smallDescription",
            type: "text",
            title: "Small Description",
        },
        {
            name: "content",
            type: "array",
            title: "Content",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
}