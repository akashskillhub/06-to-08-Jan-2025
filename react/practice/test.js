const articles = [
    { title: "aa", desc: "aaa" },
    { title: "bb", desc: "bbb" },
    { title: "cc", desc: "ccc" },
]

const copy = articles.filter(item => item.desc !== "bbb")
console.log(copy);



