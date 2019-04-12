exports.seed = function(knex, Promise) {
  return knex("posts").insert([
    {
      username: "randomuser",
      description:
        "Backend testing is much more straightforward than testing with React."
    },
    {
      username: "otheruser",
      description: "Random post description 12097482940 description."
    }
  ]);
};
