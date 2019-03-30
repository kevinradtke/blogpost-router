const uuidv4 = require('uuid/v4')

let postsArray = [
    {
        id: uuidv4(),
        title: "First Post",
        content: "Content of the post.",
        author: "Kevin Radtke",
        publishDate: new Date("March 23 2019 10:00")
    },
    {
        id: uuidv4(),
        title: "Web Class Laboratory",
        content: "New laboratory posted on the website.",
        author: "Alfredo Salazar",
        publishDate: new Date("January 31 2015 12:30")
    },
    {
        id: uuidv4(),
        title: "Last Post",
        content: "Third post to test this app.",
        author: "Kevin Radtke",
        publishDate: new Date("March 23 2019 15:30")
    }
]

const ListPosts = {

    get: function() {
        return postsArray
    },
    getByAuthor: function (author) {
        var match = []
        postsArray.forEach(function(item,index) {
            if (item.author == author) {
                match.push(item)
            }
        })
        return match
    },
    post: function(title, content, author, pDate) {
        let newPost = {
            id: uuidv4(),
            title: title,
            content: content,
            author: author,
            publishDate: new Date(pDate)
        }
        postsArray.push(newPost)
        return newPost
    },
    delete: function(id) {
        post = null
        postsArray.forEach(function(item,index) {
            if (id == item.id) {
                post = item
                postsArray.splice(index,1)
            }
        })
        return post
    },
    put: function (id, newPost) {
        post = null
        postsArray.forEach(item => {
            if (item.id == id) {
                post = item
                if (newPost.title) post.title = newPost.title
                if (newPost.content) post.content = newPost.content
                if (newPost.author) post.author = newPost.author
                if (newPost.publishDate) post.publishDate = new Date(newPost.publishDate)
            }
        })
        return post
    }
}

module.exports = { ListPosts }
