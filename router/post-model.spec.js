const posts = require("./posts-model.js");
const db = require("../data/dbConfig.js");

describe("posts model", () => {
  beforeEach(async () => {
    await db("posts").truncate();
  });
  it("should create the provided post", async () => {});
  it("should retrieve post by id", async () => {});
  it("should retrieve all posts", async () => {});
  it("should delete the post by id", async () => {});
  it("should edit the post", async () => {});
});
