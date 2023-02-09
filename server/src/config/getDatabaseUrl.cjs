const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/recipe-app-using-api_development",
      test: "postgres://postgres:postgres@localhost:5432/recipe-app-using-api_test",
      e2e: "postgres://postgres:postgres@localhost:5432/recipe-app-using-api_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
