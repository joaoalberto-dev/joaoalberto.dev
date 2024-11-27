import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT;

function createContentfulClient() {
  if (!accessToken || !space || !environment) {
    throw new Error("Contentful credentials are not set");
  }

  return createClient({
    space,
    environment,
    accessToken,
  });
}

const contentfulClient = createContentfulClient();

export { contentfulClient };
