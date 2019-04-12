const posts = require("./posts-model.js");
const db = require("../data/dbConfig.js");

describe("posts model", () => {
  beforeEach(async () => {
    await db("posts").truncate();
  });
  it("should retrieve all posts", async () => {
    await db("posts").insert({
      username: "username",
      description: "Random description"
    });
    await db("posts").insert({
      username: "username2",
      description: "description2"
    });
    const postlist = await posts.find();
    expect(postlist).toHaveLength(2);
  });
  it("should retrieve post by id", async () => {});
  it("should create the provided post", async () => {
    await posts.create({
      username: "username",
      description: "Random description"
    });
    const postlist = await db("posts");
    expect(postlist).toHaveLength(1);
  });
  it("should delete the post by id", async () => {});
  it("should edit the post", async () => {});
});
