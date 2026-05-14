const { createApp } = Vue;

createApp({
  data() {
    return {
      year: new Date().getFullYear(),
      listedBooks: 42,
      categories: ["Fiction", "Nonfiction", "Mystery", "Sci-Fi", "History", "Kids"],
      books: [
        {
          name: "The Night Train",
          vibe: "Paperback • Good condition • Seller: Maya",
          price: "$7",
          swatch: "linear-gradient(140deg, #e8decf, #d5d4c9)"
        },
        {
          name: "Atomic Habits",
          vibe: "Hardcover • Like new • Seller: Jordan",
          price: "$11",
          swatch: "linear-gradient(140deg, #d6ccbb, #aeb8af)"
        },
        {
          name: "Dune",
          vibe: "Paperback • Fair condition • Seller: Lena",
          price: "$6",
          swatch: "linear-gradient(140deg, #d3ded4, #c2b39e)"
        },
        {
          name: "Sapiens",
          vibe: "Paperback • Good condition • Seller: Chris",
          price: "$9",
          swatch: "linear-gradient(140deg, #b8bfbd, #e3dfd8)"
        },
        {
          name: "The Hobbit",
          vibe: "Hardcover • Good condition • Seller: Priya",
          price: "$8",
          swatch: "linear-gradient(140deg, #e7d7bf, #d3e3db)"
        },
        {
          name: "Educated",
          vibe: "Paperback • Like new • Seller: Omar",
          price: "$10",
          swatch: "linear-gradient(140deg, #d9cec9, #b8c9c5)"
        }
      ]
    };
  }
}).mount("#app");
