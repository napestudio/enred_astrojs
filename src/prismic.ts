import * as prismic from '@prismicio/client';

const API_ENDPOINT = "https://enred.cdn.prismic.io/api/v2";

const client = prismic.createClient(API_ENDPOINT);

export async function getHomePage() {
    return client.getByType('home');
}